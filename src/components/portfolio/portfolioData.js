import Snapjob from "../../assets/img/portfolio/snapjob.svg";
import DotAndBoxes from "../../assets/img/portfolio/dot-and-boxes.png";
import Blackjack from "../../assets/img/portfolio/blackjack.png";

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
        description: "Dots and Boxes is a multiplayer online game. Players can play private tables with his friends and players can play tournaments also.",
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
        description:"Blackjack is a popular card game that is played between a dealer and one or more players. The objective of the game is to beat the dealer by having a hand that is worth more points than the dealer's hand, without going over 21. In this project, we will build a simple version of Blackjack using Node.js.",
      },
    ],
  },
];

export default PortfolioData;
