// importing page linking
import { BrowserRouter, Route, Routes } from "react-router-dom";

// importing pages
import Landing from "./pages/landingPage/landing";
import About from "./pages/aboutPage/about";
import Skills from "./pages/skillsPage/skills";
import Projects from "./pages/projectsPage/projects";

// importing styling
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact="true"
          path="/"
          element={<Landing />}
        />
        <Route
          path="/about"
          element={<About />}
        />
        <Route
          path="/skills"
          element={<Skills />}
        />
        <Route
          path="/projects"
          element={<Projects />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
