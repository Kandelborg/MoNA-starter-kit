import { Theme } from '@material-ui/core/styles'
import { MuiThemeProviderProps } from '@material-ui/core/styles/MuiThemeProvider'
import { createGenerateClassName } from '@material-ui/styles'
import { GenerateClassName, SheetsRegistry } from 'jss'
import MainTheme from './themes/MainTheme'
import SecondaryTheme from './themes/SecondaryTheme'

export interface IPageContext extends MuiThemeProviderProps {
  // GenerateClassName<string> only works with import from @material-ui/styles.
  // However, there's no export of it from there, so we just pretend
  generateClassName: GenerateClassName<string>
  sheetsRegistry: SheetsRegistry
  themes: { [key: string]: Theme }
}

function createPageContext(): IPageContext {
  return {
    children: undefined,

    // The standard class name generator.
    // @ts-ignore
    generateClassName: createGenerateClassName(),
    // This is needed in order to deduplicate the injection of CSS in the page.
    sheetsManager: new Map(),
    // This is needed in order to inject the critical CSS.
    sheetsRegistry: new SheetsRegistry(),
    theme: MainTheme,
    themes: {
      MainTheme,
      SecondaryTheme
    }
  }
}

export default function getPageContext() {
  // Make sure to create a new context for every server-side request so that data
  // isn't shared between connections (which would be bad).
  // @ts-ignore
  if (!process.browser) {
    return createPageContext()
  }

  // Reuse context on the client-side.
  // @ts-ignore
  if (!global.__INIT_MATERIAL_UI__) {
    // @ts-ignore
    global.__INIT_MATERIAL_UI__ = createPageContext()
  }

  // @ts-ignore
  return global.__INIT_MATERIAL_UI__
}
