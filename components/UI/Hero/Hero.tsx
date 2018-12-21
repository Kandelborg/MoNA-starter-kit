import * as React from 'react';

export interface IHeroProps {
  prop: string;
}

export interface IHeroState {
  state: string;
}

export default class Hero extends React.Component<IHeroProps, IHeroState> {
  constructor(props: IHeroProps) {
    super(props);
    this.state = {
      state: 'string',
    };
  }

  public render() {
    const {
      /* prop */
    } = this.props;
    const {
      /*  state */
    } = this.state;

    return <></>;
  }
}
