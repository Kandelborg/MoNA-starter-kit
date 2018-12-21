import { /*  Field, Form, */ FormikErrors, /* FormikProps, */ withFormik } from 'formik';

/* import * as Yup from 'yup'; */

import ProjectCreateInner, { IFormValues } from './ProjectCreateInner';

interface IProjectFormProps {
  initialEverything: string;
  initialName: string;
}

const ProjectCreateForm = withFormik<IProjectFormProps, IFormValues>({
  // Transform outer props into form values
  mapPropsToValues: (props) => {
    return {
      names: '',
      initialName: '',
      initialEverything: props.initialEverything || '',
      name: props.initialName || '',
    };
  },

  // Add a custom validation function (this can be async too!)
  validate: (_values: IFormValues) => {
    const errors: FormikErrors<IFormValues> = {};
    /*  if (!values.email) {
      errors.email = 'Required';
    } else if (!isValidEmail(values.email)) {
      errors.email = 'Invalid email address';
    } */
    return errors;
  },

  handleSubmit: (_values: IFormValues) => {
    // do submitting things
  },
})(ProjectCreateInner);

export default ProjectCreateForm;
