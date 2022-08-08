import React from "react";
import { AiFillGithub, AiOutlineFolderView } from "react-icons/ai";
import uniqid from "uniqid";
import "./ProjectContainer.css";

const ProjectContainer = ({ project }) => {
  return (
    <div className="project">
      <h3>{project.name}</h3>
      <p className="project__description">{project.description}</p>
      {project.stack && (
        <ul className="project__stack">
          {project.stack.map((item) => (
            <li className="project__stack-item" key={uniqid()}>
              {item}
            </li>
          ))}
        </ul>
      )}
      <div style={{ display: "flex", justifyContent: "center" }}>
        {project.sourceCode && (
          <a
            href={project.sourceCode}
            aria-label="source code"
            className="link link--icon project_icon"
          >
            <AiFillGithub size="2em" />
          </a>
        )}

        {project.livePreview && (
          <a
            href={project.livePreview}
            aria-label="live preview"
            className=" link--icon"
          >
            <div className="project_icon">
              <AiOutlineFolderView size="2em" />
              <p>Live Site</p>
            </div>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectContainer;
