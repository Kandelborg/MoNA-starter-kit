import { FunctionComponent } from 'react';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import { withNamespaces } from '../../../../../i18n';

interface IProfileMenuProps {
  anchorEl: any;
  isMenuOpen: boolean;
  handleMenuClose: () => void;
}

const ProfileMenu: FunctionComponent<IProfileMenuProps> = (props) => {
  const { handleMenuClose, anchorEl, isMenuOpen } = props;
  return (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );
};

ProfileMenu.displayName = 'Profile Menu';

export default withNamespaces(['menu'])(ProfileMenu);
