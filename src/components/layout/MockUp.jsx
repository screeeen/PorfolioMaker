import React, { useEffect, useState } from 'react'
import '../style.css'

function MockUp(props) {
  
  const [data, setData] = useState(0);
  
  useEffect(() => {
    setData(props.data);
  }, [props]);
  
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
          {/* <ProjectCard data={data} /> */}
        </>
      }

    </div>
  );
}

export default MockUp