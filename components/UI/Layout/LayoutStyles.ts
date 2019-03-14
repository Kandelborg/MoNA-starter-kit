import makeStyles from '@material-ui/styles/makeStyles'

const useStyles = makeStyles((theme) => {
  const spacing = theme.spacing.unit

  return {
    root: {
      ...theme.mixins.gutters(),
      paddingBottom: spacing * 8
    }
  }
})

export default useStyles
