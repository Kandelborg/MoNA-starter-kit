import Paper, { PaperProps } from '@material-ui/core/Paper'
import { FunctionComponent } from 'react'

import useStyles from './Styles'

export const ContentField: FunctionComponent<PaperProps> = (props) => {
  const classes = useStyles()

  return (
    <Paper className={classes.content} elevation={4}>
      {props.children}
    </Paper>
  )
}
