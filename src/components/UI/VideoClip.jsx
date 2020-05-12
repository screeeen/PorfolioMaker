import React from 'react'

function VideoClip(props) {

  return (
    <>
    <iframe style={{
    width: '100%',
    height:"400px",
    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
    margin: '20px'}} 
src={props.videoURL} frameBorder="0" />
    </>
  )
}

export default VideoClip
