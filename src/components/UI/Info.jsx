import React from 'react'
import './style.css'


 function Info(props) {
  return (
    <div className="project-info">
      <p>
        {props.text}
      </p>
    </div>
  )
}

export default Info
