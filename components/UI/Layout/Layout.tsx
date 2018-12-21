import { useEffect } from 'react';

import { config } from '../../../settings';

import Grid from '@material-ui/core/Grid';
import AppBarDrawer from './Navigation/AppBarDrawer';

/* interface ILayoutProps {
     user: {
    name: string;
  };
} */

const Layout: React.FunctionComponent = (props) => {
  const { children } = props;

  useEffect(() => {
    if ('serviceWorker' in navigator && !config.common.DEV) {
      if (navigator.serviceWorker.getRegistrations.length === 0 && navigator.onLine) {
        navigator.serviceWorker.register('/service-worker.js');
      }
    }
  });

  return (
    <>
      <AppBarDrawer />
      <Grid container={true}>{children}</Grid>
    </>
  );
};

Layout.displayName = 'Layout';

export default Layout;
