import '../util/installMUIStyles';

import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import Grid from '@material-ui/core/Grid';

/* import CardMedia from '@material-ui/core/CardMedia'; */
import Typography from '@material-ui/core/Typography';

import TitleAndDescription from '../components/Head/Title&Description';
import Layout from '../components/UI/Layout/Layout';

import { i18n, withNamespaces } from '../i18n';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    maxWidth: 960,
    [theme.breakpoints.up('md')]: {
      marginLeft: 240,
    },
  },
  media: {
    margin: '16px 16px',
    height: 200,
    width: 200,
    /*       paddingTop: '56.25%', // 16:9 */
  },
  typographyCommon: {
    maxWidth: 960,
    margin: theme.spacing.unit * 2,
  },
}));

export interface IHomeProps {
  t: (lngString: string) => string;
}

const Index: StatelessPage<IHomeProps> = (props) => {
  const { t } = props;
  const classes = useStyles({});
  return (
    <>
      <TitleAndDescription
        text="Mathias K. Ø. Wøbbe"
        description="Mathias Kandelborg's portfolio website"
      />
      <Layout>
        <Grid item={true} className={classes.root}>
          <Typography
            className={`${classes.typographyCommon}`}
            lang={i18n.language}
            variant="h1"
          >
            {t('homepage:header')}
          </Typography>
          <Typography
            className={`${classes.typographyCommon}`}
            lang={i18n.language}
            variant="subtitle1"
          >
            {t('homepage:subHeader')}
          </Typography>
          <hr />

          <Typography
            lang={i18n.language}
            variant="subtitle2"
            className={`${classes.typographyCommon}`}
          >
            About me
          </Typography>
        </Grid>
      </Layout>
    </>
  );
};

Index.displayName = 'Home Page';

Index.getInitialProps = async ({ ctx }) => {
  return { /* namespacesRequired: ['common', 'homepage', 'menu'], */ ...ctx };
};

export default withNamespaces(['common', 'homepage'])(Index);
