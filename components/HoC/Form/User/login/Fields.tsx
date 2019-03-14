import { TextInputField } from '@fields/Text/TextField'
import { withNamespaces } from '@i18n'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import { Field, Form, FormikProps } from 'formik'
import { FunctionComponent } from 'react'
import { TranslateFn } from 'StatelessPage'
import { UserLoginInput } from 'User'
import useStyles from './Styles'

const UserLoginFields: FunctionComponent<{
  fProps: FormikProps<UserLoginInput>
  t: TranslateFn
}> = ({ fProps, t }) => {
  const classes = useStyles()

  const handleSubmitFn = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault()
    fProps.handleSubmit()
  }

  return (
    <Paper className={classes.root}>
      <Form>
        <Field
          label="Email"
          name="email"
          id="email"
          autoComplete="email"
          fullWidth={true}
          required={true}
          component={TextInputField}
        />
        <Field
          label="Password"
          name="password"
          id="password"
          type="password"
          autoComplete="password"
          fullWidth={true}
          required={true}
          component={TextInputField}
        />

        <Button type="submit" variant="contained" onClick={handleSubmitFn}>
          {t('common:submit')}
        </Button>
      </Form>
    </Paper>
  )
}

export default withNamespaces(['common', 'fields'])(UserLoginFields)
