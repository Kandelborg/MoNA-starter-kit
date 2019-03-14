import makeStyles from '@material-ui/styles/makeStyles'

const useStyles = makeStyles((theme) => {
  const spacing = theme.spacing.unit

  return {
    root: {
      ...theme.mixins.gutters(),
      margin: spacing * 2,

      paddingBottom: spacing * 2,
      paddingTop: spacing * 2
    },
    // tslint:disable-next-line: object-literal-sort-keys
    content: {
      marginTop: spacing * 2,
      paddingBottom: spacing * 2,
      paddingLeft: spacing,
      paddingRight: spacing,
      paddingTop: spacing
    }
  }
})

export default useStyles
