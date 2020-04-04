import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';

import './style.css'
import Title from './Title'
import Info from './Info'
import Picture from './Picture'
import Capsule from './Capsule'
import CapsuleTwoColumn from './CapsuleTwoColumn'
import VideoClip from './VideoClip'


function Project(props) {
  const location = useLocation();
  useEffect(() => {
    // const info = location.state;
  }, [location]);


    return (
    <div className="c1">
      <p>hola, aqui project</p>
      <section id={props.idTitle}>
      <Title title={props.title}/>
      <hr></hr>
      <Picture picture={props.picture} />
      <Info projectInfo={props.text} />
      
      <CapsuleTwoColumn subtitle={props.subtitleTarget} text={props.textTarget} subtitle2={props.subtitleScope} text2={props.textScope}/>
      <Picture picture={props.picture2} />

      <Capsule subtitle={props.subtitleChallenge} text={props.textChallenge} />
      <Capsule subtitle={props.subtitleProcess} text={props.textProcess} />
      <VideoClip videoURL={props.clip1}/>

      <Capsule subtitle={props.subtitleValidation} text={props.textValidation} />
      <Capsule subtitle={props.subtitleLearnings} text={props.textLearnings} />

      <VideoClip videoURL={props.clip2}/>
      </section>
    </div>
  )
}

export default Project