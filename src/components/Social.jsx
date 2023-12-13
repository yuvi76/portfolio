import React from "react";

const SocialShare = [
  { iconName: "fa fa-facebook", link: "https://www.facebook.com/yuvraj.upadhyay.1" },
  { iconName: "fa fa-instagram", link: "https://www.instagram.com/yuvi76_" },
  { iconName: "fa fa-linkedin", link: "https://www.linkedin.com/in/yuvraj-upadhyay" },
  { iconName: "fa fa-github", link: "https://www.github.com/yuvi76" },
  { iconName: "fa fa-medium", link: "https://medium.com/@upadhyayyuvi" },
];

const Social = () => {
  return (
    <ul className="social list-unstyled pt-1 mb-5">
      {SocialShare.map((val, i) => (
        <li key={i}>
          <a href={val.link} target="_blank" rel="noreferrer">
            <i className={val.iconName}></i>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;

