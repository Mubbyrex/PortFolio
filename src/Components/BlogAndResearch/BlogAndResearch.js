import React from "react";
import { AiFillMediumCircle } from "react-icons/ai";
import { FaResearchgate } from "react-icons/fa";
import "./BlogAndResearch.css";

const BlogAndResearch = () => {
  const blogPosts = [
    {
      title: "Understanding React Hooks",
      date: "January 15, 2023",
      link: "https://example.com/understanding-react-hooks",
    },
    {
      title: "A Guide to Node.js",
      date: "February 10, 2023",
      link: "https://example.com/guide-to-nodejs",
    },
    {
      title: "Exploring Machine Learning",
      date: "March 5, 2023",
      link: "https://example.com/exploring-machine-learning",
    },
  ];

  const profiles = {
    medium: "https://medium.com/@yourprofile",
    researchGate: "https://www.researchgate.net/profile/YourProfile",
  };

  return (
    <section
      className="section blog-and-research reveal"
      id="blog-and-research"
    >
      <h2 className="section__title">Blog and Research</h2>
      <div className="blog-research__profiles">
        <div className="blog-research__profile">
          <a
            href={profiles.medium}
            target="_blank"
            rel="noopener noreferrer"
            className="blog-research__profile-link"
          >
            <AiFillMediumCircle size="3em" />
          </a>
          <p className="blog-research__profile-label">Medium</p>
        </div>
        <div className="blog-research__profile">
          <a
            href={profiles.researchGate}
            target="_blank"
            rel="noopener noreferrer"
            className="blog-research__profile-link"
          >
            <FaResearchgate size="3em" />
          </a>
          <p className="blog-research__profile-label">Research Gate</p>
        </div>
      </div>
    </section>
  );
};

export default BlogAndResearch;
