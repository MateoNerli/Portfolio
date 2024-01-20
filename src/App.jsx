import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/NavBar";
import { Proyects } from "./components/proyects";
import { Home } from "./components/home";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="proyects" element={<Proyects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
