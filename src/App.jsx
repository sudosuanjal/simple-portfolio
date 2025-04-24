import "./App.css";
import NavBar from "./components/NavBar";
import MainComponet from "./components/MainComponet";
import FooterComponent from "./components/FooterComponent";
import About from "./components/About";

function App() {
  return (
    <>
      <NavBar />
      <About />
      <MainComponet />
      <FooterComponent />
    </>
  );
}

export default App;
