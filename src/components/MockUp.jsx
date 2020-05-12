import React, { useEffect, useState } from 'react'
import './style.css'
import ProjectCard from './ProjectCard'
import Thumb from './Thumb'

function MockUp(props) {
  
  const [data, setData] = useState(0);
  
  useEffect(() => {
    setData(props.data);
  }, [props]);
  console.log(data);
  
  return (
    <div className="container-survey">
      <p>preview</p>
      <hr />
      {data &&
        <>
          <img src={data.file} alt='' />
          <p>name: {data.name} </p>
          <p>{data.profession}</p>
          <p>{data.description}</p>
          <p>my fruit {data.fruit}</p>
          {/* <ProjectCard data={data} /> */}
        </>
      }

    </div>
  );
}

export default MockUp