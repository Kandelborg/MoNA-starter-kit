import UserCreate from '@graphql/mutations/user/wrappers/UserCreate'
import UserLogin from '@graphql/mutations/user/wrappers/UserLogin'
import { withNamespaces } from '@i18n'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  ListItemText,
  Menu,
  MenuItem
} from '@material-ui/core'
import makeStyles from '@material-ui/styles/makeStyles'
import { config } from '@util/settings'
import cookie from 'cookie'
import Link from 'next/link'
import Router from 'next/router'
import { FunctionComponent, useState } from 'react'
import { ApolloConsumer } from 'react-apollo'
import { TranslateFn } from 'StatelessPage'

const useStyles = makeStyles((theme) => {
  const spacing = theme.spacing.unit

  return {
    button: {
      bottom: spacing * 5,
      position: 'fixed',
      right: spacing * 5,
      zIndex: 1202,
      [theme.breakpoints.down('sm')]: {
        bottom: 42,
        right: 'inherit'
      }
    },
    dialog: {
      height: '100%',
      minHeight: '100%'
    },
    dialogContent: {},
    title: {}
  }
})

interface IProfileMenuProps {
  anchorEl: any
  isMenuOpen: boolean
  handleMenuClose: (e?: any) => void
  t: TranslateFn
  user: any
}

const ProfileMenu: FunctionComponent<IProfileMenuProps> = (props) => {
  const [openCreateAcc, setCreateAcc] = useState(false)

  function handleCreateAccClickOpen() {
    setCreateAcc(true)
  }

  function handleCreateAccClose() {
    setCreateAcc(false)
  }

  const [openLogin, setLogin] = useState(false)

  function handleLoginClickOpen() {
    setLogin(true)
  }

  function handleLoginClose() {
    setLogin(false)
  }

  const { user, handleMenuClose, anchorEl, isMenuOpen, t } = props
  const classes = useStyles()

  const logout = (apolloClient: any) => {
    apolloClient.cache.reset().then(() => {
      // Force a reload of all the current queries now that the user isn't
      // logged in, so we don't accidentally leave any state around.
      document.cookie = cookie.serialize('token', '', {
        maxAge: -1 // Expire the cookie immediately
      })
      if ('serviceWorker' in navigator && !config.common.DEV) {
        if (
          navigator.serviceWorker.getRegistrations.length === 0 &&
          navigator.onLine
        ) {
          navigator.serviceWorker.getRegistrations().then((r) => {
            for (const reg of r) {
              reg.unregister().then(() => {
                Router.push(location.pathname)
              })
            }
          })

          navigator.serviceWorker.register('/service-worker.js')
        }
      }
      // Redirect to a more useful page when signed out
    })
  }

  return (
    <>
      <ApolloConsumer>
        {(client) => (
          <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}>
            {!user && !(user && user.me.id)
              ? [
                  <MenuItem
                    key="menu:login"
                    id="login"
                    onClick={handleLoginClickOpen}>
                    {t('menu:login')}
                  </MenuItem>,
                  <MenuItem
                    key="menu:createAcc"
                    id="create-account"
                    onClick={handleCreateAccClickOpen}>
                    {t('menu:createAcc')}
                  </MenuItem>
                ]
              : [
                  <MenuItem
                    key="menu:myAccount"
                    id="my-account"
                    onClick={handleMenuClose}>
                    <Link href="/account" passHref={true}>
                      <ListItemText primary={t('menu:myAccount')} />
                    </Link>
                  </MenuItem>,
                  <MenuItem
                    key="menu:logout"
                    id="logout"
                    onClick={(e) => {
                      logout(client)
                      handleMenuClose(e)
                    }}>
                    {t('menu:logout')}
                  </MenuItem>
                ]}
          </Menu>
        )}
      </ApolloConsumer>
      <Dialog
        // fullScreen={fullScreen}
        className={classes.dialog}
        fullWidth
        scroll="paper"
        open={openCreateAcc}
        onClose={handleCreateAccClose}
        aria-labelledby="create-account"
        aria-label="create-account-dialog">
        <DialogTitle id="create-account-dialog-titel" className={classes.title}>
          {t('menu:createAcc')}
        </DialogTitle>
        <DialogContent
          className={classes.dialogContent}
          style={{ minHeight: '100%' }}>
          {/* User Create form goes here */}
          <UserCreate closeModalFn={handleCreateAccClose} />
        </DialogContent>
        <Divider />
        <DialogActions>
          <Button onClick={handleCreateAccClose} color="secondary">
            {t('common:close')}
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        // fullScreen={fullScreen}
        className={classes.dialog}
        fullWidth
        scroll="paper"
        open={openLogin}
        onClose={handleLoginClose}
        aria-labelledby="login"
        aria-label="login-dialog">
        <DialogTitle id="login-dialog-titel" className={classes.title}>
          {t('menu:login')}
        </DialogTitle>
        <DialogContent className={classes.dialogContent}>
          {/* Login form goes here */}
          <UserLogin closeModalFn={handleLoginClose} />
        </DialogContent>
        <Divider />
        <DialogActions>
          <Button onClick={handleLoginClose} color="secondary">
            {t('common:close')}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

ProfileMenu.displayName = 'Profile Menu'

export default withNamespaces(['menu', 'common'])(ProfileMenu)
