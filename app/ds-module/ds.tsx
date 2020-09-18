import { dsDisplay } from '../core-module';
import { Show } from '../shared-module';
import React from 'react';

export class Ds extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Show message={dsDisplay('another test module')}/>
    )
  }
}
