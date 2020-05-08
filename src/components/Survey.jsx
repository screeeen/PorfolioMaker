import React, { useState } from 'react'
import { Formik } from 'formik'
import { Form, Input, Button } from './Styles.jsx'
import axios from 'axios'


const Survey = props => {

  const [picture, setPicture] = useState('')
  const [loading, setLoading] = useState(false)

  const onFileChange = event => {
    const file = event.target.files[0];
    const uploadData = new FormData();
    console.log(file);
    // uploadData.append("api_key",process.env.REACT_APP_API_KEY);
    uploadData.append('upload_preset', 'upload-profi');
    uploadData.append('file', file);

    for (var key of uploadData.entries()) {
      console.log(key[0] + ', ' + key[1]);
  }
    // console.log(uploadData.entries());
    setLoading(true);

    axios.post('https://api.cloudinary.com/v1_1/screeeen/image/upload', uploadData) 
      .then(res => setPicture(res.data.secure_url))
      .then(setLoading(false))
      .catch(error => console.log(error))
  }

  return (
    <Formik
      initialValues={{
        name: '',
        profession: '',
        file: '',
        fruits: '',
      }}
      validate={values => {
        console.log(values);
      }}
      onSubmit={values => {
        console.log(values);
        props.addInfo(values);
      }}
    >

      {({
        touched,
        errors,
        values,
        handleChange,
        handleBlur,
        handleSubmit
      }) => (
          <Form onSubmit={handleSubmit}>
            <Input type="text" name="name" placeholder="Write your name..." value={values.name} onChange={handleChange} onBlur={handleBlur} />

            <Input type="profession" name="profession" placeholder="Write your profession..." value={values.profession} onChange={handleChange} onBlur={handleBlur} />

            <br />
            <p>Your Best Photo:</p>
            <Input type="file" name='picture' onChange={onFileChange} />
            <br />
            <Input as="textarea" name="description" placeholder="Describe your skills" value={values.description} onChange={handleChange} onBlur={handleBlur} />

            <Button type="submit">Submit</Button>
          </Form>
        )}
    </Formik>
  );
}

export default Survey

