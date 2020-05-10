import React, { useState } from 'react'
import { Formik } from 'formik'
import { Form, Input, Button } from './Styles.jsx'
import axios from 'axios'
import Thumb from './Thumb'

const Survey = props => {


  // const getPicURL = async file => {
  //   setLoading(true)

  //   const uploadData = new FormData();
  //   uploadData.append('upload_preset', 'upload-profi');
  //   uploadData.append('file', file);

  //   for (var key of uploadData.entries()) {
  //     console.log(key[0] + ', ' + key[1]);
  //   }

  //   let res = await axios.post('https://api.cloudinary.com/v1_1/screeeen/image/upload', uploadData)
  //     .then(res => res.data.secure_url)
  //     .then(setLoading(false))
  //     .catch(error => console.log(error))

  //   console.log(res);
  //   return res;
  // }

  return (
    <Formik
      initialValues={{
        name: '',
        profession: '',
        file: null,
        fruits: '',
      }}
      validate={values => {
        console.log(values.file);
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
        setFieldValue,
        handleSubmit
      }) => (
          <Form onSubmit={handleSubmit}>
            <Input type="text" name="name" placeholder="Write your name..." value={values.name} onChange={handleChange} onBlur={handleBlur} />
            <Input type="profession" name="profession" placeholder="Write your profession..." value={values.profession} onChange={handleChange} onBlur={handleBlur} />
            <Input type="file" name='picture' onChange={event => setFieldValue("file", event.currentTarget.files[0])} />
            {/* event => { getPicURL(event.currentTarget.files[0]) }} /> */}
            {/* let file = getPicURL(event.currentTarget.files[0]) */}
            {/* file && setFieldValue('file',file) */}
            {/* }} /> */}
            <Thumb file={values.file} />

            <Input as="textarea" name="description" placeholder="Describe your skills" value={values.description} onChange={handleChange} onBlur={handleBlur} />

            <Button type="submit">Submit</Button>

          </Form>
        )}
    </Formik>
  );
}

export default Survey

