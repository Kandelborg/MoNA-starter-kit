import { FunctionComponent, useState } from 'react'

import Menu from '@material-ui/core/Menu'
import FormLocaleSwitcher from '../../HoC/Form/Fields/LocaleSwitcher/LocaleSwitcher'

const PostCardMenu: FunctionComponent<{
  changeLocaleFn: (string: any) => Locale
  anchorEl: any
  isMenuOpen: boolean
  handleMenuClose: any
  currentLng: string
}> = ({
  anchorEl,
  changeLocaleFn,
  handleMenuClose,
  isMenuOpen,
  currentLng
}) => {
  const [lng, setLng] = useState(currentLng)

  return (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}>
      <FormLocaleSwitcher
        callbackFn={changeLocaleFn}
        changeLngFn={setLng}
        currentLng={lng}
        menuCloseFn={handleMenuClose}
      />
    </Menu>
  )
}

export default PostCardMenu
