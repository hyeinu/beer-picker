import React, { Component } from 'react'
import { browserHistory, Link } from 'react-router'
import { AppBar, Tabs, Tab } from 'material-ui'

import { logout } from '../actions/UserActions';

import { connect } from 'react-redux';

class Appbar extends Component {
  constructor(props) {
    super(props);

    this._logout = this._logout.bind(this);
    this.goToUrl = this.goToUrl.bind(this);
  }

  goToUrl(url) {
    browserHistory.push(url);
  }

  _logout() {
    this.props.logout()
  }

  render() {
    let tabs;
    if (!this.props.username) {
      tabs = [<Tab key={Math.random()} label="Home" onClick={this.goToUrl.bind(null, '/')}/>,
      <Tab key={Math.random()} label="Login" onClick={this.goToUrl.bind(null, '/login')}/>,
      <Tab key={Math.random()} label="Register" onClick={this.goToUrl.bind(null, '/register')}/>];
    } else {
      tabs = [<Tab key={Math.random()} label="Home" onClick={this.goToUrl.bind(null, '/')}/>,
      <Tab key={Math.random()} label="Profile" onClick={this.goToUrl.bind(null, '/profile')}/>,
      <Tab key={Math.random()} label="Reviews" onClick={this.goToUrl.bind(null, '/reviews')}/>,
      <Tab key={Math.random()} label="Logout" onClick={this._logout}/>];
    }
    return (
      <AppBar className='AppBar' title="BeerTopia" showMenuIconButton={false} className='AppBar'>
        <Tabs>
          {tabs}
        </Tabs>
      </AppBar>
    )
  }
}

const mapStateToProps = (state) => ({
  username: state.user.username
})

const mapDispatchToProps = (dispatch) => ({
  logout: (state) => dispatch(logout(state))
})

export default connect(mapStateToProps, mapDispatchToProps)(Appbar)
