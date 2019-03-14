import Grid from '@material-ui/core/Grid'
import { Theme } from '@material-ui/core/styles'
import { useEffect } from 'react'

import { config } from '@util/settings'
import useStyles from './LayoutStyles'
import AppBarDrawer from './Navigation/AppBarDrawer'

interface ILayoutProps {
  user: any
  themes?: { [key: string]: Theme }
}

const Layout: React.FunctionComponent<ILayoutProps> = (props) => {
  const classes = useStyles()

  useEffect(() => {
    if ('serviceWorker' in navigator && !config.common.DEV) {
      if (
        navigator.serviceWorker.getRegistrations.length === 0 &&
        navigator.onLine
      ) {
        navigator.serviceWorker.register('/service-worker.js')
      }
    }
  })

  return (
    <>
      <AppBarDrawer user={props.user} />
      <Grid
        className={classes.root}
        direction="row"
        justify="flex-start"
        alignItems="stretch"
        alignContent="stretch"
        container={true}>
        {props.children}
      </Grid>
    </>
  )
}

Layout.displayName = 'Layout'

export default Layout
