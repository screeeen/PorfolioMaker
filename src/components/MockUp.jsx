import React, { useEffect, useState } from 'react'
import './style.css'

import Title from './Title'
import Info from './Info'
import Picture from './Picture'
import Capsule from './Capsule'
import CapsuleTwoColumn from './CapsuleTwoColumn'
import VideoClip from './VideoClip'

function MockUp(props) {
  const [data, setData] = useState(0);

  useEffect(() => {
    console.log(props.data);
    setData(props.data);
  }, []);

  const createProject = () => {
    return (
      props.data.projects.map((project,i) => {
        const { projectName, subtitle, challengeDescription } = project
        return (
          <section key={i}>
            <Title title={projectName} />
            <Picture picture={data.picture} />
            <Info projectInfo={data.text} />

            <CapsuleTwoColumn subtitle={subtitle} text={subtitle} subtitle2={subtitle} text2={subtitle} />
            <Picture picture={data.picture2} />

            <Capsule subtitle={challengeDescription} text={challengeDescription} />
            <Capsule subtitle={challengeDescription} text={challengeDescription} />
            <VideoClip videoURL={data.clip1} />

            <Capsule subtitle={data.subtitleValidation} text={data.textValidation} />
            <Capsule subtitle={data.subtitleLearnings} text={data.textLearnings} />

            <VideoClip videoURL={data.clip2} />
          </section>)
      })
    )
  }


  return (
    <div className="container-survey">
      <p>preview</p>
      <hr />
      {data &&
        <div>
          <p>{data.profile.name}</p>
          <p>{data.profile.professions}</p>
          <p>{data.profile.description}</p>
          <p>{data.profile.fruits}</p>
        </div>
      }

      {createProject()}
    </div>
  );
}

export default MockUp