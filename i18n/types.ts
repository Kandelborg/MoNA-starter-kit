import { Literal, Static, Union } from 'runtypes'

export enum LngFlags {
  'en-GB' = '🇬🇧',
  'da-DK' = '🇩🇰'
}

export enum LngFlagsText {
  'en-GB' = 'English',
  'da-DK' = 'Dansk'
}

export const Lng = Union(Literal('da-DK'), Literal('en-GB'))

export const LngShort = Union(Literal('da'), Literal('en'))

// Extract the static type
export type Lng = Static<typeof Lng> // = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday'
export type LngShort = Static<typeof LngShort>

// Extract enumerated literal values
export const lngs: Lng[] = Lng.alternatives.map((lit) => lit.value)
export const shortLngs: LngShort[] = LngShort.alternatives.map(
  (lit) => lit.value
)
