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
  avatar
}: UserUpdateInput) => UserUpdateInput = ({ id, name, email, avatar }) => {
  return {
    avatar,
    email,
    id,
    name,
    password: ''
  }
}

const UpdateUser: FunctionComponent<IUpdateUserProps> = (
  props: IUpdateUserProps
) => {
  const {
    submitFn,
    user: { id, name, email, avatar },
    t
  } = props

  const [initialValues, setInitialValues] = useState(
    createValuesFromProps({
      avatar,
      email,
      id,
      name
    })
  )

  const submitHandler = async (
    values: UserUpdateInput,
    formikActions: FormikActions<UserUpdateInput>
  ) => {
    formikActions.setSubmitting(true)

    // tslint:disable-next-line: no-shadowed-variable
    const { id, name, email, password, avatar } = values

    const submitAvatar = {
      publicId: `${avatar && avatar.publicId}`,
      src: `${avatar && avatar.src}`
    }

    await submitFn({
      variables: {
        user: {
          email,
          name,
          password,
          // tslint:disable-next-line: object-literal-sort-keys
          avatar:
            avatar && initialValues.avatar && initialValues.avatar.id !== ''
              ? {
                  update: submitAvatar
                }
              : avatar
              ? {
                  create: submitAvatar
                }
              : null
        },
        where: {
          id
        }
      }
    })

    await setInitialValues(
      createValuesFromProps({
        avatar,
        email,
        id,
        name
      })
    )

    await formikActions.resetForm(
      createValuesFromProps({
        avatar,
        email,
        id,
        name
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
