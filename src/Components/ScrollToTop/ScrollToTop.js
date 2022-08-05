import React, { useEffect, useState } from "react";
import "./ScrollToTop.css";
import { AiOutlineArrowUp } from "react-icons/ai";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const togglevisiblity = () =>
      window.pageYOffset > 500 ? setIsVisible(true) : setIsVisible(false);

    window.addEventListener("scroll", togglevisiblity);
    return () => window.removeEventListener("scroll", togglevisiblity);
  }, []);
  return isVisible ? (
    <div className="scroll-top">
      <a href="#top">
        <AiOutlineArrowUp size="3em" />
      </a>
    </div>
  ) : null;
};

export default ScrollToTop;
