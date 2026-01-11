import Header from "./components/layout/Header.jsx";
import Main from "./components/layout/Main.jsx";
import Footer from "./components/layout/Footer.jsx";
import Projects from "./components/section/Projects.jsx";
import Skills from "./components/section/Skills.jsx";
import Experience from "./components/section/Experience.jsx";
import Contact from "./components/section/Contact.jsx";

function App() {
  return (
      <>
          <Header />
          <Main/>
          <Projects/>
          <Skills/>
          <Experience/>
          <Contact/>
          <Footer/>
      </>
  )
}

export default App
