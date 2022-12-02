import React from "react";
import "./portfolio.css";
import portfolio from "../../assets/portfolio_img.webp";

const Portfolio = () => {
  const data = [
    {
      id: 1,
      image: portfolio,
      title: "This is a portfolio Item",
      gitHub: "https://www.github.com",
      demo: "https://www.getbootstrap.com",
    },
    {
      id: 2,
      image: portfolio,
      title: "This is a portfolio Item",
      gitHub: "https://www.github.com",
      demo: "https://www.getbootstrap.com",
    },
    {
      id: 3,
      image: portfolio,
      title: "This is a portfolio Item",
      gitHub: "https://www.github.com",
      demo: "https://www.getbootstrap.com",
    },
    {
      id: 4,
      image: portfolio,
      title: "This is a portfolio Item",
      gitHub: "https://www.github.com",
      demo: "https://www.getbootstrap.com",
    },
    {
      id: 5,
      image: portfolio,
      title: "This is a portfolio Item",
      gitHub: "https://www.github.com",
      demo: "https://www.getbootstrap.com",
    },
    {
      id: 6,
      image: portfolio,
      title: "This is a portfolio Item",
      gitHub: "https://www.github.com",
      demo: "https://www.getbootstrap.com",
    },
  ];
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {data.map(({ id, image, title, gitHub, demo }) => {
          return (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={image} alt="" />
              </div>
              <h3>{title}</h3>
              <div>
                <a
                  href={gitHub}
                  target='_blank'  rel="noreferrer"
                  className="btn"
                >
                  Github
                </a>
                <a
                  href={demo}
                  target='_blank'  rel="noreferrer"
                  className="btn btn-primary"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
