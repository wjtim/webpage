import React from 'react'
import logo from './logo.svg';
import { BrowserRouter, Routes, Route, Link, useLocation} from 'react-router-dom';
import './App.css';
import { Navbar } from './components/navbar';
import { HomePage } from './containers/homePage';
import { Projects } from './containers/projects';
import { AboutMe } from './containers/aboutMe';
import { useTransition, animated } from 'react-spring'

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<AboutMe />} />
          </Routes>
    </div>

  );
}

export default App;
