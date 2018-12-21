import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import ProjectsAllQuery from '../graphql/queries/project/ProjectsAllQuery';

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

export interface IProjectsProps {
  t: (lngString: string) => string;
}

const Projects: StatelessPage<IProjectsProps> = (props) => {
  const { t } = props;
  const classes = useStyles({});

  return (
    <>
      <TitleAndDescription text="Mathias K. Ø. Wøbbe" />
      <Layout>
        <Grid item={true} className={classes.root}>
          <Typography lang={i18n.language} variant="h1" className={classes.h1}>
            {t('projectspage:header')}
          </Typography>
          <Typography lang={i18n.language} variant="subtitle1" className={classes.h1}>
            {t('projectspage:subHeader')}
          </Typography>

          <ProjectsAllQuery />
        </Grid>
      </Layout>
    </>
  );
};
Projects.displayName = 'Projects Page';

Projects.getInitialProps = async ({ ctx }) => {
  return { namespacesRequired: ['common', 'projectspage', 'menu'], ...ctx };
};

export default withNamespaces(['common', 'projectspage'])(Projects);
