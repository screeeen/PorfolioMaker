import React from 'react'
import { Form, Input, Button } from '../Styles.jsx'
import { Formik } from 'formik'
import { withRouter } from "react-router-dom";
import Thumb from '../UI/Thumb'
import { upload } from '../../services/GetPicURL'

const Survey = (props) => {
  const { name, profession, file, description } = props.data.profile;
  const { addInfo, history } = props;
  console.log(props);
  return (
    <Formik
      initialValues={{
        name: name,
        profession: profession,
        file: file,
        description: description,
      }}
      validate={values => {
      }}
      onSubmit={(values) => {
        upload(values.file)
          .then(ur => {
            values.file = ur
            addInfo(values);
            history.push('/');
          })
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
            <Input name="name" type="text" placeholder="Write your name..." value={values.name} onChange={handleChange} onBlur={handleBlur} />
            <Input name="profession" type="profession" placeholder="Write your profession..." value={values.profession} onChange={handleChange} onBlur={handleBlur} />
            <Input name="picture" type="file" onChange={event => setFieldValue("file", event.currentTarget.files[0])} />
            {typeof file === 'string' && <img src={file} alt=''/>}
            {typeof file === 'object' && <Thumb file={values.file} />}
            <Input as="textarea" name="description" placeholder="Describe your skills" value={values.description} onChange={handleChange} onBlur={handleBlur} />
            <Button type="submit">Submit</Button>
          </Form>
        )}
    </Formik>
  );
}

export default withRouter(Survey)

