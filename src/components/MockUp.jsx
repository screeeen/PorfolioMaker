import React, { useEffect,useState } from 'react'
import { useLocation } from 'react-router-dom';

function MockUp() {
    const [part1, setPart1] = useState(0);

  const location = useLocation();
  useEffect(() => {
    location.state && setPart1(location.state.part1);
    console.log('hey',part1);    
  }, []);


  return (
    <div className="mock-up-container">
      <h5>mockup</h5>
      {location.state && 
      <div>
      <p>{location.state.part1.name}</p>
      <p>{location.state.part1.professions}</p>
      <p>{location.state.part1.description}</p>
      <p>{location.state.part1.fruits}</p>
      </div>}
    </div>
  );
}

export default MockUp