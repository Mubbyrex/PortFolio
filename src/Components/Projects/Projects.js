import React from "react";
import { projects } from "../../portfolio/portfolio";
import ProjectContainer from "../ProjectContainer/ProjectContainer";
import uniqid from "uniqid";
import "./Project.css";
const Projects = () => {
  if (!projects.length) return null;

  return (
    <section id="projects" className="section projects">
      <h2 className="section__title">Projects</h2>
      <div className="projects__grid">
        {projects.map((project) => (
          <ProjectContainer key={uniqid()} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
