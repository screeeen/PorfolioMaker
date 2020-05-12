import React, { useState, useEffect } from 'react';
import { getBase64 } from './services/utils'

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
      fruit: ''
    },
    projects: []
  };

  const [data, setData] = useState( JSON.parse(localStorage.getItem('data')) || initialSchema);

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(data))
  }, [data]);

  const addInfo = profile => {

    console.debug("data aftr", data);
    // const file = getBase64(profile.file)
    //   .then(base64 => {
    //     localStorage["fileBase64"] = base64;
    //     profile.file = base64;
    //     console.log(profile)
    //     console.log("file stored", base64);
    //   });
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
          < MockUp data={data.profile} />
        </Switch>
      </Router>
    </div>
  );
}

export default App
