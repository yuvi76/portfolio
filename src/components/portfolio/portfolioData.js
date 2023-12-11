import Snapjob from "../../assets/img/portfolio/snapjob.svg";
import DotAndBoxes from "../../assets/img/portfolio/dot-and-boxes.png";
import BFKWarzone from "../../assets/img/portfolio/BFK-logo.png";
import Nftiz from "../../assets/img/portfolio/nftiz.svg";
import HighCardBnb from "../../assets/img/portfolio/high-card-bnb.svg";
import BonesClubNft from "../../assets/img/portfolio/bones-club.svg";
import ICO from "../../assets/img/portfolio/ico.png";
import Blackjack from "../../assets/img/portfolio/blackjack.png";
import Casino from "../../assets/img/portfolio/casino.png";

const PortfolioData = [
  {
    id: 1,
    type: "Snapjob",
    image: Snapjob,
    delayAnimation: "0",
    modalDetails: [
      {
        project: "Backend",
        technology: "NestJs, Graphql, Mongodb, Stripe",
        description: "Snapjob is a platform for organizations to provide jobs and snapper can apply and work for that job.",
      },
    ],
  },
  {
    id: 2,
    type: "Dot and Boxes",
    image: DotAndBoxes,
    delayAnimation: "100",
    modalDetails: [
      {
        project: "Multiplayer Game",
        technology: "Nodejs, Redis, Socket.io, Mongodb",
        description: "Dots and Boxes is a multiplayer online game. Players can play private tables with his friends and players can play tournaments also.",
        preview: "Play Store Link",
        link: "https://play.google.com/store/apps/details?id=com.a300mind.dotsandboxes",
      },
    ],
  },
  {
    id: 3,
    type: "BFK warzone",
    image: BFKWarzone,
    delayAnimation: "200",
    modalDetails: [
      {
        project: "Multiplayer Game",
        technology: "Nodejs, Mongodb, Socket.io, Redis",
        description: "BFK WARZONE is a Simple 2D Hero Shooter Multiplayer Matchmaking Game with a complex ecosystem powered by the fortis as in-game Hero Characters with one mission to protect the fort from aliens. The game hosts many modes and allows players to earn and rank while advancing in the warzone.",
        preview: "www.bfkwarzone.com",
        link: "https://bfkwarzone.com",
      },
    ],
  },
  {
    id: 4,
    type: "Blackjack",
    image: Blackjack,
    delayAnimation: "0",
    modalDetails: [
      {
        project: "Multiplayer Game",
        technology: "Nodejs, Mongodb, Socket.io, Redis",
        description:"Blackjack is a popular card game that is played between a dealer and one or more players. The objective of the game is to beat the dealer by having a hand that is worth more points than the dealer's hand, without going over 21. In this project, we will build a simple version of Blackjack using Node.js.",
      },
    ],
  },
  {
    id: 5,
    type: "Nftiz",
    image: Nftiz,
    delayAnimation: "100",
    modalDetails: [
      {
        project: "NFT Marketplace",
        technology: "Nodejs, Mongodb, Javascript, HTML",
        description: "Nftiz is where users can create their NFT and sell it on this platform. Users can sell their NFTs on an auction basis. Build Admin panel for Mint NFTs and manage users.",
        preview: "www.nftiz.biz",
        link: "https://nftiz.biz",
      }
    ]
  },
  {
    id: 6,
    type: "High Card BNB",
    image: HighCardBnb,
    delayAnimation: "200",
    modalDetails: [
      {
        project: "Crypto Card Game",
        technology: "Node js, Socket.io, Mongodb, HTML, Javascript",
        description: "High Card BNB is a crypto card game. Players can play with card games with Blockchain Currency Named as BNB. Which user had Higher Card will win the game.",
      },
    ],
  },
  {
    id: 7,
    type: "Bones Club NFT",
    image: BonesClubNft,
    delayAnimation: "0",
    modalDetails: [
      {
        project: "Bones Club NFT",
        technology: "Nodejs, Mongodb, Javascript, HTML",
        description: "Bones club NFT is where users can pay Ethereum and users will get random NFT of Bones club. Build Admin panel for Mint NFTs and manage users.",
        preview: "www.bonesclub.io",
        link: "https://bonesclub.io",
      }
    ]
  },
  {
    id: 8,
    type: "Web Casino",
    image: Casino,
    delayAnimation: "100",
    modalDetails: [
      {
        project: "Web Casino",
        technology: "Nodejs, Mongodb, Javascript, HTML",
        description: "This is a platform where users slot games like spin mania, fruit fiesta. Users can buy coins from coin-payments and play the games."
      }
    ]
  },
  {
    id: 9,
    type: "Job Portal/ ICO Website",
    image: ICO,
    delayAnimation: "200",
    modalDetails: [
      {
        project: "Job Portal/ ICO Website",
        technology: "Nodejs, Mongodb, Javascript, HTML",
        description: "Create ERC20 token on Ethereum blockchain. Admin can start the pre-sale and crowd-sale. Admin also can set the price of the pre-sale and crowd-sale. Register users can purchase a token when pre-sale or crowd-sale starts. Admin can have some functionality like transfer token to a particular address, pay from bounty token, pay from the reserved token, Burn token. Admin can analyze the total earnings, monthly earnings, and which address has how much token."
      }
    ]
  }
];

export default PortfolioData;
