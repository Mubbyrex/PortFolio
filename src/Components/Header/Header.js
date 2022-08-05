import React from "react";
import { header } from "../../portfolio/portfolio";
import Navbar from "../Navbar/Navbar";
import "./Header.css";

const Header = () => {
  const { homepage, title } = header;
  return (
    <header className="header center">
      <h3>
        {homepage ? (
          <a className="link" href={homepage}>
            {title}...
          </a>
        ) : (
          { title }
        )}
      </h3>
      <Navbar />
    </header>
  );
};

export default Header;
