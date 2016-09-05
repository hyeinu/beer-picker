import React, { Component } from 'react';
import { register } from '../../actions/UserActions';
import { TextField, RaisedButton } from 'material-ui'

export default class Register extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password1: '',
      password2: '',
    }
    this._onInputChange = this._onInputChange.bind(this);
    this._submit = this._submit.bind(this);
  }

  _onInputChange(e) {
    let key = e.target.dataset.statekey;
    let value = e.target.value;

    this.setState({
      [key]: value
    });
  }

  _submit(e) {
    e.preventDefault();
    let { username, password1, password2 } = this.state;

    if(password1 !== password2) {
      this.setState({
        password1: '',
        password2: ''
      })
      return alert('Passwords do not match, try again.');
    }

    let user = {
      username,
      password: password1
    };

    register(user);
  }

  render() {
    let { username, password1, password2 } = this.state;
    let style = {
      borderColor: '#000'
    }
    return (
      <div className='col-xs-12 col-md-6 col-md-offset-3'>
        <form onSubmit={this._submit}>
          <TextField
          hintText='Username' floatingLabelText="Username"
          className="editInput" floatingLabelFixed={true} id='username'
          required onChange={this._onInputChange} data-statekey="username"
          underlineFocusStyle={style} value={username}
          />
          <TextField
          hintText='Password' floatingLabelText="Password" type='password'
          className="editInput" floatingLabelFixed={true} id='password1'
          required onChange={this._onInputChange} data-statekey="password1"
          underlineFocusStyle={style} value={password1}
          />
          <TextField
          hintText='Password' floatingLabelText="Password (again)" type='password'
          className="editInput" floatingLabelFixed={true} id='password2'
          required onChange={this._onInputChange} data-statekey="password2"
          underlineFocusStyle={style} value={password2}
          />
          <div className="col-xs-12 text-center">
            <RaisedButton
            label="Submit"
            labelPosition="before"
            type='submit'
            className='editBtn'/>
          </div>
        </form>
      </div>
    )
  }
}
