import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Yuvraj" },
  { meta: "last name", metaInfo: "Upadhyay" },
  { meta: "Address", metaInfo: "Ahmedabad" },
  { meta: "phone", metaInfo: "+91 7600104483" },
  { meta: "Email", metaInfo: "upadhyayyuvi@gmail.com" },
  { meta: "langages", metaInfo: "English, Hindi, Gujarati" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
