import { StatelessPage, TranslateFn } from 'StatelessPage'

import '@util/installMUIStyles'

import { Theme } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

import Grid from '@material-ui/core/Grid'

import Typography from '@material-ui/core/Typography'

import TitleAndDescription from '@components/Head/Title&Description'
import Layout from '@components/UI/Layout/Layout'

import { checkLoggedIn } from '../../graphql/checkLoggedIn'

import Head from 'next/head'
import { User } from 'User'
import UserUpdateMutation from '../../graphql/mutations/user/wrappers/UserUpdate'
import MeQuery from '../../graphql/queries/user/wrappers/MeQuery'
import { i18n, withNamespaces } from '../../i18n'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 960,
    [theme.breakpoints.up('md')]: {
      marginLeft: 240
    }
  },

  h1: {
    margin: theme.spacing.unit * 2
  }
}))

export interface IMyAccountProps {
  loggedInUser: User
  t: TranslateFn | undefined
}

const MyAccount: StatelessPage<IMyAccountProps> = (props) => {
  const { t, loggedInUser } = props
  const classes = useStyles({})

  if (!t) {
    throw Error(`Please use the 'withNamespaces' component`)
  }

  return (
    <>
      <Head>
        <script
          key="cloudinary"
          async
          defer
          src="https://widget.cloudinary.com/v2.0/global/all.js"
        />
      </Head>
      <TitleAndDescription
        htmlTitle={t('myaccountpage:t&dTitle')}
        description={t('myaccountpage:t&dDescription')}
      />
      <Layout user={loggedInUser}>
        <Grid item={true} className={classes.root}>
          <Typography lang={i18n.language} variant="h1" className={classes.h1}>
            {t('myaccountpage:header')}
          </Typography>
          <Typography
            lang={i18n.language}
            variant="subtitle1"
            className={classes.h1}>
            {t('myaccountpage:subHeader')}
          </Typography>
          <Grid item>
            <MeQuery id={loggedInUser.id} />

            <UserUpdateMutation user={loggedInUser} />
          </Grid>
        </Grid>
      </Layout>
    </>
  )
}

MyAccount.displayName = 'My Account Page'

MyAccount.getInitialProps = async ({ apolloClient, res }) => {
  const {
    // @ts-ignore
    data: { me }
  } = await checkLoggedIn(apolloClient)

  if (me === null) {
    res.redirect('/')
  }

  const initialProps = await {
    loggedInUser: me,
    namespacesRequired: ['common', 'myaccountpage', 'menu', 'languages'],
    t: undefined
  }

  return initialProps
}

export default withNamespaces(['common', 'myaccountpage'])(MyAccount)
