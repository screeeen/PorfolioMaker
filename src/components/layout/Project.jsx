import React, { useEffect,useState } from 'react'
import Title from '../UI/Title'
import Info from './Info'
import Picture from './Picture'
import Capsule from './Capsule'
import CapsuleTwoColumn from './CapsuleTwoColumn'
import VideoClip from './forms/VideoClip'


const Project = props => {
  const [data, setData] = useState(props.data);

  useEffect(() => {
    setData(props);    
  }, []);
  


    return (
    <div className="container-survey">
      <hr></hr>
      <p>Project</p>
      <section id={data.idTitle}>
      <Title title={data.title}/>
      <Picture picture={data.picture} />
      <Info projectInfo={data.text} />
      
      <CapsuleTwoColumn subtitle={data.subtitleTarget} text={data.textTarget} subtitle2={data.subtitleScope} text2={data.textScope}/>
      <Picture picture={data.picture2} />

      <Capsule subtitle={data.subtitleChallenge} text={data.textChallenge} />
      <Capsule subtitle={data.subtitleProcess} text={data.textProcess} />
      <VideoClip videoURL={data.clip1}/>

      <Capsule subtitle={data.subtitleValidation} text={data.textValidation} />
      <Capsule subtitle={data.subtitleLearnings} text={data.textLearnings} />

      <VideoClip videoURL={data.clip2}/>
      </section>
    </div>
  )
}

export default Project