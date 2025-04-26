import { useState } from "react";
import "./Projects.css";

export default function Projects() {
  const [unfolded, setUnfolded] = useState(false);

  const toggleUnfolded = () => {
    setUnfolded(!unfolded);
  };

  const projects = [
    {
      name: "GPTDeck",
      tagline: "Explore & Share Inspiring GPT Prompts",
      description:
        "GPTDeck is your go-to platform to discover, create, and share powerful GPT prompts with a community of AI enthusiasts.",
      tech: "Next.js, MongoDB",
      github: "https://github.com/sudosuanjal/gptdeck",
      live: "https://www.gptdeck.xyz/",
      date: "Apr 2024",
      icon: "gptdeck-icon.jpg", // Icon file in public folder
    },
    {
      name: "crowdFlow",
      tagline: "Connecting students with hackathons and events",
      description:
        "Explore thrilling hackathons, events, workshops, and seminars taking place at colleges in the state of Kerala . Engage with the community and maximize your potential.",
      tech: "React, Firebase",
      github: "https://github.com/sudosuanjal/project2",
      live: "https://crowdflow.vercel.app/",
      date: "Mar 2024",
      icon: "crowdflow_logo.jpeg",
    },
  ];

  return (
    <section className="projects-section">
      <h2>Projects</h2>
      <p className="projects-subtitle">
        A collection of web apps, tools, and experiments I've built
      </p>

      {/* <div className="code-snippet">
        <div className="code-content">
          <pre>
            <code>
              <span className="tag">&lt;projects</span>{" "}
              <span className="attr">/&gt;</span> showcases my work building
              with modern tools and frameworks. Each project represents a unique
              challenge and learning experience.
            </code>
          </pre>
        </div>
      </div> */}

      <div className="projects-container">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`project-card ${
              !unfolded && index > 0 ? "hidden-project" : ""
            } ${index > 0 ? `project-card-${index}` : ""}`}
          >
            <div className="notification-header">
              <div>
                <img
                  src={`/${project.icon}`}
                  alt={`${project.name} icon`}
                  className="project-icon"
                />
                <span>{project.name}</span>
              </div>
              <div>{project.date}</div>
            </div>
            <div className="tagline">
              <strong>{project.tagline}</strong>
            </div>
            <div className="description">{project.description}</div>
            <div className="tech-stack">
              <span className="tech-label">Tech:</span> {project.tech}
            </div>
            <div className="project-links">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a href={project.live} target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="toggle-button-wrapper">
        <button className="toggle-button" onClick={toggleUnfolded}>
          {unfolded ? "Collapse" : "Show More Projects"}
        </button>
      </div>
    </section>
  );
}
