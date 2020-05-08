import React from 'react'
import { withFormik, Form, Field } from 'formik'


const ProjectSurvey = props => {

  return (
          <Form>
            <Field type="text" name="projectName" placeholder="type your project name..." />
            <input type="file" name="picture"></input>
            <Field type="text" name="subtitle" placeholder="type your project name..." />
            <Field type="text" name="challengeDescription" placeholder="type your project name..." />
          </Form>
  )
}

export default withFormik({
  mapPropsToValue: () => {
    return {
      projectName: '',
      picture: '',
      text: '',
      subitle: '',
      challengeDescription: ''
    }
  },
  handleSubmit: (values, formikBag) => {
    formikBag.setSubmitting(false);
    const { addProject } = formikBag.props;
    addProject(values);
  }

})(ProjectSurvey)

