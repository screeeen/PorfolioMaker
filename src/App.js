import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import Survey from './components/Survey';
import MockUp from './components/MockUp';
import ProjectSurvey from './components/ProjectSurvey';
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

  addProject = (data) => {
    
    console.log(data);
    
    
    this.setState(state => {
      const projectTemplate = {
        projectName:"",
        subtitle:"",
        challengeDescription:""
      }
      const projects = [...state.projects, projectTemplate];
      console.log(...state.projects);
      console.log(state.value);
      return {
        projects,
      };
    });
  };

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
              <li>
                <button onClick={this.addProject}>
                  <p>create new project</p>
                </button>                </li>


            </ul>
          </nav>
          <Switch>
            <Route exact path="/survey" component={() => <Survey populateState={this.populateState} data={this.state} />} />
            <Route exact path="/mockup" component={() => <MockUp populateState={this.populateState} data={this.state} />} />
            <Route exact path="/project" component={() => <ProjectSurvey addProject={this.addProject} data={this.state} />} />
          </Switch>
          {/* <Redirect to="/survey" /> */}
        </Router>
      </div>
    );
  }
}

export default App
