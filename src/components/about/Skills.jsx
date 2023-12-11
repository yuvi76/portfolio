import React from "react";

const skillsContent = [
  { skillClass: "p70", skillPercent: "70", skillName: "HTML" },
  { skillClass: "p90", skillPercent: "90", skillName: "JAVASCRIPT" },
  { skillClass: "p70", skillPercent: "70", skillName: "CSS" },
  { skillClass: "p90", skillPercent: "90", skillName: "NODEJS" },
  { skillClass: "p70", skillPercent: "70", skillName: "REACT" },
  { skillClass: "p90", skillPercent: "90", skillName: "MONGODB" },
  { skillClass: "p70", skillPercent: "70", skillName: "GRAPHQL" },
  { skillClass: "p80", skillPercent: "80", skillName: "NEXTJS" },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
          <div className={`c100 ${val.skillClass}`}>
            <span>{val.skillPercent}%</span>
            <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
            </div>
          </div>
          <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
            {val.skillName}
          </h6>
        </div>
      ))}
    </>
  );
};

export default Skills;
