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

import Head from 'next/head'
import { User } from 'User'
import PostCreate from '../graphql/mutations/post/wrappers/PostCreate'
import PostsByIsPublishedQuery from '../graphql/queries/post/wrappers/PostsByIsPublishedQuery'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    maxWidth: 1920,
    [theme.breakpoints.up('md')]: {
      marginLeft: 240
    }
  },

  gridItem: {
    maxWidth: 1920,
    [theme.breakpoints.up('md')]: {
      marginLeft: 240
    }
  },

  typographyCommon: {
    margin: theme.spacing.unit * 2,
    maxWidth: '45em'
  }
}))

export interface IBlogProps {
  loggedInUser: User
  t: TranslateFn | undefined
}

const Blog: StatelessPage<IBlogProps> = (props) => {
  const { t, loggedInUser } = props
  const classes = useStyles()

  if (!t) {
    throw Error(`Please use the 'withNamespaces' component`)
  }

  return (
    <>
      <TitleAndDescription
        htmlTitle={t('blogpage:t&dTitle')}
        description={t('blogpage:t&dDescription')}
      />
      {loggedInUser && loggedInUser.role !== 'USER' && (
        <>
          <Head>
            <script
              key="cloudinary"
              async
              defer
              src="https://widget.cloudinary.com/v2.0/global/all.js"
            />
          </Head>
          <PostCreate />
        </>
      )}
      <Layout user={loggedInUser}>
        <Grid item xs={12} className={classes.gridItem}>
          <Typography
            lang={i18n.language}
            variant="h1"
            className={classes.typographyCommon}>
            {t('blogpage:header')}
          </Typography>
          <Typography
            lang={i18n.language}
            variant="subtitle1"
            className={classes.typographyCommon}>
            {t('blogpage:subHeader')}
          </Typography>
        </Grid>
        <Grid container className={classes.root}>
          <PostsByIsPublishedQuery isPublished={true} />
        </Grid>
      </Layout>
    </>
  )
}

Blog.displayName = 'Blog Page'

Blog.getInitialProps = async ({ apolloClient }) => {
  const {
    // @ts-ignore
    data: { me }
  } = await checkLoggedIn(apolloClient)

  const initialProps = await {
    loggedInUser: me,
    namespacesRequired: ['common', 'menu', 'error', 'languages', 'blogpage'],
    t: undefined
  }

  return initialProps
}

export default withNamespaces(['common', 'blogpage'])(Blog)
