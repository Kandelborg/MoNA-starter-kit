import { StatelessPage, TranslateFn } from 'StatelessPage'
import { withNamespaces } from '../i18n'

interface ICustomErrorProps {
  t: TranslateFn | undefined
  statusCode: string
}

const CustomError: StatelessPage<ICustomErrorProps> = (props) => {
  return (
    <p>
      {props.statusCode
        ? `An error ${props.statusCode} occurred on server`
        : 'An error occurred on client'}
    </p>
  )
}

CustomError.displayName = 'Error Page'

CustomError.getInitialProps = async ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : null

  return { statusCode, t: undefined, namespacesRequired: ['common', 'error'] }
}

export default withNamespaces(['common', 'error'])(CustomError)
