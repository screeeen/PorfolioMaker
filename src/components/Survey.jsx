import React, { Component } from 'react'
import './style.css'
import Title from './Title'
import Info from './Info'
import Picture from './Picture'
import Capsule from './Capsule'
import CapsuleTwoColumn from './CapsuleTwoColumn'
import VideoClip from './VideoClip'

class Survey extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      professions: '',
      description: '',
      fruits: '',
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
    event.preventDefault();
    // const info = JSON.stringify(this.state)
    // alert('A name was submitted: ' + info);
    this.props.populateState(this.state);
  }


  render() {
    return (
      <div className="container-survey">
        <div className="two-col">
          <div className="flex-column">
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
              <br />
              <br />
          <p>------------◊◊◊--------------</p>
              <input type="submit" value="Done with the profile" />
            </form>
          </div>
          <div className="container-survey">
            <p>mockup</p>
            <hr></hr>
            <p>{this.state.name}</p>
            <p>{this.state.professions}</p>
            <p>{this.state.description}</p>
            <p>{this.state.fruits}</p>

            <section id={this.state.idTitle}>
              <Title title={this.state.title} />
              <Picture picture={this.state.picture} />
              <Info projectInfo={this.state.text} />

              <CapsuleTwoColumn subtitle={this.state.subtitleTarget} text={this.state.textTarget} subtitle2={this.state.subtitleScope} text2={this.state.textScope} />
              <Picture picture={this.state.picture2} />

              <Capsule subtitle={this.state.subtitleChallenge} text={this.state.textChallenge} />
              <Capsule subtitle={this.state.subtitleProcess} text={this.state.textProcess} />
              <VideoClip videoURL={this.state.clip1} />

              <Capsule subtitle={this.state.subtitleValidation} text={this.state.textValidation} />
              <Capsule subtitle={this.state.subtitleLearnings} text={this.state.textLearnings} />

              <VideoClip videoURL={this.state.clip2} />
            </section>
          </div>
        </div>
      </div>
    )
  }
}

export default Survey

