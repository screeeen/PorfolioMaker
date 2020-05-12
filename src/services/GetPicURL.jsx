import { useState, useEffect } from 'react';
import axios from 'axios'
import { cloudinary_URL } from './cloudinary_URL'

// const GetPicURL = ({ file, addPicURL }) => {
//   const [picURL, setPicURL] = useState(file);

//   useEffect(() => {
//     addPicURL(picURL)
//   }, [picURL])

export const upload = async file => {
  const uploadData = new FormData();
  uploadData.append('upload_preset', 'upload-profi');
  uploadData.append('file', file);
console.log(`${cloudinary_URL}`,uploadData,file);

  let res = await axios.post('https://api.cloudinary.com/v1_1/screeeen/image/upload', uploadData)
    .then(res => res.data.secure_url)
    .catch(error => console.log(error))
  console.log(res);
  return res;
}

// }
