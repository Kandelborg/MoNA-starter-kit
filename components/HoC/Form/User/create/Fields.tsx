import { Field, Form, FormikProps } from 'formik'

import { UserCreateInput } from 'User'

import useStyles from './Styles'

import Paper from '@material-ui/core/Paper'

import Button from '@material-ui/core/Button'

import { TextInputField } from '@fields/Text/TextField'
import { withNamespaces } from '@i18n'
import { FunctionComponent } from 'react'
import { TranslateFn } from 'StatelessPage'

const UserCreateFields: FunctionComponent<{
  fProps: FormikProps<UserCreateInput>
  t: TranslateFn
}> = ({ fProps: { handleSubmit }, t }) => {
  const classes = useStyles()

  const handleSubmitFn = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault()
    handleSubmit()
  }

  return (
    <Paper className={classes.root}>
      <Form>
        <Field
          label="Email"
          name="email"
          id="new-email"
          autoComplete="new-email"
          fullWidth={true}
          required={true}
          component={TextInputField}
        />
        <Field
          label="Name"
          name="name"
          id="name"
          autoComplete="new-username"
          fullWidth={true}
          required={true}
          component={TextInputField}
        />
        <Field
          label="Password"
          name="password"
          id="new-password"
          type="password"
          autoComplete="new-password"
          fullWidth={true}
          required={true}
          component={TextInputField}
        />

        <Button type="submit" onClick={handleSubmitFn}>
          {t('common:submit')}
        </Button>
      </Form>
    </Paper>
  )
}

export default withNamespaces(['common'])(UserCreateFields)
