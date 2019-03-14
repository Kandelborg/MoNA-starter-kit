import { Record, Static, String } from 'runtypes'
import { config } from './settings'

/*
 * This typescript part can be a little daunting.. (I'm still learning you know)
 * Basically, we want to create a type with LngObj.
 * That type needs to have LngObj nested as either:
 *
 * - { create: {language: LngObj } }
 *
 * OR
 *
 * - { language: LngObj }
 */

const allLanguages = config.translation.allLanguages

/**
 * Object containing country & locale strings
 * @class LngObject
 * @type {Object}
 * @property {string} country - the country code
 * @property {string} locale - the locale code
 */
const LngObj = Record({
  country: String,
  locale: String
})

/**
 * Object containing country & locale strings
 * @class LngCreateObject
 * @type {Object}
 * @property {{ create: LngObject}} LngCreateObject - the lng object
 */
const CreateLanguage = Record({
  create: LngObj
})

const CreateLanguageWithCreate = Record({
  language: CreateLanguage
})

const CreateLanguageWithoutCreate = Record({
  language: LngObj
})

/* Declare Static types with wonderful runtypes */
declare type CreateLanguage = Static<typeof CreateLanguage>
declare type CreateLanguageWithoutCreate = Static<
  typeof CreateLanguageWithoutCreate
>
declare type CreateLanguageWithCreate = Static<typeof CreateLanguageWithCreate>

/**
 * @param {object} obj - Any object
 * Takes `obj` & creates a new array with `obj` mashed with a new `language` object, for each language
 *
 * The `language` object is derived from i18n types.
 *
 * This is very useful when creating initial values 🤩
 *
 * @returns {Array<obj & LngObject>} - Array of provided object for each language provided in i18n config
 */
function createObjectsWithLng<T extends object>(
  obj: T
): Array<T & CreateLanguageWithoutCreate> {
  const arr: Array<T & CreateLanguageWithoutCreate> = []

  // tslint:disable-next-line: prefer-for-of
  for (let i = 0; i < allLanguages.length; i += 1) {
    arr.push({
      language: {
        country: allLanguages[i],
        // locale is not used right now, can be safely removed
        locale: ''
      },
      ...obj
    })
  }

  return arr
}

/**
 * @param {object} obj - Any object
 * Takes `obj` & creates a new array with `obj` mashed with a new `language`
 * object (each containing a `create` object) for each `language`
 *
 *  The `language` object is derived from i18n types.
 *
 * This is very useful when mutating data (Apollo is in mind) 🤩
 *
 * @returns {Array<obj & LngCreateObject>} - Array of provided object inside a create object for each language provided in i18n config
 */
function createObjectsWithCreateLng<T extends object>(
  obj: T
): Array<T & CreateLanguageWithCreate> {
  const arr: Array<T & CreateLanguageWithCreate> = []

  // tslint:disable-next-line: prefer-for-of
  for (let i = 0; i < allLanguages.length; i += 1) {
    arr.push({
      language: {
        create: {
          country: allLanguages[i],
          // locale is not used right now, can be safely removed
          locale: ''
        }
      },
      ...obj
    })
  }

  return arr
}

export { createObjectsWithLng, createObjectsWithCreateLng }
