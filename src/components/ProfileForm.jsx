import React from 'react'
import { withFormik, Form, Field } from 'formik'
import { handleChange } from './utils';


const ProfileForm = props => {
  const { addInfo, values } = props

  return (
    <Form>
      {console.log(props)}
      <Field type="text" name="name" placeholder="Write your name..." />

      <Field type="profession" name="profession" placeholder="Write your profession..." />

      <br />
      <p>Your Best Photo:</p>
      <input type="file" />
      <br />
      <Field as="textarea" name="description" placeholder="Describe your skills" />

      <Field component="select" name="fruits">
        <option value="lime">lime</option>
        <option value="coconut">coconut</option>
        <option value="mando">mando</option>
      </Field>

      <button type="submit">Submit</button>
    </Form>
  );
}

export default withFormik({
  mapPropsToValues: () => {
    return {
      name: '',
      profession: '',
      file: '',
      fruits: '',
    }
  },
  handleSubmit: (values, formikBag) => {
    formikBag.setSubmitting(false);
    console.log(formikBag)
    const { addInfo } = formikBag.props
    console.log('values', values, addInfo);
    addInfo(values);

  }
})(ProfileForm)