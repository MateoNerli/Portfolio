import "./App.css";
import { Navbar } from "./components/NavBar";
import { Banner } from "./components/banner";
import { Footer } from "./components/footer";
import { Skills } from "./components/skills";
import { SobreMi } from "./components/sobreMi";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <SobreMi />
      <Skills />
      <Footer />
    </>
  );
}

export default App;
