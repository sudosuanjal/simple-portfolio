import "./App.css";
import About from "./components/About/About";
import FooterComponent from "./components/Footer/FooterComponent";
import NavBar from "./components/Navbar/NavBar";
import Projects from "./components/Projects/Projects";
function App() {
  return (
    <>
      <NavBar />
      <About />
      <Projects />
      {/* <FooterComponent /> */}
    </>
  );
}

export default App;
