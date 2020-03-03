import React from 'react'
import './style.css'
import Subtitle from './Subtitle'
import Info from './Info'

 function Capsule(props) {
  return (
    <>
    <Subtitle subtitle={props.subtitle} />
    <Info text={props.text} />
    </>
  )
}

export default Capsule
