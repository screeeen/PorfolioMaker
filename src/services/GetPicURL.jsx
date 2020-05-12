import axios from 'axios'

export const upload = async file => {
  const uploadData = new FormData();
  uploadData.append('upload_preset', 'upload-profi');
  uploadData.append('file', file);

  let res = await axios.post('https://api.cloudinary.com/v1_1/screeeen/image/upload', uploadData)
    .then(res => res.data.secure_url)
    .catch(error => console.log(error))
  console.log(res);
  return res;
}
