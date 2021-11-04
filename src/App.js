import logo from './logo.svg';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import './App.css';
import { HomePage } from './containers/homePage';
import { Button } from './components/button';
import { Navbar } from './components/navbar';
import { Marginer } from './components/marginer';
import { Projects } from './containers/projects';
import Swup from 'swup';




function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
