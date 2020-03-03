import React, { Component } from 'react'
import MockUp from './MockUp'
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

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    const jjj = JSON.stringify(this.state)
    alert('A name was submitted: ' + jjj);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>Hello write your stuff</h1>
        <h1>Part 1</h1>
        <h2>Write here your personal details!</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
          <input type="text" name='name' value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>

        <form onSubmit={this.handleSubmit}>
        <label>
          Your Best Photo:
          <input type="file" ref={this.fileInput} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>

        <form onSubmit={this.handleSubmit}>
          <label>
            What do you do?
          <input type="text" name='professions' value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>

        <form onSubmit={this.handleSubmit}>
          <label>
            Description:
          <textarea name='description' value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>

        <form onSubmit={this.handleSubmit}>
          <label>
            Pick your favorite flavor:
          <select value={this.state.value} name='fruits' onChange={this.handleChange}>
              <option value="grapefruit">Grapefruit</option>
              <option value="lime">Lime</option>
              <option value="coconut">Coconut</option>
              <option value="mango">Mango</option>
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
        <MockUp details={this.state}/>

      </div>
    )
  }
}

export default Survey

