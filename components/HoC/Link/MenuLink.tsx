import { FunctionComponent } from 'react'

import ListItem from '@material-ui/core/ListItem'

const MenuLink: FunctionComponent = (props) => {
  return <ListItem button={true} component="a" {...props} />
}

export default MenuLink
