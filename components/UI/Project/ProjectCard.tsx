import * as React from 'react';

export interface IProjectCardProps {
  props: string;
}

export interface IProjectCardState {
  state: string;
}

class ProjectCard extends React.Component<IProjectCardProps, IProjectCardState> {
  constructor(props: IProjectCardProps) {
    super(props);
    this.state = {
      state: 'string',
    };
  }

  public render() {
    const {
      /* props */
    } = this.props;
    const {
      /* state */
    } = this.state;

    return <></>;
  }
}

export default ProjectCard;
