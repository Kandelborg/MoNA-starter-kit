import React from 'react'
import { TranslateFn } from 'StatelessPage'

import { Theme, withStyles, WithStyles } from '@material-ui/core/styles'

import AppBar from '@material-ui/core/AppBar'
import Drawer from '@material-ui/core/Drawer'
import Toolbar from '@material-ui/core/Toolbar'

import Hidden from '@material-ui/core/Hidden'

import Typography from '@material-ui/core/Typography'

import IconButton from '@material-ui/core/IconButton'

import AccountCircle from 'mdi-material-ui/AccountCircle'
import MoreVertIcon from 'mdi-material-ui/DotsVertical'
import MenuIcon from 'mdi-material-ui/Menu'

import LocaleSwitcher from '@components/i18n/LocaleSwitcher'
import DrawerItems from './Drawer/DrawerItems'
import MobileMenu from './MobileMenu/MobileMenu'
import ProfileMenu from './ProfileMenu/ProfileMenu'

import { i18n, withNamespaces } from '@i18n'

import { config } from '@util/settings'

const drawerWidth = config.ui.drawerWidth

const styles = (theme: Theme) => ({
  root: {
    display: 'flex'
  },

  appBar: {
    bottom: 0,
    marginLeft: drawerWidth,
    paddingRight: '0 !important',
    top: 'auto',
    zIndex: theme.zIndex.drawer + 1,
    [theme.breakpoints.up('md')]: {
      bottom: 'auto',
      top: 0,
      width: `calc(100vw - ${0}px)`
    }
  },

  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3
  },

  drawer: {
    [theme.breakpoints.up('md')]: {
      flexShrink: 0,
      width: drawerWidth
    }
  },

  drawerPaper: {
    width: drawerWidth
  },

  grow: {
    flexGrow: 1
  },

  menuButton: {
    marginLeft: -12,
    marginRight: 20,
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },

  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    }
  },

  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },

  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  },

  toolbar: theme.mixins.toolbar
})

interface IAppDrawerProps extends WithStyles<typeof styles> {
  user: any
  container?: any
  theme?: any
  t: TranslateFn
}

interface IAppDrawerState {
  mobileOpen: boolean
  mobileMoreAnchorEl: any
  anchorEl: any
}

class ResponsiveDrawer extends React.PureComponent<
  IAppDrawerProps,
  IAppDrawerState
> {
  public state = {
    anchorEl: null,
    mobileMoreAnchorEl: null,
    mobileOpen: false
  }

  public handleDrawerToggle = () => {
    this.setState((state) => ({ mobileOpen: !state.mobileOpen }))
  }

  public handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    this.setState({ anchorEl: event.currentTarget })
  }

  public handleMenuClose = () => {
    this.setState({ anchorEl: null })

    this.handleMobileMenuClose()
  }

  public handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget })
  }

  public handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null })
  }

  public render() {
    const { anchorEl, mobileMoreAnchorEl } = this.state
    const { classes, theme, t } = this.props

    const isMenuOpen = Boolean(anchorEl)
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

    return (
      <div className={classes.root}>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label={t!('menu:menu-label')}
              onClick={this.handleDrawerToggle}
              className={classes.menuButton}>
              <MenuIcon />
            </IconButton>
            <Typography
              className={classes.title}
              lang={i18n.language}
              variant="h6"
              color="inherit"
              noWrap
              dangerouslySetInnerHTML={{ __html: t('common:title') }}
            />
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <IconButton
                aria-owns={isMenuOpen ? 'fms-app-bar' : undefined}
                aria-haspopup="true"
                aria-label={t!('menu:profileButtonLabel')}
                onClick={this.handleProfileMenuOpen}
                color="inherit">
                <AccountCircle />
              </IconButton>
              <LocaleSwitcher />
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-haspopup="true"
                aria-label={t!('menu:menuLabel')}
                onClick={this.handleMobileMenuOpen}
                color="inherit">
                <MoreVertIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        <nav className={classes.drawer}>
          {/* Implementation is js to avoid SEO duplication of links. */}
          <Hidden mdUp={true} implementation="js">
            <Drawer
              className={classes.drawer}
              container={this.props.container}
              variant="temporary"
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={this.state.mobileOpen}
              onClose={this.handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper
              }}
              ModalProps={{
                keepMounted: true // Better performance on mobile.
              }}>
              <DrawerItems />
            </Drawer>
          </Hidden>
          <Hidden smDown={true} implementation="js">
            <Drawer
              className={classes.drawer}
              classes={{
                paper: classes.drawerPaper
              }}
              variant="permanent"
              open={true}>
              <DrawerItems />
            </Drawer>
          </Hidden>
          <ProfileMenu
            user={this.props.user}
            anchorEl={anchorEl}
            isMenuOpen={isMenuOpen}
            handleMenuClose={this.handleMenuClose}
          />
          <MobileMenu
            mobileMoreAnchorEl={mobileMoreAnchorEl}
            isMobileMenuOpen={isMobileMenuOpen}
            handleMobileMenuClose={this.handleMobileMenuClose}
            handleProfileMenuOpen={this.handleProfileMenuOpen}
          />
        </nav>
        <Hidden smDown={true} implementation="js">
          <div className={classes.toolbar} />
        </Hidden>
      </div>
    )
  }
}

export default withStyles(styles, { withTheme: true })(
  withNamespaces(['common', 'menu'])(ResponsiveDrawer)
)
