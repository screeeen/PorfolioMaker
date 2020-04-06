import React, { useEffect,useState } from 'react'
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


  return (
    <div className="container-survey">
    <hr></hr>
      <p>mockup</p>
      {data && 
      <div>
      <p>{data.profile.name}</p>
      <p>{data.profile.professions}</p>
      <p>{data.profile.description}</p>
      <p>{data.profile.fruits}</p>
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

    }
    </div>
  );
}

export default MockUp