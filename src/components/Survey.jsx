import React, { useState } from 'react'
import { Formik } from 'formik'
import { withRouter } from "react-router-dom";
import { Form, Input, Button } from './Styles.jsx'
import Thumb from './Thumb'

const Survey = props => {

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
      onSubmit={(values) => {
        console.log(values);
        props.addInfo(values);
        props.history.push('/');
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
            <Thumb file={values.file} />
            <Input as="textarea" name="description" placeholder="Describe your skills" value={values.description} onChange={handleChange} onBlur={handleBlur} />
            <Button type="submit">Submit</Button>

          </Form>
        )}
    </Formik>
  );
}

export default withRouter(Survey)

