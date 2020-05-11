import React, { useEffect, useState } from 'react'
import './style.css'
import ProjectCard from './ProjectCard'
import Thumb from './Thumb'

function MockUp(props) {
  const [data, setData] = useState(0);

  useEffect(() => {
    setData(props.data);
    console.log(props.data);
  }, [props]);

  return (
    <div className="container-survey">
      <p>preview</p>
      <hr />
      {data &&
        <>
          <Thumb file={data.profile.file} />
          <p>name: {data.profile.name}</p>
          <p>{data.profile.profession}</p>
          <p>{data.profile.description}</p>
          <p>my fruit {data.profile.fruits}</p>
          <ProjectCard data={data} />
        </>
      }

    </div>
  );
}

export default MockUp