import React, { useEffect, useState } from 'react'
import { Image } from '../Styles'
function MockUp(props) {
  
  const [data, setData] = useState(props.data);
  const { profile, projects } = props.data;
  console.log(profile, projects);
  
  
  useEffect(() => {
    setData(props.data);
  }, [props.data]);


  const renderProjects =()=> {
    console.log('here',data)
   return projects.length && projects.map((project)=>(
      <div key={project.projectName + project.subtitle}>
          {project.file && <Image src={project.file} alt='' />}
          <p>project name: {project.projectName} </p>
          <p>project subtitle: {project.subtitle}</p>
          <p>project challenge: {project.challengeDescription}</p>
      </div>
    ))
  }
  
  return (
    <>
      <p>preview</p>
          {profile.file && <Image src={profile.file} alt='' />}
          <p>name: {profile.name} </p>
          <p>{profile.profession}</p>
          <p>{profile.description}</p>
          {renderProjects()}
    </>
  );
}

export default MockUp