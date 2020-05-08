import React, {useState,useEffect} from  'react'
import { CloudinaryContext } from "cloudinary-react";



const ImageUploadCompo = props => {


  const [images, setImages] = useState([])

  return (
    <CloudinaryContext cloudName="screeeen">
      <div className="App">
        <section>
          {images.map(i => <img src={i} alt="" />)}
          {/* <img src= */}
        </section>
      </div>
    </CloudinaryContext>
  );
}
}

export default ImageUploadCompo