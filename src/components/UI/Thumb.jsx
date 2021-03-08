import React, { useState, useEffect } from 'react'
import { Image } from '../Styles'

const Thumb = ({ file }) => {
  const [loading, setLoading] = useState(false)
  const [thumb, setThumb] = useState('')

  useEffect(() => {
    if (!file) { return  } //
    
    setLoading(true);
    setThumb(() => {
      let reader = new FileReader();
      reader.onloadend = () => {
        setLoading(false);
        setThumb(reader.result);
      };
      reader.readAsDataURL(file);      
    });
  }, [file])

  return (
    <>
      {file ? (
        loading ? (<p>loading...</p>) :
          (<img src={thumb}
            alt={file.name}
            height={200}
            width={200} />)
      ) : null
      }
    </>
  );
}

export default Thumb