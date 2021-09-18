import logo from './logo.svg';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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
        <Switch>
          <Route exact path ="/">
            <HomePage />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>

  );
}

export default App;
