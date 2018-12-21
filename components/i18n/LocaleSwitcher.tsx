import * as React from 'react';

import NextI18Next from '../../i18n';

import { createStyles, Theme, WithStyles, withStyles } from '@material-ui/core';

import FormControl from '@material-ui/core/FormControl';

import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import { withRouter } from 'next/router';

const { i18n, withNamespaces } = NextI18Next;

const styles = (theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing.unit,
      minWidth: 42,
    },
    selectEmpty: {
      // marginTop: theme.spacing.unit * 3,
      minWidth: 42,
    },
  });

interface ILocaleSwitcherProps extends WithStyles<typeof styles> {
  t: any;
  router: any;
}

interface ILocaleSwitcherState {
  lng: string;
}

class LocaleSwitcher extends React.PureComponent<
  ILocaleSwitcherProps,
  ILocaleSwitcherState
> {
  public static displayName = 'LocaleSwitcher';

  constructor(props: ILocaleSwitcherProps) {
    super(props);
    this.state = {
      lng: i18n.language || 'en',
    };

    this.handleLngChange = this.handleLngChange.bind(this);
  }

  public handleLngChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(event.target.value, (err: Error) => {
      if (err) {
        return err; // console.log('Something went wrong when changing languages', err);
      }
      return;
    });
    if ('serviceWorker' in navigator && event.target.value !== this.state.lng) {
      navigator.serviceWorker
        .getRegistrations()
        .then((registrationsArray) => {
          // Registration worked, let's continue
          this.setState({ lng: event.target.value });

          if (navigator.onLine) {
            registrationsArray.forEach((registration) => {
              registration.update();
            });
          }
        })
        .catch((error) => {
          this.setState({ lng: event.target.value });
          if (navigator.onLine) {
            navigator.serviceWorker.register('service-worker.js');
          }
          //  console.warn(`Registration failed with ${error}`);
          return error;
        });
    }
  };

  public render() {
    const { t, classes } = this.props;

    return (
      <>
        <FormControl className={classes.formControl}>
          <Select
            disableUnderline={true}
            value={this.state.lng}
            onChange={this.handleLngChange}
            className={classes.selectEmpty}
            name="language"
            displayEmpty={false}
          >
            <MenuItem value="da">🇩🇰 {t('languages:danish')}</MenuItem>

            <MenuItem value="en">🇬🇧 {t('languages:english')}</MenuItem>
          </Select>
        </FormControl>
      </>
    );
  }
}

export default withRouter(
  withStyles(styles)(withNamespaces(['common', 'languages'])(LocaleSwitcher)),
);
