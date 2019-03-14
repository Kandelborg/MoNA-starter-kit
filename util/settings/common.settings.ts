// @ts-ignore
import { DOMAIN } from './jsSettings'

const PORT = process.env.PORT || 3333

const TITLE = 'MoNA Starter Kit'

const DEV = process.env.NODE_ENV !== 'production'

const API_DOMAIN = 'https://api.example.com'
const API_TOKEN = ''

const NODE =
  typeof 'process' !== 'undefined' &&
  process &&
  process.versions &&
  Boolean(process.versions.node)

const BROWSER = typeof window !== 'undefined'

const common = {
  API_DOMAIN,
  API_TOKEN,
  BROWSER,
  DEV,
  DOMAIN,
  NODE,
  PORT,
  TITLE
}

export { common }
