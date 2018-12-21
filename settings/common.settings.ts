const PORT = process.env.PORT || 3333;

import { DOMAIN } from './jsSettings';
/* const DOMAIN = 'https://kandelborg.dk/'; */
const API_DOMAIN = 'https://api.website.com/';
const TITLE = 'Kandelborg starter kit';

const DEV = process.env.NODE_ENV !== 'production';

const NODE =
  typeof 'process' !== 'undefined' &&
  process &&
  process.versions &&
  Boolean(process.versions.node);

const BROWSER = typeof window !== undefined;

const common = {
  DEV,
  NODE,
  BROWSER,
  DOMAIN,
  API_DOMAIN,
  TITLE,
  PORT,
};

export { common };
