import NextI18Next from 'next-i18next'

import { config } from '../util/settings'

const nextI18nOptions = config.translation

const nextI18n = new NextI18Next(nextI18nOptions)

const { withNamespaces, i18n, appWithTranslation } = nextI18n

export { withNamespaces, i18n, appWithTranslation }

export default nextI18n
