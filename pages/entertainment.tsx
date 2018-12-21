import '../util/installMUIStyles';

import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';

import TitleAndDescription from '../components/Head/Title&Description';
import Layout from '../components/UI/Layout/Layout';

import { i18n, withNamespaces } from '../i18n';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    [theme.breakpoints.up('md')]: {
      marginLeft: 240,
    },
  },

  h1: {
    margin: theme.spacing.unit * 2,
  },
}));

export interface IEntertainmentProps {
  t: (lngString: string) => string;
}

const Entertainment: StatelessPage<IEntertainmentProps> = (props) => {
  const { t } = props;
  const classes = useStyles({});
  return (
    <>
      <TitleAndDescription text="Entertainment!" />
      <Layout>
        <Grid item={true} className={classes.root}>
          <Typography lang={i18n.language} variant="h1" className={classes.h1}>
            {t('projectspage:header')}
          </Typography>
          <Typography lang={i18n.language} variant="subtitle1" className={classes.h1}>
            {t('projectspage:subHeader')}
          </Typography>
        </Grid>
      </Layout>
    </>
  );
};

Entertainment.displayName = 'Entertainment Page';

Entertainment.getInitialProps = async ({ ctx }) => {
  return { namespacesRequired: ['common', 'menu', 'projectspage'], ...ctx };
};

export default withNamespaces(['common', 'projectspage'])(Entertainment);
