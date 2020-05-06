import React, { useState, useEffect } from 'react'
import Title from './Title'
import Info from './Info'
import Picture from './Picture'
import Capsule from './Capsule'
import CapsuleTwoColumn from './CapsuleTwoColumn'
import VideoClip from './VideoClip'
import { handleChange } from './utils.jsx'

const ProjectSurvey = ({ data,addProject }) => {

  const initialState = {
    projectName: '',
    subtitle: '',
    picture: undefined,
    text: '',
    description: '',
  }

  const [project, setProject] = useState(initialState);

  useEffect(() => {
    data.projects.map(project => {
      console.log('project', project);
      setProject(project);
    });
  }, [data]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(s);
    addProject(project);
  }

  return (
    <div className="container-survey">
      <div className="two-col">
        <div className="flex-column">
          <form onSubmit={handleSubmit}>
            <label>
              <p>project name:</p>
              <input type="text" name='projectName' value={project.projectName} onChange={e => handleChange(project, setProject, e)} />
            </label>
            <br />
            <label>
              <p>project picture</p>
              <input type="file" ref={project.fileInput} />
            </label>
            <br />
            <label>
              <p>subtitle:</p>
              <input type="text" name='subtitle' value={project.subtitle} onChange={e => handleChange(project, setProject, e)} />
            </label>
            <br />
            <label>
              <p></p>
              <textarea name='challengeDescription' value={project.challengeDescription} onChange={e => handleChange(project, setProject, e)} />
            </label>
            <br />
            <p>------------◊◊◊--------------</p>
            <button type="submit" value="Done" />
          </form>
        </div>
        <div className="container-survey">
          <p>Project</p>
          <hr></hr>
          <section id={project.idTitle}>
            <Title title={project.projectName} />
            <Picture picture={project.picture} />
            <Info projectInfo={project.text} />

            <CapsuleTwoColumn subtitle={project.subtitle} text={project.textTarget} subtitle2={project.subtitleScope} text2={project.textScope} />
            <Picture picture={project.picture2} />

            <Capsule subtitle={project.subtitleChallenge} text={project.textChallenge} />
            <Capsule subtitle={project.subtitleProcess} text={project.textProcess} />
            <VideoClip videoURL={project.clip1} />

            <Capsule subtitle={project.subtitleValidation} text={project.textValidation} />
            <Capsule subtitle={project.subtitleLearnings} text={project.textLearnings} />
            <p>{project.challengeDescription}</p>
            <VideoClip videoURL={project.clip2} />
          </section>
        </div>
      </div>
    </div>
  )
}

export default ProjectSurvey