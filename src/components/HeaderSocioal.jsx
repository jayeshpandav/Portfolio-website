import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

function HeaderSocioal() {
  return (
    <>
      <div className="header_socials">
        <a
          href="https://www.linkedin.com/in/jayesh-pandav-68368922a/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/jayeshpandav"
          target="_blank"
          rel="noreferrer"
        >
          <BsGithub />
        </a>
      </div>
    </>
  );
}

export default HeaderSocioal;
