import { UserUpdate, UserUpdateVariables } from 'database-api'
import { Formik, FormikActions } from 'formik'
import { FunctionComponent, useState } from 'react'
import { MutationFn } from 'react-apollo'
import { TranslateFn } from 'StatelessPage'
import { User, UserUpdateInput } from 'User'

import { withNamespaces } from '@i18n'

import { userUpdateSchema } from './ValidationSchema'

import UserUpdateFields from './Fields'

interface IUpdateUserProps {
  user: User
  submitFn: MutationFn<UserUpdate, UserUpdateVariables>
  t: TranslateFn
}

const createValuesFromProps: ({
  id,
  name,
  password,
  email,
  profile
}: UserUpdateInput) => UserUpdateInput = ({ id, name, email, profile }) => {
  return {
    email,
    id,
    name,
    profile,
    // tslint:disable-next-line: object-literal-sort-keys
    password: ''
  }
}

const UpdateUser: FunctionComponent<IUpdateUserProps> = (
  props: IUpdateUserProps
) => {
  const {
    submitFn,
    user: { id, name, email, profile },
    t
  } = props

  const [initialValues, setInitialValues] = useState(
    createValuesFromProps({
      email,
      id,
      name,
      profile
    })
  )

  const submitHandler = async (
    values: UserUpdateInput,
    formikActions: FormikActions<UserUpdateInput>
  ) => {
    formikActions.setSubmitting(true)

    // tslint:disable-next-line: no-shadowed-variable
    const { id, name, email, password, profile } = values

    const submitAvatar = {
      publicId: `${profile.avatar && profile.avatar.publicId}`,
      src: `${profile.avatar && profile.avatar.src}`
    }

    await submitFn({
      variables: {
        user: {
          email,
          name,
          password,
          // tslint:disable-next-line: object-literal-sort-keys
          profile: {
            update: {
              avatar: {
                update: submitAvatar
              },
              bio: ''
            }
          }
        },
        where: {
          id
        }
      }
    })

    await setInitialValues(
      createValuesFromProps({
        email,
        id,
        name,
        profile
      })
    )

    await formikActions.resetForm(
      createValuesFromProps({
        email,
        id,
        name,
        profile
      })
    )

    return formikActions.setSubmitting(false)
  }

  const resetHandler = (
    values: UserUpdateInput,
    formikActions: FormikActions<UserUpdateInput>
  ) => {
    formikActions.setValues(values)
  }

  const required = t('validation:required')
  const str_min = t('validation:str_min')

  return (
    <Formik
      validationSchema={userUpdateSchema({
        required,
        str_min
      })}
      initialValues={initialValues}
      onReset={resetHandler}
      onSubmit={submitHandler}
      render={(fProps) => <UserUpdateFields fProps={{ ...fProps }} />}
    />
  )
}

UpdateUser.displayName = 'User Update Form'

export default withNamespaces(['validation'])(UpdateUser)
