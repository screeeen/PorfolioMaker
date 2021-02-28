import React from 'react'
import { Form, Input, Button } from '../Styles.jsx'
import { Formik } from 'formik'
import { withRouter } from "react-router-dom";
import Thumb from '../UI/Thumb'
import { upload } from '../../services/GetPicURL'

const ProjectSurvey = (props) => {

  const { projects } = props.data;
  const { addProject, history } = props;
  const currentProject = projects[projects.length-1];
  const {projectName,subtitle,file,challengeDescription} = currentProject;
  console.log('projects',projects)

  return (
    <Formik
      initialValues={{
        projectName,
        subtitle,
        file,
        challengeDescription,
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
        values,
        handleChange,
        handleBlur,
        setFieldValue,
        handleSubmit
      }) => (
          <Form onSubmit={handleSubmit}>
            <Input type="text" name="projectName" placeholder="type your  thing project name..." value={values.projectName} onChange={handleChange} onBlur={handleBlur} />
            <Input name="picture" type="file" onChange={event => setFieldValue("file", event.currentTarget.files[0])} />
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

export default withRouter(ProjectSurvey);

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