import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';

function MockUp() {
  
  const location = useLocation();
  useEffect(() => {
    const info = location.state;
    console.log(info,'hey',location);    
  }, [location]);


  return (
    <div className="mock-up-container">
      <h3>hola mockup</h3>
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