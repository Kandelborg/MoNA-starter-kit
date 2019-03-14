import { Theme } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const tagStyles = makeStyles((theme: Theme) => {
  const spacing = theme.spacing.unit

  return {
    buttonRoot: {
      marginBottom: spacing,
      marginLeft: spacing,
      marginTop: spacing
    },
    chipRoot: {
      marginBottom: spacing,
      marginLeft: spacing,
      marginTop: spacing
    }
  }
})

export default tagStyles
