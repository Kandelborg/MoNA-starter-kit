import { StatelessPage, TranslateFn } from 'StatelessPage'
import { checkLoggedIn } from '../graphql/checkLoggedIn'
import { i18n, withNamespaces } from '../i18n'

import '@util/installMUIStyles'

import { Theme } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

import Grid from '@material-ui/core/Grid'

import Typography from '@material-ui/core/Typography'

import TitleAndDescription from '@components/Head/Title&Description'
import Layout from '@components/UI/Layout/Layout'
import { User } from 'User'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    [theme.breakpoints.up('md')]: {
      marginLeft: 240
    }
  },

  h1: {
    margin: theme.spacing.unit * 2
  }
}))

export interface IEntertainmentProps {
  loggedInUser: User
  t: TranslateFn | undefined
}

const Entertainment: StatelessPage<IEntertainmentProps> = (props) => {
  const { t, loggedInUser } = props
  const classes = useStyles()

  if (!t) {
    throw Error(`Please use the 'withNamespaces' component`)
  }

  return (
    <>
      <TitleAndDescription
        htmlTitle={t('entertainmentpage:t&dTitle')}
        description={t('entertainmentpage:t&dDescription')}
      />
      <Layout user={loggedInUser}>
        <Grid item={true} className={classes.root}>
          <Typography lang={i18n.language} variant="h1" className={classes.h1}>
            {t('entertainmentpage:header')}
          </Typography>
          <Typography
            lang={i18n.language}
            variant="subtitle1"
            className={classes.h1}>
            {t('entertainmentpage:subHeader')}
          </Typography>
        </Grid>
      </Layout>
    </>
  )
}

Entertainment.displayName = 'Entertainment Page'

Entertainment.getInitialProps = async ({ apolloClient }) => {
  const {
    // @ts-ignore
    data: { me }
  } = await checkLoggedIn(apolloClient)

  const initialProps = await {
    loggedInUser: me,
    namespacesRequired: [
      'common',
      'menu',
      'error',
      'languages',
      'entertainmentpage'
    ],
    t: undefined
  }

  return initialProps
}

export default withNamespaces(['common', 'entertainmentpage'])(Entertainment)
