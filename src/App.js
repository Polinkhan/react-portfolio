import { Container } from "@chakra-ui/react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Container
        w="100%"
        maxW={{ base: "95vw", sm: "95vw", md: "85vw", lg: "80vw" }}
      >
        <About />
      </Container>
    </div>
  );
}

export default App;
