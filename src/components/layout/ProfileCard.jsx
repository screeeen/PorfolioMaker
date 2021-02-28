import React from 'react'
import Title from './Title'
import Info from './Info'
import Picture from './Picture'
import Capsule from './Capsule'
import CapsuleTwoColumn from './CapsuleTwoColumn'
import VideoClip from './VideoClip'

const ProfileCard = ({profile}) => {


  return (
    <div className="container-survey">
      <p>mockup</p>
      <hr></hr>
      <section id={profile.idTitle}>
        <p>{profile.name}</p>
        <p>{profile.profession}</p>
        <p>{profile.description}</p>

        <Title title={profile.title} />
        <Title title={profile.profession} />
        <Picture picture={profile.picture} />
        <Info projectInfo={profile.text} />

        <CapsuleTwoColumn subtitle={profile.subtitleTarget} text={profile.textTarget} subtitle2={profile.subtitleScope} text2={profile.textScope} />
        <Picture picture={profile.picture2} />

        <Capsule subtitle={profile.subtitleChallenge} text={profile.textChallenge} />
        <Capsule subtitle={profile.subtitleProcess} text={profile.textProcess} />
        <VideoClip videoURL={profile.clip1} />

        <Capsule subtitle={profile.subtitleValidation} text={profile.textValidation} />
        <Capsule subtitle={profile.subtitleLearnings} text={profile.textLearnings} />

        <VideoClip videoURL={profile.clip2} />
      </section>
    </div>
  )

}

export default ProfileCard