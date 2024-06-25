import React from "react";

const experienceContent = [
  {
    year: "Jul 2023 - Present",
    position: "Senior Software Engineer",
    companyName: "Bytes Technolab Inc.",
    details: `I am a Senior Software Engineer with contributing to backend development, database design, and API construction. I also gained valuable leadership and team management skills by successfully leading and managing a team of developers in a dynamic and challenging environment.`,
  },
  {
    year: "Jan 2023 - Jun 2023",
    position: "Senior Software Engineer",
    companyName: "MindInventory",
    details: `I am a Senior Software Engineer with extensive experience in game backend development. I have worked on various games such as Dice Prisoner, Blackjack with Socket and Event Base, and Dot Box Game, designing, developing, and maintaining game backends to ensure seamless gameplay and user experience. My contributions have increased user engagement and revenue, and I possess skills in Socket programming, event-based architecture, and data storage management, among others.`,
  },
  {
    year: "Jan 2019 - Dec 2022",
    position: "MERN Stack Developer",
    companyName: "Yudiz",
    details: `I have experience working on multiple game backends and as a full-stack developer in BFK Warzone. I am skilled in configuring projects from scratch, designing databases, collaborating with UI/UX and QA teams, and deploying, testing, and managing servers. My strong communication skills allow me to easily understand client requirements and ensure their satisfaction throughout the project lifecycle.`,
  }
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.companyName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
