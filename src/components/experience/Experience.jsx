import React from "react";
import "./experience.css";
import { BsFillPatchCheckFill } from "react-icons/bs";

const frontendSkills = [
  { name: "HTML", level: "Experienced" },
  { name: "CSS", level: "Intermediate" },
  { name: "JavaScript", level: "Experienced" },
  { name: "Bootstrap", level: "Experienced" },
  { name: "Material UI", level: "Experienced" },
  { name: "Tailwind CSS", level: "Intermediate" },
  { name: "ReactJs", level: "Experienced" },
  { name: "NextJs", level: "Intermediate" },
];

const backendSkills = [
  { name: "Node.js", level: "Experienced" },
  { name: "Express.js", level: "Experienced" },
  { name: "MongoDB", level: "Intermediate" },
  { name: "RESTful API", level: "Experienced" },
  { name: "Websockets", level: "Intermediate" },
];

const Experience = () => {
  const renderSkills = (skills) =>
    skills.map((skill) => (
      <article className="experience_details" key={skill.name}>
        <BsFillPatchCheckFill className="experience_details-icon" />
        <div>
          <h4>{skill.name}</h4>
          <small className="text-light">{skill.level}</small>
        </div>
      </article>
    ));

  return (
    <section id="experience">
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            {renderSkills(frontendSkills)}
          </div>
        </div>

        <div className="experience_backend">
          <h3>Backend Development</h3>
          <div className="experience_content">
            {renderSkills(backendSkills)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
