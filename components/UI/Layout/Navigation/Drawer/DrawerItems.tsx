import { FunctionComponent } from 'react'

import { Theme } from '@material-ui/core/styles'
import { makeStyles } from '@material-ui/styles'

import List from '@material-ui/core/List'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

import EntertainmentIcon from 'mdi-material-ui/DramaMasks'
import BlogIcon from 'mdi-material-ui/FileDocumentBoxMultiple'
import HomeIcon from 'mdi-material-ui/Home'
import ProjectsIcon from 'mdi-material-ui/ViewDashboardVariant'

import Divider from '@material-ui/core/Divider'

import MenuLink from '@components/HoC/Link/MenuLink'
import Link from 'next/link'

import { withNamespaces } from '@i18n'
import { config } from '@util/settings'

const useStyles = makeStyles((theme: Theme) => ({
  toolbar: theme.mixins.toolbar
}))

interface IDrawerItemsProps {
  t: (lngString: string) => string
}

const DrawerItems: FunctionComponent<IDrawerItemsProps> = (props) => {
  const classes = useStyles({})
  const { t } = props

  const { DEV } = config.common

  return (
    <>
      <div className={classes.toolbar} />
      <List>
        <li>
          <Link href="/" passHref={true}>
            <MenuLink>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary={t('homepage')} />
            </MenuLink>
          </Link>
        </li>
        <li>
          <Link href={`/projects${DEV ? '' : '/'}`} passHref={true}>
            <MenuLink>
              <ListItemIcon>
                <ProjectsIcon />
              </ListItemIcon>
              <ListItemText primary={t('projects')} />
            </MenuLink>
          </Link>
        </li>
        <li>
          <Link href={`/blog${DEV ? '' : '/'}`} passHref={true}>
            <MenuLink>
              <ListItemIcon>
                <BlogIcon />
              </ListItemIcon>
              <ListItemText primary={t('blog')} />
            </MenuLink>
          </Link>
        </li>
        <li>
          <Link href={`/entertainment${DEV ? '' : '/'}`} passHref={true}>
            <MenuLink>
              <ListItemIcon>
                <EntertainmentIcon />
              </ListItemIcon>
              <ListItemText primary={t('entertainment')} />
            </MenuLink>
          </Link>
        </li>
      </List>
      <Divider />
    </>
  )
}

DrawerItems.displayName = 'Drawer Items'

export default withNamespaces(['menu'])(DrawerItems)
