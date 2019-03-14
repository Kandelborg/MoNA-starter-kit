import { Lng, LngFlags, LngFlagsText } from '@i18n/types'

function createFlagByLng(lng: Lng) {
  /* If lng matches defined languages */
  if (Object.keys(LngFlags).includes(lng)) {
    /* Return unicode for the flag */
    return LngFlags[lng]
  }

  // tslint:disable-next-line: no-console
  return console.error('Language not specified in types.')
}
function createTextByLng(lng: Lng) {
  /* If lng matches defined languages */
  if (Object.keys(LngFlags).includes(lng)) {
    /* Return unicode for the flag */
    return LngFlagsText[lng]
  }

  // tslint:disable-next-line: no-console
  return console.error('Language not specified in types.')
}
export { createFlagByLng, createTextByLng as createFlagWithTextByLng }
