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
import Fab from '@mui/material/Fab';
import { MdSmartToy } from 'react-icons/md';
import { useState, useRef } from 'react';
import { Button, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Typography } from '@mui/material';
import { Dialog } from '@mui/material';
import { GoogleGenAI } from "@google/genai";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex: 1;
`;

const FabContainer = styled.div`
  margin-left: auto;
  margin-right: 4px;
`

function App() {
  const [chatOpen, setChatOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [aiResponseValue, setAiResponseValue] = useState("");
  const fabRef = useRef(null);
  const aiResponse = async (question) => {
    const ai = new GoogleGenAI({
      apiKey: "AIzaSyDQtbfwD3PjzJCa0a1s-Rm_jm-K1zQKcBw"
    });
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: question,
    });
    setAiResponseValue(response.text);
  };
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
        <FabContainer ref={fabRef}>
        <Fab color="primary" aria-label="add" onClick={()=>{
          setChatOpen(!chatOpen);
        }}>
          <MdSmartToy size={25}/>
        </Fab>
        </FabContainer>
        <Dialog 
          open={chatOpen} 
          onClose={()=>{
            setChatOpen(!chatOpen);
            setAiResponseValue("");
            setQuestion("");
          }}
        >
          <DialogTitle>AI Chat</DialogTitle>
          <DialogContent>
            <DialogContentText className='mb-three-s'>Type your question AI will respond</DialogContentText>
            <TextField size='small' value={question} onChange={(event)=>{
              setQuestion(event.target.value);
            }}/>
            <Typography visibility={aiResponseValue !== ''}>{aiResponseValue}</Typography>
            </DialogContent>
            <DialogActions>
            <Button onClick={()=>{aiResponse(question)}}>Send</Button>
            </DialogActions>
        </Dialog>
        <ContactMe />
      </Router>
    </AppContainer>
  );
}

export default App;
