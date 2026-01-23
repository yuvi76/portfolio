/**
 * Portfolio Data Configuration
 * 
 * This file contains all the content for your portfolio.
 * Update the values here to customize your portfolio.
 */

export const personalInfo = {
  name: {
    first: 'Yuvraj',
    last: 'Upadhyay'
  },
  role: 'Full Stack Developer',
  tagline: 'Portfolio / 2019 — 2026',
  location: 'Ahmedabad, India',
  email: 'upadhyayyuvi@gmail.com',
  phone: '7600104483',
  availability: '',
}

export const about = {
  title: 'About',
  description: `I am a Full Stack Developer with over 7 years of experience in web development, based in Ahmedabad, India. I specialize in creating end-to-end web solutions, database design, code review, team and server management.`,
}

export interface Project {
  id: number
  title: string
  role: string
  description: string
  link: string
  align?: 'left' | 'right'
}

export const featuredProjects: Project[] = [
  {
    id: 1,
    title: 'VALIDIZE — SECURE IDENTITY STORAGE APP',
    role: 'Full-Stack Development / Security',
    description: 'Validize revolutionizes trust-building by allowing you to securely store various identities in one single app.',
    link: 'https://validize.com/',
    align: 'right'
  },
  {
    id: 2,
    title: 'ASKITECT — AI-DRIVEN CONSTRUCTION PLATFORM',
    role: 'AI Development / RAG Implementation',
    description: 'AI-driven platform for construction and architecture solutions using Retrieval-Augmented Generation (RAG) technology.',
    link: 'https://askitect.com/en',
    align: 'left'
  },
  {
    id: 3,
    title: 'MYTE CODY — AI PROJECT PLANNING',
    role: 'AI Development / SaaS Platform',
    description: 'AI-driven platform for efficient project estimation and planning, streamlining the project management process.',
    link: 'https://mytecody.com/',
    align: 'right'
  },
  {
    id: 4,
    title: 'DOT BOX — CASUAL PUZZLE GAME',
    role: 'Game Development / Backend',
    description: 'Developed the backend for Dot Box casual game with engaging gameplay mechanics.',
    link: 'https://play.google.com/store/apps/details?id=com.a300mind.dotsandboxes',
    align: 'left'
  },
]

export const moreProjects: Project[] = [
  {
    id: 5,
    title: 'NODEBAZZAR — E-COMMERCE MICROSERVICE',
    role: 'Backend Development / Microservices',
    description: 'Node Bazaar is a powerful backend microservice that handles crucial tasks like order processing, user authentication, payment gateway integration, and other backend functionalities. It\'s the backbone of an online store, ensuring a seamless and secure shopping experience for users.',
    link: 'https://github.com/yuvi76/node-bazaar',
    align: 'left'
  },
  {
    id: 6,
    title: 'TWITCH CLONE — LIVE STREAMING PLATFORM',
    role: 'Full-Stack Development / Streaming',
    description: 'Twitch Clone is a live streaming platform. Users can watch live streams, chat with other users, and create their own live streams.',
    link: 'https://github.com/yuvi76/twitch-clone',
    align: 'right'
  },
  {
    id: 7,
    title: 'BLACKJACK — MULTIPLAYER CARD GAME',
    role: 'Game Development / Socket.io',
    description: 'Real-time multiplayer Blackjack card game with Socket and event-based architecture.',
    link: '#',
    align: 'left'
  },
  {
    id: 8,
    title: 'BFK WARZONE — ACTION GAME BACKEND',
    role: 'Full-Stack Development / Game Backend',
    description: 'Developed the complete backend infrastructure for BFK Warzone action game with real-time multiplayer capabilities.',
    link: '#',
    align: 'right'
  },
  {
    id: 9,
    title: 'SELF-CARE ANGLE — SALON BOOKING',
    role: 'Full-Stack / Salon Booking',
    description: 'Comprehensive salon booking application with appointment management and service scheduling.',
    link: '#',
    align: 'left'
  },
]

export const communityContributions = {
  title: 'TECHNICAL EXPERTISE',
  description: 'I have extensive experience in full-stack development with specialization in MERN Stack, AI Integration, and Game Development.',
}

export const experienceEducation = [
  'Senior Software Engineer — Bytes Technolab (Jun 2023 - Present)',
  'Senior Software Engineer — Mind Inventory (Jan 2023 - Jun 2023)',
  'MERN Stack Developer — Yudiz Solutions (Jan 2019 - Dec 2022)',
  'MCA — Nirma University, Ahmedabad (2016-2019)',
  'BCA — Gujarat University, Ahmedabad (2013-2016)',
]

export const interests = {
  title: 'TECHNICAL SKILLS',
  description: 'Node.js, Nest.js, Next.js, React.js, Generative AI, Langchain, GraphQL, MongoDB, JavaScript, SQL, AWS, Docker, Stripe, Socket.io',
  github: 'https://github.com/yuvi76'
}

export const icebreakers = {
  title: 'EXPERTISE',
  description: 'I specialize in end-to-end web solutions, database design, code review, team management, and server management. I have led development teams in dynamic environments and contributed to backend development, API construction.',
}

export const contact = {
  description: 'Got a question, proposal, or project? Want to work together on something innovative? Feel free to reach out.',
  marqueeText: "LET'S TALK — LET'S COLLABORATE — SAY HELLO — BUILD SOMETHING AMAZING?",
  copyText: 'Click To Copy'
}

export const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/yuvraj-upadhyay'
  },
  {
    name: 'Github',
    url: 'https://github.com/yuvi76'
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/visuals_yuvi/'
  },
  {
    name: 'Email',
    url: 'mailto:upadhyayyuvi@gmail.com'
  },
]

export const footer = {
  designer: {
    name: 'Yuvraj Upadhyay',
    url: 'mailto:upadhyayyuvi@gmail.com'
  }
}
