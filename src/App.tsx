import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../src/components/Header/Header.tsx';
import MainPage from './pages/MainPage/MainPage.tsx';
import DemoesPage from '../src/pages/DemoesPage/DemoesPage.tsx';
import ProjectsPage from '../src/pages/ProjectsPage/ProjectsPage.tsx';
import ResumePage from '../src/pages/ResumePage/ResumePage.tsx';
import WhoIAmPage from '../src/pages/WhoIAmPage/WhoIAmPage.tsx';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage name="" />} /> 
        <Route path="/demoes" element={<DemoesPage />} /> 
        <Route path="/projects" element={<ProjectsPage />} /> 
        <Route path="/resume" element={<ResumePage />} /> 
        <Route path="/whoiam" element={<WhoIAmPage />} /> 

      </Routes>
    </Router>
  );
}

export default App;