import React from "react";
import "./Footer.scss";

import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const Footer = () => {
  const handleLinkedIn = () => {
    window.open("https://www.linkedin.com/in/bikramjit-roy/");
  };

  const handleGitHub = () => {
    window.open("https://github.com/Bikramjit-1");
  };

  return (
    <div className="footer">
      <div>
        <BsLinkedin className="icon" onClick={handleLinkedIn} />
        <BsGithub className="icon" onClick={handleGitHub} />
      </div>
      <div> Developed By Bikramjit Roy</div>
    </div>
  );
};

export default Footer;
