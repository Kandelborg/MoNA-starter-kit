import * as React from 'react';

import Head from 'next/head';
import { config } from '../../settings';

const { common } = config;

interface IHeadProps {
  text: string;
  description?: string;
}

export default class TitleAndDescription extends React.Component<IHeadProps> {
  /* Define default props based on IHeadProps, if they aren't given by parent component */
  public static defaultProps = {
    description: '',
    text: '',
  };

  public render() {
    /* Extract props based on IHeadProps */
    const { text, description } = this.props;

    let title = '';
    let metaDescription: string | undefined = '';

    /* If no text is provided, fallback to using the first H! */
    if (text !== '') {
      title = text;
    } else if (
      typeof window !== 'undefined' &&
      typeof document !== 'undefined' &&
      document.getElementsByTagName('h1') &&
      document.getElementsByTagName('h1')[0]
    ) {
      title = document.getElementsByTagName('h1')[0].innerText;
    } else {
      title = common.TITLE;
    }

    if (description === '') {
      if (
        typeof window !== 'undefined' &&
        typeof document !== 'undefined' &&
        document.getElementsByTagName('p') &&
        document.getElementsByTagName('p').length >= 3
      ) {
        metaDescription = `${document.getElementsByTagName('p')[0].innerText ||
          ''} ${document.getElementsByTagName('p')[1].innerText ||
          ''} ${document.getElementsByTagName('p')[2].innerText || ''}`;
      } else {
        metaDescription = '';
      }
    } else {
      metaDescription = description;
    }

    return (
      <Head>
        <title key="page-title">{title} | Mathias Kandelborg</title>
        <meta
          name="description"
          content={
            description
              ? description
              : `${decodeURI(metaDescription!.substring(0, 152))}${
                  metaDescription!.length >= 155 ? '...' : ''
                }`
          }
          key="page-description"
        />
      </Head>
    );
  }
}
