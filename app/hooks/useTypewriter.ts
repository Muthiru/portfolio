import { useEffect, useState } from 'react';

interface UseTypewriterOptions {
  phrases: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

export function useTypewriter({
  phrases,
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseDuration = 1400,
}: UseTypewriterOptions) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [characterIndex, setCharacterIndex] = useState(1);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const phrase = phrases[phraseIndex];
    const isComplete = !isDeleting && characterIndex === phrase.length;
    const isEmpty = isDeleting && characterIndex === 0;

    const timeout = window.setTimeout(
      () => {
        if (isComplete) {
          setIsDeleting(true);
          return;
        }

        if (isEmpty) {
          setIsDeleting(false);
          setPhraseIndex(current => (current + 1) % phrases.length);
          setCharacterIndex(1);
          return;
        }

        setCharacterIndex(current => current + (isDeleting ? -1 : 1));
      },
      isComplete ? pauseDuration : isDeleting ? deletingSpeed : typingSpeed,
    );

    return () => window.clearTimeout(timeout);
  }, [characterIndex, isDeleting, phraseIndex, phrases, typingSpeed, deletingSpeed, pauseDuration]);

  const text = phrases[phraseIndex].slice(0, characterIndex);
  const isLastPhrase = phraseIndex === phrases.length - 1;
  const isComplete = isLastPhrase && isDeleting && characterIndex === 0;

  return { text, isDeleting, isComplete };
}