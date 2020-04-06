import React, { Component } from 'react'
import './style.css'

class Survey extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name: '',
        professions: '',
        description: '',
        fruits: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // componentDidMount = () => {
  //   if (this.props.data.profile !== undefined){
  //     const { profile } = this.props.data;
  //     const { name, description,professions,fruits } = profile;
  
  //     this.setState({
  //         name,
  //         description,
  //         professions,
  //         fruits
  //     });
  //   }
  // }

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
    this.props.populateState(this.state);
  }

  render() {
    return (
      <div className="container-survey">
      <hr></hr>
        <p>Part 1</p>
        <p>Write here your personal details!</p>

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


        {/* <MockUp /> */}
      </div>
    )
  }
}

export default Survey

