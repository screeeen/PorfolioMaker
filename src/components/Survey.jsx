import React, { useState, useEffect } from 'react'
import './style.css'
import Title from './Title'
import Info from './Info'
import Picture from './Picture'
import Capsule from './Capsule'
import CapsuleTwoColumn from './CapsuleTwoColumn'
import VideoClip from './VideoClip'

const Survey = ({addInfo,data}) => {


  const initialProfile = (data.profile ||
  {
    name: '',
    profession: '',
    fileInput: '',
    description: '',
    fruits: ''
  });

  const [profile, setProfile] = useState(initialProfile);

  useEffect(() => {
    console.log(data);
    setProfile(data.profile);
    // window.localStorage.setItem('profile',data.profile);
  }, []);


  const handleChange = event => {
    const { name, value } = event.target
    setProfile({ ...profile, [name]: value });
  }

  const handleSubmit = event => {
    event.preventDefault();
    addInfo(profile);
  }


  return (
    <div className="container-survey">
      <div className="two-col">
        <div className="flex-column">
          <form onSubmit={handleSubmit}>
            <label>
              <p>Name:</p>
            </label>
            <input type="text" name='name' value={profile.name} onChange={handleChange} />
            <br />

            <p>Your Best Photo:</p>
            <input type="file" />

            <br />
            <label>
              <p>What do you do?</p>
            </label>
            <input type="text" name='profession' value={profile.profession} onChange={handleChange} />
            <br />
            <label>
              <p>Description:</p>
              <textarea name='description' value={profile.description} onChange={handleChange} />
            </label>
            <br />
            <label>
              <p>Pick your favorite flavor:</p>
              <select value={profile.fruits} name='fruits' onChange={handleChange}>
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option value="coconut">Coconut</option>
                <option value="mango">Mango</option>
              </select>
            </label>
            <br />
            <br />
            <p>------------◊◊◊--------------</p>
            <button type="submit" value="Done with the profile part" />
          </form>
        </div>
        <div className="container-survey">
          <p>mockup</p>
          <hr></hr>
          <section id={profile.idTitle}>
            <p>{profile.name}</p>
            <p>{profile.profession}</p>
            <p>{profile.description}</p>
            <p>{profile.fruits}</p>

            <Title title={profile.title} />
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
      </div>
    </div>
  )

}

export default Survey

