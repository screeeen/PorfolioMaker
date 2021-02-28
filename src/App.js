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
    },
    projects: [{
      projectName : '',
      subtitle: '',
      file: null,
      challengeDescription: ''
    }]
  };

  const [data, setData] = useState( JSON.parse(sessionStorage.getItem('data')) || initialSchema);

  useEffect(() => {
    console.log('data changed')
    sessionStorage.setItem('data', JSON.stringify(data))
  }, [data,data.projects]);

  const addInfo = profile => {
    setData({ ...data, profile })
  }

  const addProject = projectData => {
    const newData = data;
    newData.projects.push(projectData);
    setData(newData);
    console.log('despues',data);
  };

  return (
    <div className="container-survey">
      <Router>
        <nav>
          <ul>
            <h1>Welcome to the automatic porfolio.</h1>
             <p>Prepare your pictures, files and texts, fill the forms and voilá.</p>
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
          <Route exact path="/project" component={() => <ProjectSurvey addProject={addProject} data={data} />} />
          < MockUp data={data} />
        </Switch>
      </Router>
    </div>
  );
}

export default App
