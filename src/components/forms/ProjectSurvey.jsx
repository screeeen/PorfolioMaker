import React from 'react'
import { Form, Input, Button } from '../Styles.jsx'
import { Formik } from 'formik'
import Thumb from '../UI/Thumb'
import { upload } from '../../services/GetPicURL'

const ProjectSurvey = props => {
  console.log(props)
  const { projectName, subtitle, file, challengeDescription, addProject, history } = props;
  // console.log(projectName, subtitle, file, challengeDescription, addProject, history);
  return (
    <Formik
      initialValues={{
        projectName: '',
        subtitle: '',
        file: null,
        challengeDescription: '',
      }}
      validate={values => {
      }}
      onSubmit={(values) => {
        upload(values.file)
          .then(ur => {
            values.file = ur
            addProject(values);
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
          <Form>
            <Input type="text" name="projectName" placeholder="type your project name..." value={values.projectName} onChange={handleChange} onBlur={handleBlur} />
            <Input type="file" name="file"></Input>
            <Input type="text" name="subtitle" placeholder="type your project name..." value={values.subtitle} onChange={handleChange} onBlur={handleBlur} />
            {typeof file === 'string' && <img src={file} alt='' />}
            {typeof file === 'object' && <Thumb file={values.file} />}
            <Input as="textarea" name="challengeDescription" placeholder="Describe your skills" value={values.challengeDescription} onChange={handleChange} onBlur={handleBlur} />
            <Button type="submit">Submit</Button>
          </Form>
        )}
    </Formik>
  );
}

export default ProjectSurvey

// withFormik({
//   mapPropsToValue: () => {
//     return {
//       projectName: '',
//       picture: '',
//       text: '',
//       subitle: '',
//       challengeDescription: ''
//     }
//   },
//   handleSubmit: (values, formikBag) => {
//     formikBag.setSubmitting(false);
//     const { addProject } = formikBag.props;
//     addProject(values);
//   }

// })