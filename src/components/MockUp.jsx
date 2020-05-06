import React, { useEffect, useState } from 'react'
import './style.css'
import ProjectCard from './ProjectCard'

function MockUp(props) {
  const [data, setData] = useState(0);

  useEffect(() => {
    console.log(props.data);
    setData(props.data);
  }, []);




  return (
    <div className="container-survey">
      <p>preview</p>
      <hr />
      {data &&
        <>
          <p>name: {data.profile.name}</p>
          <p>{data.profile.professions}</p>
          <p>{data.profile.description}</p>
          <p>my fruit {data.profile.fruits}</p>
          <ProjectCard data ={data} />
        </>
      }

    </div>
  );
}

export default MockUp