export type Certification = {
  title: string;
  issuer: string;
  issuedAt?: string;
  credentialUrl?: string;
  certificateFile?: string;
  previewImage?: string;
  skills: string[];
};

export const certifications: Certification[] = [
  {
    title: 'Claude Code in Action',
    issuer: 'Anthropic',
    issuedAt: 'May 2026',
    credentialUrl: 'https://verify.skilljar.com/c/iiaaxuyr4edu',
    certificateFile: '/Certs/certificate-iiaaxuyr4edu-1777718890.pdf',
    previewImage: '/Certs/previews/claude-code-in-action.png',
    skills: ['Claude Code', 'AI tooling', 'Developer workflow'],
  },
  {
    title: 'Introduction to Model Context Protocol',
    issuer: 'Anthropic',
    issuedAt: 'May 2026',
    credentialUrl: 'https://verify.skilljar.com/c/ecj2p7w6rz6z',
    certificateFile: '/Certs/certificate-ecj2p7w6rz6z-1778189732.pdf',
    previewImage: '/Certs/previews/model-context-protocol.png',
    skills: ['MCP', 'AI integrations', 'Protocol design'],
  },
  {
    title: 'Claude with the Anthropic API',
    issuer: 'Anthropic',
    issuedAt: 'May 2026',
    credentialUrl: 'https://verify.skilljar.com/c/uq9v6wgegn2o',
    certificateFile: '/Certs/certificate-uq9v6wgegn2o-1778185524.pdf',
    previewImage: '/Certs/previews/anthropic-api.png',
    skills: ['Anthropic API', 'LLMs', 'API integration'],
  },
  {
    title: 'Introduction to Agent Skills',
    issuer: 'Anthropic',
    issuedAt: 'May 2026',
    certificateFile: '/Certs/certificate-ss8inw3jhq7a-1778187690.pdf',
    previewImage: '/Certs/previews/agent-skills.png',
    skills: ['AI agents', 'Agent skills', 'Automation'],
  },
  {
    title: 'Python Essentials 2',
    issuer: 'Cisco Networking Academy',
    issuedAt: 'Mar 2026',
    certificateFile: '/Certs/Python_Essentials_2_certificate_njamadaniel3-gmail-com_2640e860-4b0c-4b00-a672-100a2bd6f658-1.pdf',
    previewImage: '/Certs/previews/python-essentials-2.png',
    skills: ['Python', 'OOP', 'Problem solving'],
  },
  {
    title: 'Python Essentials 1',
    issuer: 'Cisco Networking Academy',
    issuedAt: 'Dec 2025',
    certificateFile: '/Certs/Python_Essentials_1_certificate_njamadaniel3-gmail-com_72c948ca-4398-400e-b67d-c34d07dcf7cf-1.pdf',
    previewImage: '/Certs/previews/python-essentials-1.png',
    skills: ['Python', 'Programming fundamentals', 'Data types'],
  },
  {
    title: 'Certificate of Internship',
    issuer: 'Priot Digital Systems',
    issuedAt: 'Oct 2025',
    certificateFile: '/Certs/Priot_Certificate%20of%20Internship_Daniel%20Njama.pdf',
    previewImage: '/Certs/previews/priot-internship.png',
    skills: ['Full-stack development', 'SaaS', 'API integrations'],
  },
  {
    title: 'JavaScript Essentials 1',
    issuer: 'Cisco Networking Academy',
    issuedAt: 'Jun 2025',
    certificateFile: '/Certs/_certificate_njamadaniel3-gmail-com_6d89de2d-f54a-4cd3-be91-a0e2f54ede0c.pdf',
    previewImage: '/Certs/previews/javascript-essentials-1.png',
    skills: ['JavaScript', 'Web fundamentals', 'Programming'],
  },
];
