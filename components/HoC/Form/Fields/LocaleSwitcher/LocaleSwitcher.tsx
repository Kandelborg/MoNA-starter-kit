import { FunctionComponent, useState } from 'react'

import { Theme } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

import FormControl from '@material-ui/core/FormControl'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'

import { i18n, withNamespaces } from '@i18n/index'
import Twemoji from 'react-twemoji'

import { Lng } from '@i18n/types'
import { TranslateFn } from 'StatelessPage'
import { createFlagByLng } from './createFlagByLng'

const useStyles = makeStyles((theme: Theme) => ({
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 42
  },
  selectEmpty: {
    minWidth: 42
  }
}))

const FormLocaleSwitcher: FunctionComponent<{
  t: TranslateFn
  callbackFn: (lng: string) => string
  menuCloseFn?: () => any
  changeLngFn?: (language: string) => any
  currentLng?: string
}> = (props) => {
  const classes = useStyles()

  const [currentLng, changeLng] = useState(
    props.currentLng ? props.currentLng : i18n.language
  )

  let language = currentLng

  const changeLanguage = (lng: string) => {
    language = lng
  }

  const handleLngChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    language = event.target.value
    props.callbackFn(event.target.value)

    changeLng(language)
    if (props.menuCloseFn) {
      props.menuCloseFn()
    }
    if (props.changeLngFn) {
      props.changeLngFn(language)
    }
  }

  return (
    <FormControl className={classes.formControl}>
      <Select
        disableUnderline={true}
        value={currentLng}
        onChange={handleLngChange}
        className={classes.selectEmpty}
        name="language"
        displayEmpty={false}>
        {i18n.options.allLanguages.map((lng: Lng) => (
          <MenuItem
            key={lng}
            value={lng}
            onClick={() => {
              changeLanguage(lng)
            }}>
            <Twemoji
              options={{
                className: 'twemoji',
                ext: '.svg',
                folder: 'svg',
                size: 16
              }}>
              {createFlagByLng(lng)} {props.t(`languages:${lng}`)}
            </Twemoji>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

FormLocaleSwitcher.displayName = 'Form Locale Switcher'

export default withNamespaces(['languages'])(FormLocaleSwitcher)
