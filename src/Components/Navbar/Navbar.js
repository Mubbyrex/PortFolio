import React, { useState } from "react";
import { ThemeState } from "../../Context/theme";
import { contact, projects, skills } from "../../portfolio/portfolio";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import "./Navbar.css";

const Navbar = () => {
  const { themeMode, toggleTheme } = ThemeState();
  const [showNavList, setShowNavList] = useState(false);

  const toggleNavList = () => setShowNavList(!showNavList);

  return (
    <nav className="center nav">
      <ul
        style={{ display: showNavList ? "flex" : null }}
        className="nav__list"
      >
        {projects.length ? (
          <li className="nav__list-item">
            <a
              href="#projects"
              onClick={toggleNavList}
              className="link link--nav"
            >
              Projects
            </a>
          </li>
        ) : null}
        {skills.length ? (
          <li className="nav__list-item">
            <a
              href="#skills"
              onClick={toggleNavList}
              className="link link--nav"
            >
              Skills
            </a>
          </li>
        ) : null}
        {contact.email ? (
          <li className="nav__list-item">
            <a
              href="#contact"
              onClick={toggleNavList}
              className="link link--nav"
            >
              Contact
            </a>
          </li>
        ) : null}
      </ul>

      <button
        onClick={toggleTheme}
        type="button"
        className="btn btn--icon nav__theme"
        aria-label="toggle theme"
      >
        {themeMode === "dark" ? (
          <BsFillSunFill size="2em" />
        ) : (
          <BsFillMoonFill size="2em" />
        )}
      </button>

      <button
        type="button"
        onClick={toggleNavList}
        className="btn btn--icon nav__hamburger"
        aria-label="toggle navigation"
      >
        {showNavList ? (
          <AiOutlineClose size="2em" />
        ) : (
          <AiOutlineMenu size="2em" />
        )}
      </button>
    </nav>
  );
};

export default Navbar;
