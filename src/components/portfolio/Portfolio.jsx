import React from "react";
import "./portfolio.css";
import portfolio from "../../assets/portfolio_img.webp";

const Portfolio = () => {
  const data = [
    {
      id: 1,
      image: portfolio,
      title: "TextUtils - A ReactJs - A ReactJs-based Text utility Web App.",
      gitHub: "https://github.com/jayeshpandav/Textutils-React",
    },
    {
      id: 2,
      image: portfolio,
      title: "NewsApp - A ReactJS-based News App using News API.",
      gitHub: "https://github.com/jayeshpandav/NewsApp-react",
    },
    {
      id: 3,
      image: portfolio,
      title: "Codex OpenAI - Chat GPT clone using OpenAI API.",
      gitHub: "https://github.com/jayeshpandav/codex-openai",
      demo: "https://codexgpt.netlify.app/",
    },
    {
      id: 4,
      image: portfolio,
      title: "Crypto Hustle - Cryptocurrency tracking APP using ReactJS",
      gitHub: "https://github.com/jayeshpandav/crypto_hustle",
      demo: "https://crypto-hustle.netlify.app/",
    },
    {
      id: 5,
      image: portfolio,
      title: "Cultivo - A ML based Precision Farming website in ReactJs",
      gitHub: "https://github.com/jayeshpandav/Hackspiration_cultivo",
      demo: "https://cultivo.netlify.app/",
    },
    {
      id: 6,
      image: portfolio,
      title: "Maibhoomi - A travel planner website",
      gitHub: "https://github.com/jayeshpandav/Maibhoomi",
    },
    {
      id: 7,
      image: portfolio,
      title:
        "CSB Registration Website - Registration website for PICT CSI Student Branch",
      gitHub: "https://github.com/PCSB-Web-Team/FE-registration-portal",
      demo: "https://pcsbregistrations.tk/",
    },
    {
      id: 8,
      image: portfolio,
      title: "Netflix Clone - Using NextJS, Redux, Firebase",
      gitHub: "https://github.com/jayeshpandav/Netflix-clone",
      demo: "https://netflix-clone-7f79d.web.app/",
    },
    {
      id: 9,
      image: portfolio,
      title:
        "Finckalc - SIP and SWP Calculator webste using ReactJs, NodeJs and ExpressJs",
      gitHub: "https://github.com/jayeshpandav/Acumenn_challenge_frontend_2",
      demo: "https://finckalc.netlify.app/",
    },
    {
      id: 10,
      image: portfolio,
      title: "Portfolio Website - ReactJS",
      gitHub: "https://github.com/jayeshpandav/Portfolio-website",
      demo: "https://portfolio-jayeshpandav.netlify.app/",
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
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                >
                  Github
                </a>

                {demo ? (
                  <a
                    href={demo}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary"
                  >
                    Live Demo
                  </a>
                ) : (
                  <a
                    href={demo}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary"
                    style={{
                      backgroundColor: `var(--color-light)`,
                      cursor: "inherit",
                    }}
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
