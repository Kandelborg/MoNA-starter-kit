import { FunctionComponent } from 'react'

import { UserLogin, UserLoginVariables } from 'database-api'
import { MutationFn } from 'react-apollo'
import { UserLoginInput } from 'User'

import { withNamespaces } from '@i18n'
import { Formik, FormikActions } from 'formik'
import { userLoginSchema } from './ValidationSchema'

import { TranslateFn } from 'StatelessPage'
import UserLoginFields from './Fields'

const initialValues: UserLoginInput = {
  email: '',
  password: ''
}

const LoginUser: FunctionComponent<{
  submitFn: MutationFn<UserLogin, UserLoginVariables>
  t: TranslateFn
}> = ({ submitFn, t }) => {
  const submitHandler = (
    values: UserLoginInput,
    formikActions: FormikActions<UserLoginInput>
  ) => {
    const { email, password } = values
    submitFn({
      variables: {
        email,
        password
      }
    })
    formikActions.setSubmitting(false)

    return formikActions.resetForm()
  }

  const resetHandler = (
    _values: UserLoginInput,
    formikActions: FormikActions<UserLoginInput>
  ) => formikActions.setValues(initialValues)

  const required = t('validation:required')
  const str_min = t('validation:str_min')

  return (
    <Formik
      validationSchema={userLoginSchema({
        required,
        str_min
      })}
      initialValues={initialValues}
      onReset={resetHandler}
      onSubmit={submitHandler}
      render={(fProps) => <UserLoginFields fProps={{ ...fProps }} />}
    />
  )
}

LoginUser.displayName = 'User Login Form'

export default withNamespaces(['validation'])(LoginUser)
