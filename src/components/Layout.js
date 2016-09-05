import React, { Component } from 'react';
import {Link} from 'react-router'

import Appbar from './Appbar';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class Layout extends Component {
  render() {
    return (
    <MuiThemeProvider>
     <div>
      <Appbar />
      <div className="container-fluid">
        {this.props.children}
      </div>
     </div>
     </MuiThemeProvider>
    )
  }
}
