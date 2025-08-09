import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import AboutMe from './pages/aboutMe';
import ContactMe from './pages/contactMe';
import Education from './pages/education';
import Experience from './pages/experience';
import Personal from './pages/personal';
import SkillSet from './pages/skillSet';
import NavBar from './components/navBar';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex: 1;
`;

function App() {
  return (
    <AppContainer>
      <Router basename="/OpenWebsite">
        <NavBar />
        <MainContent>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/education" element={<Education />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/personal" element={<Personal />} />
            <Route path="/skills" element={<SkillSet />} />
          </Routes>
        </MainContent>
        <ContactMe />
      </Router>
    </AppContainer>
  );
}

export default App;
