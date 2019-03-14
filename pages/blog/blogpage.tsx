import { StatelessPage, TranslateFn } from 'StatelessPage'

import { checkLoggedIn } from '../../graphql/checkLoggedIn'
import { /* i18n, */ withNamespaces } from '../../i18n'

import '@util/installMUIStyles'

import { Theme } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

import Grid from '@material-ui/core/Grid'

import TitleAndDescription from '@components/Head/Title&Description'
import Layout from '@components/UI/Layout/Layout'

import { User } from 'User'
import PostBySlugQuery from '../../graphql/queries/post/wrappers/PostBySlugQuery'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    maxWidth: 960,
    [theme.breakpoints.up('md')]: {
      marginLeft: 240
    }
  },

  typographyCommon: {
    margin: theme.spacing.unit * 2,
    maxWidth: 960
  }
}))

export interface IBlogProps {
  slug: string
  loggedInUser: User
  t: TranslateFn | undefined
}

const BlogPostPage: StatelessPage<IBlogProps> = (props) => {
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
      <Layout user={loggedInUser}>
        <Grid container className={classes.root}>
          {/*   <Typography
            lang={i18n.language}
            variant="h1"
            className={classes.typographyCommon}
          >
            {t('blogpage:header')}
          </Typography>
          <Typography
            lang={i18n.language}
            variant="subtitle1"
            className={classes.typographyCommon}
          >
            {t('blogpage:subHeader')}
          </Typography> */}

          <PostBySlugQuery slug={props.slug} />
        </Grid>
      </Layout>
    </>
  )
}

BlogPostPage.displayName = 'Blog Post Page'

BlogPostPage.getInitialProps = async ({ apolloClient, req }) => {
  const {
    // @ts-ignore
    data: { me }
  } = await checkLoggedIn(apolloClient)

  const initialProps = await {
    loggedInUser: me,
    namespacesRequired: ['common', 'menu', 'error', 'languages', 'blogpage'],
    slug: req.params.slug,
    t: undefined
  }

  return initialProps
}

export default withNamespaces(['common', 'blogpage'])(BlogPostPage)
