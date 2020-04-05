import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import Survey from './components/Survey';
import './App.css'
import MockUp from './components/MockUp';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      professions: '',
      description: '',
      fruits: '',
      projects: {},
    };
    console.log('my state', this.state);
  }

  componentDidMount() {
    // this.populateState();
  }

  populateState = (data) => {
    console.log('hola popu -');
    // const value = data.type === 'checkbox' ? data.checked : data.value;
    // const name = data.name;
    this.setState({
      data
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
            </ul>
          </nav>
          <Switch>
            <Route exact path="/survey" component={() => <Survey populateState ={this.populateState} />} />
            <Route exact path="/mockup" component={MockUp} />
          </Switch>
          {/* <Redirect to="/survey" /> */}
        </Router>
      </div>
    );
  }
}

export default App
