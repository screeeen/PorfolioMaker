import React, { useState, useEffect } from 'react';

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

const App = () => {

  const initialSchema = {
    profile: {
      name: '',
      profession: '',
      file: null,
      description: '',
      picture: '',
      fruits: ''
    },
    projects: []
  };


  const [data, setData] = useState(JSON.parse (window.localStorage.getItem('data')));

  useEffect(() => {
    // console.log(JSON.parse(localStorage.getItem('data')));
    console.log('state data', data);
    window.localStorage.setItem('data', JSON.stringify(data))
     
    // window.localStorage.getItem('data') && setData(JSON.parse(window.localStorage.getItem('data');
  },[data]);

  const addInfo = profile => {
    console.log('add profi', profile);
    setData({ ...data, profile })
    
  }

  const addProject = data => {
    // setdata(data => {
    //   const { projectName, subtitle, challengeDescription } = data;
    //   const projectTemplate = {
    //     projectName,
    //     subtitle,
    //     challengeDescription
    //   }
    //   const projects = [...data.projects, projectTemplate];
    //   console.log(...data.projects);
    //   console.log(data);
    //   return {
    //     projects,
    //   };
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
          <Route exact path="/project" component={() => <ProjectSurvey addProject={addProject} data={data} />} />
        </Switch>
        {/* <Redirect to="/survey" /> */}
        < MockUp file={data} />
      </Router>
    </div>
  );
}


export default App
