import { FunctionComponent } from 'react';

import { Theme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';

import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import Divider from '@material-ui/core/Divider';
import HomeIcon from '@material-ui/icons/Home';

import Link from 'next/link';
import MenuLink from '../../../../HoC/Link/MenuLink';

import { withNamespaces } from '../../../../../i18n';

const useStyles = makeStyles((theme: Theme) => ({
  toolbar: theme.mixins.toolbar,
}));

interface IDrawerItemsProps {
  t: (lngString: string) => string;
}

const DrawerItems: FunctionComponent<IDrawerItemsProps> = (props) => {
  const classes = useStyles({});
  const { t } = props;

  return (
    <>
      <div className={classes.toolbar} />
      <List>
        <li>
          <Link href="/" prefetch={true} passHref={true}>
            <MenuLink>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary={t('homepage')} />
            </MenuLink>
          </Link>
        </li>
        <li>
          <Link href="/projects/" prefetch={true} passHref={true}>
            <MenuLink>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary={t('projects')} />
            </MenuLink>
          </Link>
        </li>
        <li>
          <Link href="/blog/" prefetch={true} passHref={true}>
            <MenuLink>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary={t('blog')} />
            </MenuLink>
          </Link>
        </li>
        <li>
          <Link href="/entertainment/" prefetch={true} passHref={true}>
            <MenuLink>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary={t('entertainment')} />
            </MenuLink>
          </Link>
        </li>
      </List>
      <Divider />
    </>
  );
};

DrawerItems.displayName = 'Drawer Items';

export default withNamespaces(['menu'])(DrawerItems);
