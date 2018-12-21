import * as React from 'react';

import { /*  Field, */ Form, /* FormikErrors, */ FormikProps } from 'formik';
/* import * as Yup from 'yup'; */

export interface IFormValues {
  names: string;
  initialEverything: string;
  initialName: string;
}

export interface IProjectCreateInnerProps extends FormikProps<IFormValues> {
  /* prop: string; */
  initialEverything: string;
  initialName: string;
}

export interface IProjectCreateInnerState {
  state: string;
}

class ProjectCreateInner extends React.Component<
  IProjectCreateInnerProps,
  IProjectCreateInnerState
> {
  constructor(props: IProjectCreateInnerProps) {
    super(props);
    this.state = {
      state: 'string',
    };
  }

  public render() {
    const {
      /* touched, errors, isSubmitting, message */
    } = this.props;
    const {
      /*  state */
    } = this.state;

    return <Form />;
  }
}

export default ProjectCreateInner;
