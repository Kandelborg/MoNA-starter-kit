import { Paper, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { Me_me } from 'database-api'
import * as React from 'react'

interface IUserAccount {
  user: Me_me
}

const useStyles = makeStyles((/* theme: Theme */) => ({
  root: {
    maxWidth: 960
  }
}))

const UserAccount: React.FunctionComponent<IUserAccount> = ({
  user: { id, email, name, role, avatar = { publicId: '', src: '' } }
}) => {
  let imageSrc = ''
  let imagePublicId = ''

  if (avatar) {
    imageSrc = avatar.src
    imagePublicId = avatar.publicId
  }

  const classes = useStyles()

  return (
    <Paper id={id} className={classes.root} elevation={4}>
      <Typography>
        {name} - {role}
      </Typography>
      <Typography>{email}</Typography>
      <img src={imageSrc} id={imagePublicId} alt={`${name} avatar`} />
    </Paper>
  )
}

UserAccount.displayName = 'Default User Account'

export default UserAccount
