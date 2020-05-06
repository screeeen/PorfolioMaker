import React, { useState, useEffect } from 'react'
import Title from './Title'
import Info from './Info'
import Picture from './Picture'
import Capsule from './Capsule'
import CapsuleTwoColumn from './CapsuleTwoColumn'
import VideoClip from './VideoClip'
import { handleChange } from './utils.jsx'



const ProjectSurvey = ({ data }) => {
const initialState = {
  projectName: '',
  fileInput: undefined,
  subtitle: '',
  description: ''
}
  const [project, setProject] = useState('');

  useEffect(() => {
    data.projects.map(project => {

      console.log('project', project);
      setProject(project);
    });
  }, [data]);



  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(s);
    // props.addProject(state);
  }

  return (
    <div className="container-survey">
      <div className="two-col">
        <div className="flex-column">
          <form onSubmit={handleSubmit}>
            <label>
              <p>project name:</p>
              <input type="text" name='projectName' value={project.projectName} onChange={e => handleChange(project,setProject,e)} />
            </label>
            <br />
            <label>
              <p>project picture</p>
              <input type="file" ref={project.fileInput} />
            </label>
            <br />
            <label>
              <p>subtitle:</p>
              <input type="text" name='subtitle' value={project.subtitle} onChange={handleChange} />
            </label>
            <br />
            <label>
              <p></p>
              <textarea name='challengeDescription' value={project.challengeDescription} onChange={handleChange} />
            </label>
            <br />
            <p>------------◊◊◊--------------</p>
            <input type="submit" value="Done" />
          </form>
        </div>
        <div className="container-survey">
          <p>Project</p>
          <hr></hr>
          {/* <section id={project.idTitle}>
              <Title title={projectName} />
              <Picture picture={picture} />
              <Info projectInfo={text} />

              <CapsuleTwoColumn subtitle={subtitle} text={textTarget} subtitle2={subtitleScope} text2={textScope} />
              <Picture picture={picture2} />

              <Capsule subtitle={subtitleChallenge} text={textChallenge} />
              <Capsule subtitle={subtitleProcess} text={textProcess} />
              <VideoClip videoURL={clip1} />

              <Capsule subtitle={subtitleValidation} text={textValidation} />
              <Capsule subtitle={subtitleLearnings} text={textLearnings} />
              <p>{challengeDescription}</p>
              <VideoClip videoURL={clip2} />
            </section> */}
        </div>
      </div>
    </div>
  )
}

export default ProjectSurvey