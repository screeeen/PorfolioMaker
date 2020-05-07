import React, { useState, useEffect } from 'react'
import './style.css'

import ProfileCard from './ProfileCard'
import ProfileForm from './ProfileForm'
// import MyForm from './MyForm'

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
      <ProfileForm  addInfo={addInfo}/>
      {/* <MyForm  addInfo={addInfo}/> */}
      {/* <div className="two-col">
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
        <ProfileCard profile ={profile} />
       
        </div> */}
      </div>
  )

}

export default Survey

