import axios from 'axios'
import {cloudinary_URL} from './cloudinary_URL'

const getPicURL = async file => {

  // setLoading(true)
  const uploadData = new FormData();
  uploadData.append('upload_preset', 'upload-profi');
  uploadData.append('file', file);

  for (var key of uploadData.entries()) {
    console.log(key[0] + ', ' + key[1]);
  }

  const url = `${cloudinary_URL}`

  let res = await axios.post(url, uploadData)
    .then(res => res.data.secure_url)
    // .then(setLoading(false))
    .catch(error => console.log(error))

  console.log(res);
  return res;
}

export default getPicURL