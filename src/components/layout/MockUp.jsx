import React, { useEffect, useState } from 'react'
import '../style.css'

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
      <section key={project.projectName + project.subtitle}>
          {project.file && <img src={project.file} alt='' />}
          <p>project name: {project.projectName} </p>
          <p>project subtitle: {project.subtitle}</p>
          <p>project challenge: {project.challengeDescription}</p>
      </section>
    ))
  }
  
  return (
    <div className="container-survey">
      <p>preview</p>
          {profile.file && <img src={profile.file} alt='' />}
          <p>name: {profile.name} </p>
          <p>{profile.profession}</p>
          <p>{profile.description}</p>
          {renderProjects()}
    </div>
  );
}

export default MockUp