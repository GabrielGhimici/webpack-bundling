import React from 'react';
import { ShowProps } from './show.model';

export class Show extends React.Component<ShowProps> {
  constructor(props) {
    super(props)
  }

  render() {
    const {message} = this.props
    return (
      <div>
        {message}
      </div>
    )
  }
}
