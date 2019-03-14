import { translation } from './i18n.settings'

import { common } from './common.settings'

import { cloudinary } from './cloudinary.settings'

import { ui } from './ui.settings'

/**
 *  Collected settings object
 */
const config = {
  cloudinary,
  common,
  translation,
  ui
}

export { config }
