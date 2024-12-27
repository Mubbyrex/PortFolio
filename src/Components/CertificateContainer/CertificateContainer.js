import React from "react";
import "./CertificateContainer.css";

const CertificateContainer = ({ certificate }) => {
  return (
    <div className="certificate">
      <h3 className="certificate__title">{certificate.title}</h3>
      <p className="certificate__provider">{certificate.provider}</p>
      <p className="certificate__year">{certificate.year}</p>
      {certificate.link && (
        <a
          href={certificate.link}
          target="_blank"
          rel="noopener noreferrer"
          className="certificate__link"
        >
          View Certificate
        </a>
      )}
    </div>
  );
};

export default CertificateContainer;
