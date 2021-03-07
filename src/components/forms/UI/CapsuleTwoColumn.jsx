import React from 'react'

import Subtitle from '../forms/Subtitle'
import Info from './Info'
// import Capsule from './Capsule'

 function CapsuleTwoColumn(props) {
  return (
    <>
    <div className="two-col">
    <div className="flex-column">
    <Subtitle subtitle={props.subtitle} />
    <Info text={props.text} />
    </div>
    <div className="flex-column">
    <Subtitle subtitle={props.subtitle2} />
    <Info text={props.text2} />
    </div>
    </div>
    </>
  )
}

export default CapsuleTwoColumn