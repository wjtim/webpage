import React from 'react'
import logo from './logo.svg';
import { BrowserRouter, Routes, Route, Link, useLocation} from 'react-router-dom';
import './App.css';
import { Navbar } from './components/navbar';
import { HomePage } from './containers/homePage';
import { Projects } from './containers/projects';
import { AboutMe } from './containers/aboutMe';
import { TransitionGroup, CSSTransition } from "react-transition-group";

function App() {
  const location = useLocation();
  console.log("location", location);
  return (
    <div className="App">
      <Navbar />
      <TransitionGroup component={null}>
        <CSSTransition key={location.key} classNames="slide" timeout={1000}>
          <Routes location ={location}>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<AboutMe />} />
          </Routes>
        </CSSTransition>
    </TransitionGroup> 
    </div>

  );
}

export default App;
