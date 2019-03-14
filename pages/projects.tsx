import { StatelessPage, TranslateFn } from 'StatelessPage'

import '@util/installMUIStyles'

import { Theme } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
/*
import ProjectsAllQuery from '../graphql/queries/project/ProjectsAllQuery'; */

import Grid from '@material-ui/core/Grid'

import Typography from '@material-ui/core/Typography'

import TitleAndDescription from '@components/Head/Title&Description'
import Layout from '@components/UI/Layout/Layout'

import { checkLoggedIn } from '../graphql/checkLoggedIn'

import { i18n, withNamespaces } from '../i18n'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    [theme.breakpoints.up('md')]: {
      marginLeft: 240
    }
  },

  h1: {
    fontSize: '3em',
    margin: theme.spacing.unit * 2
  }
}))

export interface IProjectsProps {
  loggedInUser: {
    id: string
    email: string
    name: string
  }
  t: TranslateFn | undefined
}

const Projects: StatelessPage<IProjectsProps> = (props) => {
  const { t, loggedInUser } = props
  const classes = useStyles({})

  if (!t) {
    throw Error(`Please use the 'withNamespaces' component`)
  }

  return (
    <>
      <TitleAndDescription
        htmlTitle={t('projectspage:t&dTitle')}
        description={t('projectspage:t&dDescription')}
      />
      <Layout user={loggedInUser}>
        <Grid container className={classes.root}>
          <Typography lang={i18n.language} variant="h1" className={classes.h1}>
            {t('projectspage:header')}
          </Typography>
          {/*  <Typography lang={i18n.language} variant="subtitle1" className={classes.h1}>
            {t('projectspage:subHeader')}
          </Typography> */}

          {/*  <ProjectsAllQuery /> */}
        </Grid>
      </Layout>
    </>
  )
}

Projects.displayName = 'Projects Page'

Projects.getInitialProps = async ({ apolloClient }) => {
  const {
    // @ts-ignore
    data: { me }
  } = await checkLoggedIn(apolloClient)

  const initialProps = await {
    loggedInUser: me,
    namespacesRequired: ['common', 'projectspage', 'menu', 'languages'],
    t: undefined
  }

  return initialProps
}

export default withNamespaces(['common', 'projectspage'])(Projects)
