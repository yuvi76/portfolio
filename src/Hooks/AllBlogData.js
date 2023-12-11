import { useState } from "react";
import Blog1 from "../assets/img/blog/blog-1.webp";
import Blog2 from "../assets/img/blog/blog-2.jpg";
import Blog3 from "../assets/img/blog/blog-3.jpg";
import Blog4 from "../assets/img/blog/blog-4.jpg";
import Blog5 from "../assets/img/blog/blog-5.jpg";

const AllBlogData = () => {
  const blogsData = [
    {
      id: 1,
      img: Blog1,
      title: "Develop GraphQL API using NestJS with MongoDB",
      date: "30 Nov 2023",
      description1: "GraphQL is an API query language developed by Facebook. It offers a more...",
      link: "https://www.bytestechnolab.com/blog/build-graphql-api-with-nestjs-and-mongodb-development"
    },
    {
      id: 2,
      img: Blog2,
      title: "Building a RESTful API with Node.js and MongoDB Atlas.",
      description1:
        "In the domains of JavaScript and Node.js, MongoDB has set up itself as the go-to database....",
      link: "https://blog.yudiz.com/building-a-restful-api-with-node-js-and-mongodb-atlas/"
    },
    {
      id: 3,
      img: Blog3,
      title: "Cryptocurrency Is Proving The Best Gauge Of The Coronavirus Outbreak After China Stats Shock.",
      description1:
        "China has declared that they're going to be cleaning banknot...",
      link: "https://blog.yudiz.com/cryptocurrency_proving_as_best_gauge_of_coronavirus_outbreak_post_china_stats_shock/"
    },
    {
      id: 4,
      img: Blog4,
      title: "First Transaction on Libra Blockchain.",
      description1:
        "Imagine that one of your friends lives across the sea & he/she requires some Libra coin, which you have in abundance. How cool it would be if you...",
      link: "https://blog.yudiz.com/first-transaction-on-libra-blockchain/"
    },
    {
      id: 5,
      img: Blog5,
      title: "Truly Decentralized Voting System powered by Blockchain (Version 1.0).",
      description1:
        "Think what would happen if the voting system is 100% trans...",
      link: "https://blog.yudiz.com/truly-decentralized-voting-system-powered-by-blockchain-version-1-0/"
    },
    
  ];

  const [singleData, setSingleData] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  const handleBlogsData = (id) => {
    const find = blogsData.find((item) => item?.id === id);
    setSingleData(find);
    setIsOpen(true);
  };

  return {
    singleData,
    isOpen,
    setIsOpen,
    blogsData,
    handleBlogsData,
  };
};

export default AllBlogData;
