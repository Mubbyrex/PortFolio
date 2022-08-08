import React from "react";
import "./Contact.css";
import { contact } from "../../portfolio/portfolio";

const Contact = () => {
  if (!contact.email) return null;
  return (
    <section className="section contact center reveal" id="contact">
      <h2 className="section__title">Contact</h2>
      <a href={`mailto:${contact.email}`}>
        <span type="button" className="btn btn--outline">
          Email
        </span>
      </a>
    </section>
  );
};

export default Contact;
