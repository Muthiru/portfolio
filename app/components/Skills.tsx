type Skill = {
  name: string;
  icon?: string;
};

type SkillGroup = {
  label: string;
  skills: Skill[];
};

const skillGroups: SkillGroup[] = [
  {
    label: 'Frontend',
    skills: [
      { name: 'React', icon: 'devicon-react-original colored' },
      { name: 'Nuxt 3', icon: 'devicon-nuxtjs-plain colored' },
      { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
      { name: 'JavaScript (ES6+)', icon: 'devicon-javascript-plain colored' },
      { name: 'Vue 3', icon: 'devicon-vuejs-plain colored' },
      { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-original colored' },
      { name: 'HTML5', icon: 'devicon-html5-plain colored' },
      { name: 'CSS3', icon: 'devicon-css3-plain colored' },
    ],
  },
  {
    label: 'Backend',
    skills: [
      { name: 'Node.js', icon: 'devicon-nodejs-plain colored' },
      { name: 'Express.js', icon: 'devicon-express-original' },
      { name: 'REST API Development' },
      { name: 'WebSocket' },
      { name: 'Async/Await' },
      { name: 'Edge Functions' },
    ],
  },
  {
    label: 'Databases & Data',
    skills: [
      { name: 'PostgreSQL', icon: 'devicon-postgresql-plain colored' },
      { name: 'MySQL', icon: 'devicon-mysql-original colored' },
      { name: 'Supabase', icon: 'devicon-supabase-plain colored' },
      { name: 'Firebase Firestore', icon: 'devicon-firebase-plain colored' },
      { name: 'NoSQL' },
      { name: 'SQL Queries' },
      { name: 'Data Validation' },
    ],
  },
  {
    label: 'Cloud & DevOps',
    skills: [
      { name: 'Google Cloud Platform', icon: 'devicon-googlecloud-plain colored' },
      { name: 'Firebase Auth / Storage', icon: 'devicon-firebase-plain colored' },
      { name: 'Docker', icon: 'devicon-docker-plain colored' },
      { name: 'CI/CD Pipelines' },
      { name: 'Git', icon: 'devicon-git-plain colored' },
      { name: 'GitHub', icon: 'devicon-github-original' },
      { name: 'Vercel', icon: 'devicon-vercel-original' },
    ],
  },
  {
    label: 'Auth, APIs & Integrations',
    skills: [
      { name: 'Google OAuth 2.0' },
      { name: 'Stripe API' },
      { name: 'Gemini API' },
      { name: 'Deriv WebSocket API' },
      { name: 'Kaggle API' },
      { name: 'Supabase Auth' },
    ],
  },
  {
    label: 'AI / ML',
    skills: [
      { name: 'TensorFlow', icon: 'devicon-tensorflow-original colored' },
      { name: 'OpenCV', icon: 'devicon-opencv-plain colored' },
      { name: 'DeepFace' },
      { name: 'scikit-learn' },
      { name: 'pandas', icon: 'devicon-pandas-plain colored' },
      { name: 'NumPy', icon: 'devicon-numpy-plain colored' },
      { name: 'PyQt5' },
    ],
  },
  {
    label: 'QA & Delivery Practices',
    skills: [
      { name: 'Manual Testing' },
      { name: 'Functional Testing' },
      { name: 'Regression Testing' },
      { name: 'API Testing (Postman)' },
      { name: 'Test Case Design' },
      { name: 'Bug Reporting' },
      { name: 'Defect Tracking' },
      { name: 'SQL Validation' },
      { name: 'Agile / Scrum' },
      { name: 'Selenium IDE' },
    ],
  },
  {
    label: 'Languages & Tools',
    skills: [
      { name: 'Python', icon: 'devicon-python-plain colored' },
      { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
      { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
      { name: 'Java', icon: 'devicon-java-plain colored' },
      { name: 'C++', icon: 'devicon-cplusplus-plain colored' },
      { name: 'VS Code', icon: 'devicon-vscode-plain colored' },
      { name: 'IntelliJ IDEA', icon: 'devicon-intellij-plain colored' },
      { name: 'CLion', icon: 'devicon-clion-plain colored' },
      { name: 'Cursor IDE' },
      { name: 'Claude Code' },
    ],
  },
];

function SkillChip({ isDuplicate = false, skill }: { isDuplicate?: boolean; skill: Skill }) {
  return (
    <div className="skill-item" aria-hidden={isDuplicate || undefined}>
      {skill.icon && <i className={skill.icon}></i>}
      {skill.name}
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="fade-in">
<p className="section-label">skills</p>
        <h2>Tech stack</h2>
      <div className="divider"></div>
      <p className="skills-intro">
        Tools I use across production SaaS work, full-stack projects, and AI/ML experiments.
      </p>
      {skillGroups.map(group => (
        <div className="skills-group" key={group.label}>
          <p className="skills-group-label">{group.label}</p>
          <div className="skills-marquee">
            <div className="skills-track">
              {[...group.skills, ...group.skills].map((skill, index) => (
                <SkillChip
                  isDuplicate={index >= group.skills.length}
                  skill={skill}
                  key={`${group.label}-${skill.name}-${index}`}
                />
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
