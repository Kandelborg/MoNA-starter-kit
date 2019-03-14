import { withNamespaces } from '@i18n'
import { Button, Dialog, DialogActions } from '@material-ui/core'
import DialogTitle from '@material-ui/core/DialogTitle'
import EditIcon from 'mdi-material-ui/Pencil'
import { FunctionComponent, ReactNode, useState } from 'react'
import { TranslateFn } from 'StatelessPage'

interface IDialogFormUpdate {
  title: string
  form: ReactNode
  t: TranslateFn
}

const DialogFormUpdate: FunctionComponent<IDialogFormUpdate> = (props) => {
  const { title, form, t } = props

  const [open, setOpen] = useState(false)

  function handleClickOpen() {
    setOpen(true)
  }

  function handleClose() {
    setOpen(false)
  }

  return (
    <>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        <EditIcon /> {t('common:edit')}
      </Button>
      <Dialog
        open={open}
        fullScreen
        scroll="body"
        onClose={handleClose}
        aria-labelledby="form-dialog-update">
        <DialogTitle id="form-dialog-title">{title}</DialogTitle>
        {form}
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            {t('common:close')}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default withNamespaces(['common'])(DialogFormUpdate)
