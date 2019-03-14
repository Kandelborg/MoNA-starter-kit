import { common } from './settings/common.settings'

export default function defineTitle(title: string): string {
  let definedTitle = 'Placeholder for i18n'
  const h1Elements = Boolean(
    document.getElementsByTagName('h1') &&
      document.getElementsByTagName('h1')[0]
  )

  if (title !== '' || title !== String('t&dTitle')) {
    definedTitle = title
  } else if (common.BROWSER && h1Elements) {
    definedTitle = document.getElementsByTagName('h1')[0].innerText
  } else {
    definedTitle = common.TITLE
  }

  return definedTitle
}
