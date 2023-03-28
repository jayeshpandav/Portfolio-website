import React from "react";
import "./services.css";
import { BsCheck } from "react-icons/bs";

const frontendServices = [
  "Creating responsive and accessible websites using HTML, CSS, and JavaScript",
  "Developing user interfaces using popular front-end frameworks like ReactJs and NextJs",
  "Designing and implementing UIs with Bootstrap, Material UI, and Tailwind CSS",
  "Providing maintenance and optimization services for existing front-end codebases",
];

const backendServices = [
  "Developing scalable and performant web applications using Node.js and Express.js",
  "Building RESTful APIs to handle data retrieval and manipulation",
  "Designing and implementing real-time applications using Websockets",
  "Developing and integrating with NoSQL databases like MongoDB",
  "Providing ongoing support and maintenance for existing backend systems",
];

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>Frontend Development</h3>
          </div>

          <ul className="service_list">
            {frontendServices.map((service, index) => (
              <li key={index}>
                <BsCheck className="service_list-icon" />
                <p>{service}</p>
              </li>
            ))}
          </ul>
        </article>

        <article className="service">
          <div className="service_head">
            <h3>Backend Development</h3>
          </div>

          <ul className="service_list">
            {backendServices.map((service, index) => (
              <li key={index}>
                <BsCheck className="service_list-icon" />
                <p>{service}</p>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
