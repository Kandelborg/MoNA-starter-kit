import { StatelessPage, TranslateFn } from 'StatelessPage'

import '@util/installMUIStyles'

import { Theme } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

import Grid from '@material-ui/core/Grid'

import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

import TitleAndDescription from '@components/Head/Title&Description'
import Layout from '@components/UI/Layout/Layout'

import { i18n, withNamespaces } from '../i18n'

import { checkLoggedIn } from '../graphql/checkLoggedIn'

import { User } from 'User'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: theme.spacing.unit * 2,
    [theme.breakpoints.up('md')]: {
      marginLeft: 240
    }
  },
  // tslint:disable-next-line: object-literal-sort-keys
  aboutMePaper: {
    paddingBottom: theme.spacing.unit * 2,
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
    paddingTop: theme.spacing.unit * 2
  },
  media: {
    height: 200,
    margin: '16px 16px',
    width: 200
  },
  typographyCommon: {
    margin: theme.spacing.unit * 2,
    maxWidth: '45em'
  },
  typographyCentered: {
    margin: theme.spacing.unit * 2,
    maxWidth: '45em',
    textAlign: 'center'
  },
  typographySubHeader: {
    margin: theme.spacing.unit * 2,
    maxWidth: '45em'
  }
}))

export interface IHomeProps {
  loggedInUser: User
  namespacesRequired: string[]
  t: TranslateFn | undefined
}

const Index: StatelessPage<IHomeProps> = (props) => {
  const { t } = props
  const classes = useStyles()

  if (!t) {
    throw Error(`Please use the 'withNamespaces' component`)
  }

  return (
    <>
      <TitleAndDescription
        htmlTitle={t('homepage:t&dTitle')}
        description={t('homepage:t&dDescription')}
      />

      <Layout user={props.loggedInUser}>
        <Grid item xs={12} className={classes.root}>
          <Typography
            lang={i18n.language}
            variant="h1"
            style={{ fontSize: '2.8rem' }}>
            {t('homepage:header')}
          </Typography>
          <Typography
            className={`${classes.typographySubHeader}`}
            lang={i18n.language}
            variant="subtitle1">
            {t('homepage:subHeader')}
          </Typography>
        </Grid>
        <Grid container justify="center" className={classes.root}>
          <Paper
            elevation={2}
            className={classes.aboutMePaper}
            component="section">
            <Typography
              lang={i18n.language}
              variant="h4"
              component="h2"
              className={`${classes.typographyCentered}`}>
              {t('homepage:introductionHeader')}
            </Typography>
            <Typography
              lang={i18n.language}
              variant="subtitle2"
              className={`${classes.typographyCommon}`}>
              {t('homepage:introductionD1')}
            </Typography>
            <Typography
              lang={i18n.language}
              variant="body1"
              component="p"
              className={`${classes.typographyCommon}`}>
              {t('homepage:introductionD2')}
            </Typography>
            <Typography
              lang={i18n.language}
              variant="body1"
              component="p"
              className={`${classes.typographyCommon}`}>
              {t('homepage:introductionD3')}
            </Typography>
          </Paper>
        </Grid>
      </Layout>
    </>
  )
}

Index.displayName = 'Home Page'

Index.getInitialProps = async ({ apolloClient }) => {
  const {
    // @ts-ignore
    data: { me }
  } = await checkLoggedIn(apolloClient)

  const initialProps = await {
    loggedInUser: me,
    namespacesRequired: ['common', 'homepage', 'menu', 'languages'],
    t: undefined
  }

  return initialProps
}

export default withNamespaces(['common', 'homepage'])(Index)
