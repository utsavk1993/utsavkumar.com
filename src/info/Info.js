// these are the colors that will be used in the gradient on the home page
export const colors = ['rgb(42, 197, 184)', 'rgb(54, 133, 193)'];

export const singlePage = false; // set to true to make the website a single page

export const info = {
  firstName: 'Utsav',
  lastName: 'Kumar',
  initials: 'uk', // the example uses first and last, but feel free to use three or more if you like.
  position: 'Senior Front-end Developer',
  selfPortrait: '/img/self.jpg', // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [
    {
      emoji: '🔋',
      text: 'fueled by energy drink',
    },
    {
      emoji: '⛰️',
      text: 'based in vancouver, canada',
    },
    {
      emoji: '💼',
      text: 'senior software engineer at Highspot',
    },
    {
      emoji: '📧',
      text: 'lets get in touch!',
      link: 'mailto:utsavkumar.ca@gmail.com',
    },
    {
      emoji: '📥',
      text: 'download my resume',
      link: 'https://drive.google.com/file/d/1ISgrOgiIEJ9sDB0HaPjI8MYugRmQZ5G1/view?usp=sharing',
    },
  ],
  socials: [
    {
      link: 'https://github.com/utsavk1993',
      icon: 'fa fa-github',
      label: 'github',
    },
    {
      link: 'https://www.linkedin.com/in/utsavk1993/',
      icon: 'fa fa-linkedin',
      label: 'linkedin',
    },
  ],
  bio: 'Hi! I’m Utsav, a software engineer at Highspot with over 9 years of experience building elegant front-end solutions using React and TypeScript. I studied Computer Science at the University of Windsor. When I’m not coding, you can find me exploring the latest in AI or crafting modern, user-friendly web apps. Let’s build something amazing together!',
  skills: {
    proficientWith: [
      'javascript',
      'react',
      'typescript',
      'html5',
      'css3',
      'jest',
      'cypress',
    ],
    exposedTo: [
      'nodejs',
      'figma',
      'canva',
      'postgresql',
      'mongodb',
      'docker',
      'supabase',
    ],
  },
  experience: [
    {
      label: 'Senior Software Engineer at Highspot',
      duration: 'Jun 2023 - Present',
    },
    {
      label: 'Software Engineer at Splunk',
      duration: 'Feb 2019 - Feb 2023',
    },
    {
      label: 'Software Engineer at Cybage Software',
      duration: 'Jun 2015 - Aug 2017',
    },
    {
      label: 'Jr. Web Developer at Weblineindia',
      duration: 'Jun 2014 - Jun 2015',
    },
  ],
  hobbies: [
    {
      label: 'travel',
      emoji: '🌎',
    },
    {
      label: 'music',
      emoji: '🎵',
    },
    {
      label: 'movies',
      emoji: '🎥',
    },
  ],
  portfolio: [
    {
      title: 'My Portfolio',
      live: 'https://utsavkumar.com',
      source: 'https://github.com/utsavk1993/utsavkumar.com/',
      image: '/img/portfolio.png',
    },
    {
      title: 'File Explorer',
      live: 'https://file-explorer-gamma-rose.vercel.app/',
      source: 'https://github.com/utsavk1993/file-explorer',
      image: '/img/file_explorer.png',
    },
  ],
};
