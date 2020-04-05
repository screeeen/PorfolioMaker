import React, { Component } from 'react'
import {
  Link
} from "react-router-dom";

class Survey extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      professions: '',
      description: '',
      fruits: '',
      projects: {},
    };


    console.log('props in survey', props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount = () => {
    console.log(this.props.data);

    const { name, professions, descriptions, fruits, projects } = this.props.data;
    console.log(name, professions);

    this.setState({
      name,
      professions,
      fruits
    });

    console.log('survey', this.state);
  }



  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    // const info = JSON.stringify(this.state)
    // alert('A name was submitted: ' + info);
    console.log('state form', this.state);

    this.props.populateState(this.state);
  }

  render() {
    return (
      <div className="container-survey">
        <h3>Part 1</h3>
        <h3>Write here your personal details!</h3>

        <form onSubmit={this.handleSubmit}>
          <label>
            <p>Name:</p>
            <input type="text" name='name' value={this.state.value} onChange={this.handleChange} />
          </label>
          <br />
          <label>
            <p>Your Best Photo:</p>
            <input type="file" ref={this.fileInput} />
          </label>
          <br />
          <label>
            <p>What do you do?</p>
            <input type="text" name='professions' value={this.state.value} onChange={this.handleChange} />
          </label>
          <br />
          <label>
            <p>Description:</p>
            <textarea name='description' value={this.state.value} onChange={this.handleChange} />
          </label>
          <br />
          <label>
            <p>Pick your favorite flavor:</p>
            <select value={this.state.value} name='fruits' onChange={this.handleChange}>
              <option value="grapefruit">Grapefruit</option>
              <option value="lime">Lime</option>
              <option value="coconut">Coconut</option>
              <option value="mango">Mango</option>
            </select>
          </label>
          <p>-----------------------------------◊◊◊-------------------------------</p>
          {/* <Link
            to={{
              pathname: "/",
              state: { part1: this.state }
            }}
          > */}
          {/* </Link> */}
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default Survey

