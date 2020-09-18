import React from 'react';
import { Cr } from './cr-module/cr';
import { Ds } from './ds-module/ds';
import { createBrowserHistory } from 'history';
import { Router, Route, NavLink } from 'react-router-dom';

const history = createBrowserHistory();

export class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Router history={history}>
        <div>App root</div>
        <div style={{display: "flex"}}>
          <NavLink to={'/'} style={{marginRight: 24}}>Home</NavLink>
          <NavLink to={'/ds'} style={{marginRight: 24}}>Ds</NavLink>
          <NavLink to={'/cr'} style={{marginRight: 24}}>Cr</NavLink>
        </div>
        <div>
          <Route exact path="/ds" component={Ds}/>
          <Route exact path="/cr" component={Cr}/>
        </div>
      </Router>
    )
  }
}
