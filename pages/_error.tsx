import { withNamespaces } from '../i18n';

interface ICustomErrorProps {
  t: (lngString: string) => string;
  statusCode: string;
}

const CustomError: StatelessPage<ICustomErrorProps> = (props) => {
  return (
    <p>
      {props.statusCode
        ? `An error ${props.statusCode} occurred on server`
        : 'An error occurred on client'}
    </p>
  );
};

CustomError.displayName = 'Error Page';

CustomError.getInitialProps = async ({ res, err, ctx }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : null;
  return { statusCode, namespacesRequired: ['common', 'error'], ...ctx };
};

export default withNamespaces(['common', 'error'])(CustomError);
