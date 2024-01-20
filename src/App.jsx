import "./App.css";
import { Navbar } from "./components/NavBar";
import { Banner } from "./components/banner";
import { Skills } from "./components/skills";
import { SobreMi } from "./components/sobreMi";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <SobreMi />
      <Skills />
    </>
  );
}

export default App;
