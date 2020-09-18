import { crDisplay } from '../core-module';
import { Show } from '../shared-module';
import React from 'react';

export class Cr extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Show message={crDisplay('test module')}/>
    )
  }
}
