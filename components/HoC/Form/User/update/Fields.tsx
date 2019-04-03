import { Field, Form, FormikProps } from 'formik'
import { FunctionComponent } from 'react'
import { TranslateFn } from 'StatelessPage'

import { UserUpdateInput } from 'User'

import useStyles from './Styles'

import Paper from '@material-ui/core/Paper'

import Button from '@material-ui/core/Button'

import { withNamespaces } from '@i18n'

import { UpdateImageInputField } from '@fields/Image/ImageUpdate'
import { TextInputField } from '@fields/Text/TextField'

const UserUpdateFields: FunctionComponent<{
  fProps: FormikProps<UserUpdateInput>
  t: TranslateFn
}> = ({
  fProps: { handleSubmit, values, isSubmitting, isValidating, errors },
  t
}) => {
  const classes = useStyles()

  const handleSubmitFn = () => {
    if (!isSubmitting && !isValidating && errors !== {}) handleSubmit()
  }

  return (
    <Paper className={classes.root}>
      <Form autoComplete="off">
        <Field
          lpignore="true"
          name="avatar"
          value={values.profile.avatar}
          render={(renderCtx: { field: any; form: any }) => (
            <UpdateImageInputField
              {...renderCtx}
              fieldValueName="avatar"
              multiple={false}
              maxfiles={null}
            />
          )}
        />
        <Field
          lpignore="true"
          label="Email"
          name="email"
          value={values.email}
          id="new-email"
          autoComplete="off"
          fullWidth={true}
          required={true}
          component={TextInputField}
        />
        <Field
          lpignore="true"
          label="Name"
          name="name"
          value={values.name}
          id="name"
          autoComplete="off"
          fullWidth={true}
          required={true}
          component={TextInputField}
        />
        <Field
          lpignore="true"
          label="Password"
          name="password"
          value={values.password}
          id="new-password"
          type="password"
          autoComplete="off"
          fullWidth={true}
          component={TextInputField}
        />

        <Button
          fullWidth
          type="submit"
          variant="contained"
          size="large"
          disabled={
            isValidating || isSubmitting || (isValidating && isSubmitting)
          }
          onClick={handleSubmitFn}>
          {t('common:submit')}
        </Button>
      </Form>
    </Paper>
  )
}

export default withNamespaces(['common', 'fields'])(UserUpdateFields)
