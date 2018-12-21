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
    transition: theme.transitions.create(['all'], {
      duration: theme.transitions.duration.complex,
    }),
  },
}));

export interface IBlogProps {
  t: (lngString: string) => string;
}

const Blog: StatelessPage<IBlogProps> = (props) => {
  const { t } = props;
  const classes = useStyles({});
  return (
    <>
      <TitleAndDescription text="Blog page" />
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

Blog.displayName = 'Blog Page';

Blog.getInitialProps = async ({ ctx }) => {
  return { namespacesRequired: ['common', 'menu', 'error', 'projectspage'], ...ctx };
};

export default withNamespaces(['common', 'projectspage'])(Blog);
