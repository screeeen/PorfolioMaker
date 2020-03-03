import React from 'react'

function VideoClip(props) {

  const style = {
    width: '100%',
    height:"400px",
    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
}

  return (
    <>
    <iframe style={{
    width: '100%',
    height:"400px",
    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
}} src={`https://www.youtube.com/embed/D1-mo-gvym0?start=4121`} frameBorder="0" />
    </>
  )
}

export default VideoClip
