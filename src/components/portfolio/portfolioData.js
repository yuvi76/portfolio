import Snapjob from "../../assets/img/portfolio/snapjob.svg";
import DotAndBoxes from "../../assets/img/portfolio/dot-and-boxes.png";
import Blackjack from "../../assets/img/portfolio/blackjack.png";
import NodeBazzar from "../../assets/img/portfolio/node-bazzar.png";
import Twitch from "../../assets/img/portfolio/twitch.jpeg";
import ImaginAI from "../../assets/img/portfolio/ImaginAI.jpg";

const PortfolioData = [
  // {
  //   id: 1,
  //   type: "Snapjob",
  //   image: Snapjob,
  //   delayAnimation: "0",
  //   modalDetails: [
  //     {
  //       project: "Backend",
  //       technology: "NestJs, Graphql, Mongodb, Stripe",
  //       description: "Snapjob is a platform for organizations to provide jobs and snapper can apply and work for that job.",
  //     },
  //   ],
  // },
  {
    id: 1,
    type: "Dot and Boxes",
    image: DotAndBoxes,
    delayAnimation: "0",
    modalDetails: [
      {
        project: "Multiplayer Game",
        technology: "Nodejs, Redis, Socket.io, Mongodb",
        description:
          "Dots and Boxes is a multiplayer online game. Players can play private tables with his friends and players can play tournaments also.",
        // preview: "Play Store Link",
        // link: "https://play.google.com/store/apps/details?id=com.a300mind.dotsandboxes",
      },
    ],
  },
  {
    id: 2,
    type: "Blackjack",
    image: Blackjack,
    delayAnimation: "100",
    modalDetails: [
      {
        project: "Multiplayer Game",
        technology: "Nodejs, Mongodb, Socket.io, Redis",
        description:
          "Blackjack is a popular card game that is played between a dealer and one or more players. The objective of the game is to beat the dealer by having a hand that is worth more points than the dealer's hand, without going over 21. In this project, we will build a simple version of Blackjack using Node.js.",
      },
    ],
  },
  {
    id: 3,
    type: "NodeBazzar",
    image: NodeBazzar,
    delayAnimation: "200",
    modalDetails: [
      {
        project: "E-commerce Microservice",
        technology: "Nestjs, Mongodb, Docker,Redis",
        description:
          "Node Bazaar is a powerful backend microservice that handles crucial tasks like order processing, user authentication, payment gateway integration, and other backend functionalities. It's the backbone of an online store, ensuring a seamless and secure shopping experience for users.",
        preview: "Github Link",
        link: "https://github.com/yuvi76/node-bazaar",
      },
    ],
  },
  {
    id: 4,
    type: "Twitch Clone",
    image: Twitch,
    delayAnimation: "300",
    modalDetails: [
      {
        project: "Live Streaming Platform",
        technology: "NextJs, Mongodb, Tailwindcss, Prisma",
        description:
          "Twitch Clone is a live streaming platform. Users can watch live streams, chat with other users, and create their own live streams.",
        preview: "Github Link",
        link: "https://github.com/yuvi76/twitch-clone",
      },
    ],
  },
  {
    id: 5,
    type: "ImaginAI",
    image: ImaginAI,
    delayAnimation: "400",
    modalDetails: [
      {
        project: "SaaS Platform",
        technology: "NextJs, Mongodb, Tailwindcss, Cloudinary AI, Razorpay",
        description:
          "ImaginAI is a SaaS platform for photographers to upload their photos and get the best AI-generated edits for their photos.",
        preview: "Preview Link",
        link: "https://imagin-ai-yuvi.vercel.app/",
      },
    ],
  },
];

export default PortfolioData;
