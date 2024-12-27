import "./App.css";
import Contact from "./Components/Contact/Contact";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import {} from "./Context/theme";
import { ThemeState } from "./Context/theme";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import Header from "./Components/Header/Header";
import WorkExperience from "./Components/WorkExperience/WorkExperience";
import EducationAndCertification from "./Components/EducationAndCertification/EducationAndCertification";
import BlogAndResearch from "./Components/BlogAndResearch/BlogAndResearch";

function App() {
  const { themeMode } = ThemeState();

  //animation function
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  window.addEventListener("scroll", reveal);
  return (
    <div
      id="top"
      className={
        themeMode === "light" ? `${themeMode} app lightbg` : `${themeMode} app`
      }
    >
      <Header />
      <main>
        <About />
        <WorkExperience />
        <EducationAndCertification />
        <Projects />
        <Skills />
        <BlogAndResearch />
        <Contact />
      </main>
      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default App;
