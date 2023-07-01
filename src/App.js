import "./App.css";
import Landing from "./components/Landing";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-gray-200 min-h-screen">
      <Navbar/>

      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/resume" element={<Resume/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>

    </div>
  );
}

export default App;
