// import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Route from react-router-dom
import Header from '../src/components/Header/Header.tsx';
import MainPage from './pages/MainPage/MainPage.tsx';
import AboutPage from '../src/pages/AboutPage/AboutPage.tsx';
import DemoesPage from '../src/pages/DemoesPage/demoespage.tsx';
import ProjectsPage from '/Users/talia.pannell/Desktop/repos/tp:website/talia-website/src/pages/ProjectsPage/ProjectsPage.tsx';
import ResumePage from '../src/pages/ResumePage/ResumePage.tsx';
import WhoIAmPage from '../src/pages/WhoIAmPage/WhoIAmPage.tsx';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage name="" />} /> {/* Use MainPage as the default page */}
        <Route path="/about" element={<AboutPage />} /> {/* Add route for AboutPage */}
        <Route path="/demoes" element={<DemoesPage />} /> {/* Add route for AboutPage */}
        <Route path="/projects" element={<ProjectsPage />} /> {/* Add route for AboutPage */}
        <Route path="/resume" element={<ResumePage />} /> {/* Add route for AboutPage */}
        <Route path="/whoiam" element={<WhoIAmPage />} /> {/* Add route for AboutPage */}

      </Routes>
    </Router>
  );
}

export default App;