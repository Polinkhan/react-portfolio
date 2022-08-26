import { Container } from "@chakra-ui/react";
import "./App.css";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Container
        w="100%"
        maxW={{ base: "95vw", sm: "95vw", md: "85vw", lg: "80vw" }}
        scrollBehavior={"smooth"}
      >
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </Container>
      <Footer />
    </>
  );
}

export default App;
