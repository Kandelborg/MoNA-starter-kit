import { MuiThemeProviderProps } from '@material-ui/core/styles/MuiThemeProvider';
import { createGenerateClassName } from '@material-ui/styles';
import { GenerateClassName, SheetsRegistry } from 'jss';
import MainTheme from './themes/MainTheme';

export interface IPageContext extends MuiThemeProviderProps {
  generateClassName: GenerateClassName<string>; // not sure what goes here
  sheetsRegistry: SheetsRegistry;
}

function createPageContext(): IPageContext {
  return {
    theme: MainTheme,
    // This is needed in order to deduplicate the injection of CSS in the page.
    sheetsManager: new Map(),
    // This is needed in order to inject the critical CSS.
    sheetsRegistry: new SheetsRegistry(),
    // The standard class name generator.
    generateClassName: createGenerateClassName(),
    children: undefined,
  };
}

export default function getPageContext() {
  // Make sure to create a new context for every server-side request so that data
  // isn't shared between connections (which would be bad).
  // @ts-ignore
  if (!process.browser) {
    return createPageContext();
  }

  // Reuse context on the client-side.
  // @ts-ignore
  if (!global.__INIT_MATERIAL_UI__) {
    // @ts-ignore

    global.__INIT_MATERIAL_UI__ = createPageContext();
  }

  // @ts-ignore
  return global.__INIT_MATERIAL_UI__;
}
