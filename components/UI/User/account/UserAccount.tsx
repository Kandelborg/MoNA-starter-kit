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
  user: { id, email, name, role, profile }
}) => {
  const { bio, avatar } = profile!

  let imageSrc = ''
  let imagePublicId = ''

  if (avatar) {
    imageSrc = avatar.src ? avatar.src : 'placeholder'
    imagePublicId = avatar.publicId ? avatar.publicId : 'publicId placeholder'
  }

  const classes = useStyles()

  return (
    <Paper id={id} className={classes.root} elevation={4}>
      <Typography>
        {name} - {role}
      </Typography>
      <Typography>{email}</Typography>
      <img src={imageSrc} id={imagePublicId} alt={`${name} avatar`} />
      <Typography>{bio}</Typography>
    </Paper>
  )
}

UserAccount.displayName = 'Default User Account'

export default UserAccount
