import React, { Component } from 'react'
import Title from './Title'
import Info from './Info'
import Picture from './Picture'
import Capsule from './Capsule'
import CapsuleTwoColumn from './CapsuleTwoColumn'
import VideoClip from './VideoClip'

class ProjectSurvey extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectName: '',
      subtitle: '',
      challengeDescription: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  componentDidMount = () => {
    console.log(this.props.data.projects);
    this.props.data.projects.map(project => {
      const { projectName, subtitle, challengeDescription } = project
      return this.setState({
        projectName,
        subtitle,
        challengeDescription
      })
    });
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
    console.log(this.props);
    this.props.addProject(this.state);
  }

  render() {
    return (
      <div className="container-survey">
        <div className="two-col">
          <div className="flex-column">
            <form onSubmit={this.handleSubmit}>
              <label>
                <p>project name:</p>
                <input type="text" name='projectName' value={this.state.value} onChange={this.handleChange} />
              </label>
              <br />
              <label>
                <p>project picture</p>
                <input type="file" ref={this.fileInput} />
              </label>
              <br />
              <label>
                <p>subtitle:</p>
                <input type="text" name='subtitle' value={this.state.value} onChange={this.handleChange} />
              </label>
              <br />
              <label>
                <p></p>
                <textarea name='challengeDescription' value={this.state.value} onChange={this.handleChange} />
              </label>
              <br />
            <p>------------◊◊◊--------------</p>
              <input type="submit" value="Done" />
            </form>
          </div>
          <div className="container-survey">
            <p>Project</p>
            <hr></hr>
            <section id={this.state.idTitle}>
              <Title title={this.state.projectName} />
              <Picture picture={this.state.picture} />
              <Info projectInfo={this.state.text} />

              <CapsuleTwoColumn subtitle={this.state.subtitle} text={this.state.textTarget} subtitle2={this.state.subtitleScope} text2={this.state.textScope} />
              <Picture picture={this.state.picture2} />

              <Capsule subtitle={this.state.subtitleChallenge} text={this.state.textChallenge} />
              <Capsule subtitle={this.state.subtitleProcess} text={this.state.textProcess} />
              <VideoClip videoURL={this.state.clip1} />

              <Capsule subtitle={this.state.subtitleValidation} text={this.state.textValidation} />
              <Capsule subtitle={this.state.subtitleLearnings} text={this.state.textLearnings} />
              <p>{this.state.challengeDescription}</p>
              <VideoClip videoURL={this.state.clip2} />
            </section>
          </div>
        </div>

      </div>
    )
  }
}

export default ProjectSurvey