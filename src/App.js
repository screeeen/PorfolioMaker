import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import Survey from './components/Survey';
import MockUp from './components/MockUp';
import Project from './components/Project';
import './App.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: {
        name: '',
        professions: '',
        description: '',
        fruits: ''
      },
      projects: [],
    };
    // console.log('my state', this.state);
  }

  populateState = (data) => {
    const { name, professions, description, fruits } = data;
    this.setState({
      profile: {
        name,
        professions,
        description,
        fruits
      },
      projects: []
    });
  }


  render() {
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
              <li>
                <Link to="/project">Project</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route exact path="/survey" component={() => <Survey populateState={this.populateState} data={this.state} />} />
            <Route exact path="/mockup" component={() => <MockUp populateState={this.populateState} data={this.state} />} />
            <Route exact path="/project" component={() => <Project populateState={this.populateState} data={this.state} />} />
          </Switch>
          {/* <Redirect to="/survey" /> */}
        </Router>
      </div>
    );
  }
}

export default App
