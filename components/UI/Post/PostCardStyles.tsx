import orange from '@material-ui/core/colors/orange'
import makeStyles from '@material-ui/styles/makeStyles'

const useStyles = makeStyles((theme) => {
  const spacing = theme.spacing.unit

  return {
    root: {
      width: '100%',
      ...theme.mixins.gutters()
    },
    // tslint:disable-next-line: object-literal-sort-keys
    gridRoot: {
      paddingBottom: spacing,
      paddingTop: spacing,
      width: '100%',
      ...theme.mixins.gutters()
    },
    card: {
      flexGrow: 1,
      margin: spacing,
      maxWidth: 520
    },
    media: {
      cursor: 'pointer',
      height: 0,
      paddingTop: '56.25%' // 16:9
    },
    clickable: {
      cursor: 'pointer'
    },
    actions: {
      display: 'flex'
    },
    expand: {
      marginLeft: 'auto',
      transform: 'rotate(0deg)',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest
      })
    },
    expandOpen: {
      transform: 'rotate(180deg)'
    },
    i18nIcon: {
      fontSize: 26
    },

    avatar: {
      backgroundColor: orange[500]
    }
  }
})

export default useStyles
