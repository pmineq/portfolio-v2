export const SKILLS = {
  frontend: {
    title: 'Frontend / UX Engineering',
    items: [
      'React',
      'TypeScript',
      'HTML5',
      'CSS3',
      'SCSS',
      'Motion: Framer Motion · GSAP',
      'Storybook',
      'Three.js',
    ],
  },
  tools: {
    title: 'Tools',
    items: [
      'Figma',
      'Github',
      'Jira',
      'Confluence',
      'PhotoShop',
      'Illustrator',
    ],
  },
} as const;

export const NAV_BUTTONS = [
  { path: '/main', label: '메인' },
  { path: '/project', label: '프로젝트 바로가기' },
] as const;

export const PROFILE = {
  experience: 5,
  role: 'UX Frontend Engineer',
  name: '박민혜',
} as const;
