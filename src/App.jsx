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

function App() {
  // const [count, setCount] = useState(0)

  // return (
  //   <>
  //     <div>
  //       <a href="https://vitejs.dev" target="_blank">
  //         <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://react.dev" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.jsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </>
  // )
  return (
    <Router>
      <div className="App">
        <ul className="App-header">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Me</Link>
          </li>
          <li>
            <Link to="/contact">Contact Me</Link>
          </li>
          <li>
            <Link to="/education">Education</Link>
          </li>
          <li>
            <Link to="/experience">Experience</Link>
          </li>
          <li>
            <Link to="/personal">Personal</Link>
          </li>
          <li>
            <Link to="/skills">Skills</Link>
          </li>
        </ul>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<AboutMe />}></Route>
          <Route exact path="/contact" element={<ContactMe />}></Route>
          <Route exact path="/education" element={<Education />}></Route>
          <Route exact path="/experience" element={<Experience />}></Route>
          <Route exact path="/personal" element={<Personal />}></Route>
          <Route exact path="/skills" element={<SkillSet />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
