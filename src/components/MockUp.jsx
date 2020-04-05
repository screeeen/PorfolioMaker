import React, { useEffect,useState } from 'react'

function MockUp(props) {
    const [part1, setPart1] = useState(0);

  useEffect(() => {
    setPart1(props.data);
    console.log('hey',part1);    
  }, []);


  return (
    <div className="mock-up-container">
      <h5>mockup</h5>
      {part1 && 
      <div>
      <p>{part1.name}</p>
      <p>{part1.professions}</p>
      <p>{part1.description}</p>
      <p>{part1.fruits}</p>
      </div>}
    </div>
  );
}

export default MockUp