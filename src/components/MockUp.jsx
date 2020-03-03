import React from 'react'

function MockUp(props) {
  console.log(props);
  
  return (
    <div>
      <h1>{props.details.name}</h1>
      <h3>{props.details.professions}</h3>
      <p>{props.details.description}</p>
    </div>
  )
}

export default MockUp