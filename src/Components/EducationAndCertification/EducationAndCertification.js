import React from "react";
import { certifications } from "../../portfolio/portfolio";
import CertificateContainer from "../CertificateContainer/CertificateContainer";
import uniqid from "uniqid";
import "./EducationAndCertification.css";

const EducationAndCertification = () => {
  return (
    <section
      className="section education-and-certification reveal"
      id="education-and-certification"
    >
      <h2 className="section__title">Certifications</h2>
      <div className="certification__grid">
        {certifications.map((cert) => (
          <CertificateContainer key={uniqid()} certificate={cert} />
        ))}
      </div>
    </section>
  );
};

export default EducationAndCertification;
