import React, { useState, useEffect } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import Survey from './components/forms/Survey';
import ProjectSurvey from './components/forms/ProjectSurvey';
import MockUp from './components/layout/MockUp';

const App = () => {

  const initialSchema = {
    profile: {
      name: '',
      profession: '',
      file: null,
      description: '',
      picture: '',
      fruit: ''
    },
    projects: []
  };

  const [data, setData] = useState( JSON.parse(sessionStorage.getItem('data')) || initialSchema);

  useEffect(() => {
    sessionStorage.setItem('data', JSON.stringify(data))
  }, [data]);

  const addInfo = profile => {
    setData({ ...data, profile })
  }



  const addProject = project => {
    // setdata(project => {
      const { projectName, subtitle, challengeDescription } = project;
      
      const projectTemplate = {
        projectName,
        subtitle,
        challengeDescription
      }
      console.log(project,projectName, subtitle, challengeDescription);

      const projects = [...data.projects, projectTemplate];
      console.log(...data.projects);
      console.log(data);
      return {
        projects,
      };
    // });
  };

  return (
    <div className="container-survey">
      <Router>
        <nav>
          <ul>
            <p>Welcome to the automatic porfolio. Prepare your pictures, files and texts, fill the forms and voilá.</p>
            {/* </div> */}
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/survey">Profile</Link>
            </li>
            <li>
              <Link to="/project">Project</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/survey" component={() => <Survey addInfo={addInfo} data={data} />} />
          <Route exact path="/project" component={() => <ProjectSurvey addProject={addProject} data={data.projects} />} />
          < MockUp data={data.profile} />
        </Switch>
      </Router>
    </div>
  );
}

export default App
