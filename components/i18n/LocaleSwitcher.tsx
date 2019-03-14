import { i18n, withNamespaces } from '@i18n'
import { lngs } from '@i18n/types'
import { FormControl, MenuItem, Select, Theme } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { withRouter } from 'next/router'
import { FunctionComponent, useState } from 'react'
import Twemoji from 'react-twemoji'
import { TranslateFn } from 'StatelessPage'

const useStyles = makeStyles((theme: Theme) => ({
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 42
  },
  selectEmpty: {
    fontColor: theme.palette.type === 'light' ? '#fff' : 'inherit',
    minWidth: 42
  }
}))

interface ILocaleSwitcherProps {
  router: any
  t: TranslateFn
}

const localeSwitcher: FunctionComponent<ILocaleSwitcherProps> = (props) => {
  const [lng, setLng] = useState(i18n.language || 'da-DK')

  const handleLngChange = async (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    if ('serviceWorker' in navigator && event.target.value !== lng) {
      navigator.serviceWorker
        .getRegistrations()
        .then((registrationsArray) => {
          // Registration worked, let's continue
          setLng(event.target.value)

          if (navigator.onLine) {
            registrationsArray.forEach((registration) => {
              registration.update()
            })
          }
        })
        .catch((error) => {
          setLng(event.target.value)
          if (navigator.onLine) {
            navigator.serviceWorker.register('service-worker.js')
          }

          return error
        })
    }

    for (const lang of lngs) {
      if (event.target.value === lng) return
      if (event.target.value === lang) {
        i18n.changeLanguage(
          event.target.value,
          (err: Error) => err // console.log('Something went wrong when changing languages', err);
        )
      }
    }
  }

  const { t } = props
  const classes = useStyles()

  return (
    <FormControl className={classes.formControl}>
      <Select
        disableUnderline={true}
        value={lng}
        onChange={handleLngChange}
        className={classes.selectEmpty}
        name="language"
        displayEmpty={false}>
        <MenuItem value="da-DK">
          <Twemoji
            options={{
              className: 'twemoji',
              ext: '.svg',
              folder: 'svg'
            }}>
            🇩🇰 {t('languages:da-DK')}
          </Twemoji>
        </MenuItem>

        <MenuItem value="en-GB">
          <Twemoji
            noWrapper={false}
            options={{
              className: 'twemoji',
              ext: '.svg',
              folder: 'svg'
            }}>
            🇬🇧 {t('languages:en-GB')}
          </Twemoji>
        </MenuItem>
      </Select>
    </FormControl>
  )
}

localeSwitcher.displayName = 'LocaleSwitcher'

export default withRouter(withNamespaces(['languages'])(localeSwitcher))
