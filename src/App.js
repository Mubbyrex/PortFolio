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

function App() {
  const { themeMode } = ThemeState();
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
        <Projects />
        <Skills />
        <Contact />
      </main>
      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default App;
