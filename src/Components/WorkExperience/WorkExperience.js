import React from "react";
import "./WorkExperience.css";
import { workExperience } from "../../portfolio/portfolio";

const WorkExperience = () => {
  return (
    <section className="section work-experience reveal" id="work-experience">
      <h2 className="section__title">Work Experience</h2>
      <div className="work-experience__list">
        {workExperience.map((job, index) => (
          <div key={index} className="work-experience__item">
            <h3>{job.jobTitle}</h3>
            <h4>{job.company}</h4>
            <p>{job.duration}</p>
            {Array.isArray(job.description) ? (
              <ul>
                {job.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            ) : (
              <p>{job.description}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
