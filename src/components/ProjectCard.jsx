import React from 'react';
import Title from './Title'
import Info from './Info'
import Picture from './Picture'
import Capsule from './Capsule'
import CapsuleTwoColumn from './CapsuleTwoColumn'
import VideoClip from './VideoClip'



const ProjectCard = ({data}) => {
  return (
    data.projects.map((project,i) => {
      const { projectName, subtitle, challengeDescription } = project
      return (
        <section key={i}>
          <p>project</p>
          <Title title={projectName} />
          <Picture picture={data.picture} />
          <p>description</p>
          <Info projectInfo={data.text} />

          <p>subtitle</p>
          <CapsuleTwoColumn subtitle={subtitle} text={subtitle} subtitle2={subtitle} text2={subtitle} />
          <Picture picture={data.picture2} />

          <p>challenge</p>
          <Capsule subtitle={challengeDescription} text={challengeDescription} />
          {/* <Capsule subtitle={challengeDescription} text={challengeDescription} /> */}
          <p>video</p>
          <VideoClip videoURL={data.clip1} />

          <p>validation</p>
          <Capsule subtitle={data.subtitleValidation} text={data.textValidation} />
          <p>learning</p>
          <Capsule subtitle={data.subtitleLearnings} text={data.textLearnings} />

          <p>second video</p>
          <VideoClip videoURL={data.clip2} />
        </section>)
    })
  )
}

export default ProjectCard