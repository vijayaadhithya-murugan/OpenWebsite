import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Home from "./pages/home";
import AboutMe from "./pages/aboutMe";
import ContactMe from "./pages/contactMe";
import Education from "./pages/education";
import Experience from "./pages/experience";
import Personal from "./pages/personal";
import SkillSet from "./pages/skillSet";
import NavBar from "./components/navBar";

function App() {
  return (
    <div>
    <Router>
    <NavBar />
        <Routes>
          {/* <Route exact path="/OpenWebsite" element={<Home />}></Route> */}
          <Route exact path="/OpenWebsite/about" element={<AboutMe />}></Route>
          <Route exact path="/OpenWebsite/education" element={<Education />}></Route>
          <Route exact path="/OpenWebsite/experience" element={<Experience />}></Route>
          <Route exact path="/OpenWebsite/personal" element={<Personal />}></Route>
          <Route exact path="/OpenWebsite/skills" element={<SkillSet />}></Route>
        </Routes>
    </Router>
        <ContactMe />
    </div>
  );
}

export default App;
