import React from "react";
import "./about.css";
import ME from "../../assets/Jayesh.jpg";
import { FaAward } from "react-icons/fa";
import { SiHackster } from "react-icons/si";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About-img" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>2 years Experience (Projects)</small>
            </article>
            <article className="about_card">
              <SiHackster className="about_icon" />
              <h5>Hackathons</h5>
              <small>2</small>
            </article>
            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>10+ completed</small>
            </article>
          </div>
          <p>
            A highly motivated and skilled web developer with experience in
            HTML, CSS, JavaScript, Bootstrap, Material UI, Tailwind, and
            ReactJS. Proven track record of successfully completing personal
            projects using ReactJS and participating in college club projects
            utilizing the same technology. Additionally, possess a strong
            foundation in back-end development and actively working to improve
            my skills in ExpressJS and NodeJS. Also having a good knowledge of
            C++ programming language and hands-on c programming and python
            programming
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
