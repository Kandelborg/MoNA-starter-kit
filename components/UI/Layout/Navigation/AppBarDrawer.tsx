import React from 'react';

import { Theme, withStyles, WithStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';

import Hidden from '@material-ui/core/Hidden';

import Typography from '@material-ui/core/Typography';

import IconButton from '@material-ui/core/IconButton';

import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import LocaleSwitcher from '../../../../components/i18n/LocaleSwitcher';
import DrawerItems from './Drawer/DrawerItems';
import MobileMenu from './MobileMenu/MobileMenu';
import ProfileMenu from './ProfileMenu/ProfileMenu';

import { i18n, withNamespaces } from '../../../../i18n';

import { config } from '../../../../settings';

const drawerWidth = config.ui.drawerWidth;

const styles = (theme: Theme) => ({
  root: {
    display: 'flex',
  },

  grow: {
    flexGrow: 1,
  },

  menuButton: {
    marginLeft: -12,
    marginRight: 20,
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },

  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },

  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },

  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },

  drawer: {
    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },

  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    marginLeft: drawerWidth,
    top: 'auto',
    bottom: 0,
    [theme.breakpoints.up('md')]: {
      bottom: 'auto',
      width: `calc(100vw - ${0}px)`,
    },
  },

  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },

  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
});

interface IAppDrawerProps extends WithStyles<typeof styles> {
  container?: any;
  theme?: any;
  t: (string: string) => string;
}

interface IAppDrawerState {
  mobileOpen: boolean;
  mobileMoreAnchorEl: any;
  anchorEl: any;
}

class ResponsiveDrawer extends React.Component<IAppDrawerProps, IAppDrawerState> {
  public state = {
    anchorEl: null,
    mobileMoreAnchorEl: null,
    mobileOpen: false,
  };

  public handleDrawerToggle = () => {
    this.setState((state) => ({ mobileOpen: !state.mobileOpen }));
  };

  public handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  public handleMenuClose = () => {
    this.setState({ anchorEl: null });

    this.handleMobileMenuClose();
  };

  public handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  public handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };

  public render() {
    const { anchorEl, mobileMoreAnchorEl } = this.state;
    const { classes, theme, t } = this.props;

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    return (
      <div className={classes.root}>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label={t!('menu:menu-label')}
              onClick={this.handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              className={classes.title}
              lang={i18n.language}
              variant="h6"
              color="inherit"
              noWrap={true}
              dangerouslySetInnerHTML={{ __html: t!('common:title') }}
            />
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <IconButton
                aria-owns={isMenuOpen ? 'kandelborg-app-bar' : undefined}
                aria-haspopup="true"
                aria-label={t!('menu:profileButtonLabel')}
                onClick={this.handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <LocaleSwitcher />
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-haspopup="true"
                aria-label={t!('menu:menuLabel')}
                onClick={this.handleMobileMenuOpen}
                color="inherit"
              >
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
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better performance on mobile.
              }}
            >
              <DrawerItems />
            </Drawer>
          </Hidden>
          <Hidden smDown={true} implementation="js">
            <Drawer
              className={classes.drawer}
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open={true}
            >
              <DrawerItems />
            </Drawer>
          </Hidden>
          <ProfileMenu
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
        <Hidden smDown={true} implementation="css">
          <div className={classes.toolbar} />
        </Hidden>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(
  withNamespaces(['common', 'menu'])(ResponsiveDrawer),
);
