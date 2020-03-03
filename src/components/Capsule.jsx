import React from 'react'
import './style.css'
import Subtitle from './Subtitle'
import Info from './Info'

 function Capsule(props) {
   const twoCol = props.halfColumn;
   console.log('twocol', props.halfColumn)
  return (
    <>
    {twoCol ? (<div className="two-col">
    <div className="flex-column">
    <Subtitle subtitle={props.subtitle} />
    <Info text={props.text} />
    </div>
    </div>
    ):(
      <>
      <Subtitle subtitle={props.subtitle} />
    <Info text={props.text} />
    </>
    )}


    </>
  )
}

export default Capsule
