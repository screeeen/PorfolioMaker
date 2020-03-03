import React from 'react'
import './style.css'
import Title from './Title'
import Info from './Info'
import Picture from './Picture'
import Capsule from './Capsule'
import VideoClip from './VideoClip'


function Project(props) {
  return (
    <div className="c1">
      <section id={props.idTitle}>
      <Title title={props.title}/>
      <hr></hr>
      <Picture picture={props.picture} />
      <Info projectInfo={props.text} />
      
      <Capsule subtitle={props.subtitleTarget} text={props.textTarget} />
      <Capsule subtitle={props.subtitleScope} text={props.textScope} />
      <Picture picture={props.picture2} />

      <Capsule subtitle={props.subtitleChallenge} text={props.textChallenge} />
      <Capsule subtitle={props.subtitleProcess} text={props.textProcess} />

      <Capsule subtitle={props.subtitleValidation} text={props.textValidation} />
      <Capsule subtitle={props.subtitleLearnings} text={props.textLearnings} />

      <VideoClip videoURL={props.clip1}/>
      </section>
    </div>
  )
}

export default Project