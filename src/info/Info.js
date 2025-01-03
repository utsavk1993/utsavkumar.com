import self from "../img/self.png";
import mock1 from "../img/mock1.png";
import mock2 from "../img/mock2.png";
import mock3 from "../img/mock3.png";
import mock4 from "../img/mock4.png";
import mock5 from "../img/mock5.png";

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export const colors = ["rgb(42, 197, 184)", "rgb(54, 133, 193)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/* 
This variable will change the layout of the website from multipage to single, scrollable page
*/
export const singlePage = false;

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
  firstName: "Utsav",
  lastName: "Kumar",
  initials: "uk", // the example uses first and last, but feel free to use three or more if you like.
  position: "Senior Front-end Developer",
  selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [
    // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
    {
      emoji: "🔋",
      text: "fueled by energy drink",
    },
    {
      emoji: "⛰️",
      text: "based in vancouver, canada",
    },
    {
      emoji: "💼",
      text: "Senior Software Engineer at Highspot",
    },
    {
      emoji: "📧",
      text: "utsavkumar.ca@gmail.com",
    },
  ],
  socials: [
    {
      link: "https://github.com/utsavk1993",
      icon: "fa fa-github",
      label: "github",
    },
    {
      link: "https://www.linkedin.com/in/utsavk1993/",
      icon: "fa fa-linkedin",
      label: "linkedin",
    },
    // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
    // Just change the links so that they lead to your social profiles.
  ],
  bio: "Hi! I’m Utsav, a software engineer at Highspot with over 9 years of experience building elegant front-end solutions using React and TypeScript. I studied Computer Science at the University of Windsor. When I’m not coding, you can find me exploring the latest in AI or crafting modern, user-friendly web apps. Let’s build something amazing together!",
  skills: {
    proficientWith: [
      "javascript",
      "react",
      "typescript",
      "html5",
      "css3",
      "jest",
      "cypress",
    ],
    exposedTo: [
      "nodejs",
      "figma",
      "canva",
      "postgresql",
      "mongodb",
      "docker",
      "supabase",
    ],
  },
  experience: [
    {
      label: "Senior Software Engineer at Highspot",
      duration: "Jun 2023 - Present",
    },
    {
      label: "Software Engineer at Splunk",
      duration: "Feb 2019 - Feb 2023",
    },
    {
      label: "Software Engineer at Cybage Software",
      duration: "Jun 2015 - Aug 2017",
    },
    {
      label: "Jr. Web Developer at Weblineindia",
      duration: "Jun 2014 - Jun 2015",
    },
  ],
  hobbies: [
    {
      label: "travel",
      emoji: "🌎",
    },
    {
      label: "music",
      emoji: "🎵",
    },
    {
      label: "movies",
      emoji: "🎥",
    },
    // Same as above, change the emojis to match / relate to your hobbies or interests.
    // You can also remove the emojis if you'd like, I just think they look cute :P
  ],
  portfolio: [],
  // portfolio: [ // This is where your portfolio projects will be detailed
  //     {
  //         title: "Project 1",
  //         live: "https://paytonpierce.dev", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
  //         source: "https://github.com/paytonjewell", // this should be a link to the **repository** of the project, where the code is hosted.
  //         image: mock1
  //     },
  //     {
  //         title: "Project 2",
  //         live: "https://paytonpierce.dev",
  //         source: "https://github.com/paytonjewell",
  //         image: mock2
  //     },
  //     {
  //         title: "Project 3",
  //         live: "https://paytonpierce.dev",
  //         source: "https://github.com/paytonjewell",
  //         image: mock3
  //     },
  //     {
  //         title: "Project 4",
  //         live: "https://paytonpierce.dev",
  //         source: "https://github.com/paytonjewell",
  //         image: mock4
  //     },
  //     {
  //         title: "Project 5",
  //         live: "https://paytonpierce.dev",
  //         source: "https://github.com/paytonjewell",
  //         image: mock5
  //     }
  // ]
};
