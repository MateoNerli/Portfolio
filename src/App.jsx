import "./App.css";
import { Navbar } from "./components/NavBar";
import { Banner } from "./components/banner";
import { SobreMi } from "./components/sobreMi";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <SobreMi />
    </>
  );
}

export default App;
