import LocaleSwitcher from '@components/i18n/LocaleSwitcher'
import { withNamespaces } from '@i18n'
import { Menu, MenuItem } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import AccountCircle from 'mdi-material-ui/AccountCircle'
import { FunctionComponent } from 'react'
import { TranslateFn } from 'StatelessPage'

interface IMobileMenuProps {
  mobileMoreAnchorEl: any
  isMobileMenuOpen: boolean
  t: TranslateFn
  handleMobileMenuClose: () => void
  handleProfileMenuOpen: (event: React.MouseEvent<HTMLInputElement>) => void
}

const MobileMenu: FunctionComponent<IMobileMenuProps> = (props) => {
  const {
    mobileMoreAnchorEl,
    isMobileMenuOpen,
    handleMobileMenuClose,
    handleProfileMenuOpen,
    t
  } = props

  if (!t) {
    throw Error('We need a translation function')
  }

  return (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}>
      <MenuItem>
        <LocaleSwitcher />
      </MenuItem>

      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton color="inherit">
          <AccountCircle />
        </IconButton>
        {t('menu:myAccount')}
      </MenuItem>
    </Menu>
  )
}

MobileMenu.displayName = 'Mobile Menu'

export default withNamespaces(['menu'])(MobileMenu)
