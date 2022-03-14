import React from "react";
import { BsTwitter, BsGithub, BsWhatsapp } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

export default function SocialMedia() {
  return (
    <div className="app__social">
      <div>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com/ololchikelinco2"
        >
          <BsTwitter />
        </a>
      </div>
      <div>
        <a target="_blank" rel="noreferrer" href="https://github.com/linco6054">
          <BsGithub />
        </a>
      </div>
      <div>
        <a target="_blank" rel="noreferrer" href="https://wa.me/254791070041">
          <BsWhatsapp />
        </a>
      </div>
      <div>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/lincoln-kantet-5ba48616a/"
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}
