import React, { useEffect,useState } from 'react'
import './style.css'

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
      </div>}
    </div>
  );
}

export default MockUp