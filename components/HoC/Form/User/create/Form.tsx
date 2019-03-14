import { FunctionComponent } from 'react'

import { UserCreate, UserCreateVariables } from 'database-api'
import { MutationFn } from 'react-apollo'
import { UserCreateInput } from 'User'

import { withNamespaces } from '@i18n'
import { Formik, FormikActions } from 'formik'
import { userCreateSchema } from './ValidationSchema'

import { TranslateFn } from 'StatelessPage'
import UserCreateFields from './Fields'

const initialValues: UserCreateInput = {
  email: '',
  name: '',
  password: ''
}

const CreateUser: FunctionComponent<{
  t: TranslateFn
  submitFn: MutationFn<UserCreate, UserCreateVariables>
}> = ({ submitFn, t }) => {
  const submitHandler = (
    values: UserCreateInput,
    formikActions: FormikActions<UserCreateInput>
  ) => {
    const { name, email, password } = values
    submitFn({
      variables: {
        email,
        name,
        password
      }
    })
    formikActions.setSubmitting(false)

    return formikActions.resetForm()
  }

  const resetHandler = (
    _values: UserCreateInput,
    formikActions: FormikActions<UserCreateInput>
  ) => formikActions.setValues(initialValues)

  const required = t('validation:required')
  const str_min = t('validation:str_min')

  return (
    <Formik
      validationSchema={userCreateSchema({
        required,
        str_min
      })}
      initialValues={initialValues}
      onReset={resetHandler}
      onSubmit={submitHandler}
      render={(fProps) => <UserCreateFields fProps={{ ...fProps }} />}
    />
  )
}

CreateUser.displayName = 'User Create Form'

export default withNamespaces(['validation'])(CreateUser)
