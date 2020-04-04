import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Survey from './components/Survey';
import './App.css'
import MockUp from './components/MockUp';

function App() {
  return (
    <div>
      <Router>
        <nav>
          <ul>
      <h6>Automatic Porfolio</h6>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/survey">Survey</Link>
            </li>
            <li>
              <Link to="/mockup">Mock Up</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/survey" component={Survey} />
          <Route exact path="/mockup" component={MockUp} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
