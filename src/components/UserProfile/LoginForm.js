import React, { Component } from 'react'
import { login } from '../../actions/UserActions'
import { connect } from 'react-redux'
import { TextField, RaisedButton } from 'material-ui'

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: this.props.username,
      password: this.props.password
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

    this.props.login(this.state);
  }

  render() {
    let { username, password } = this.state;
    let style = {
      borderColor: '#000'
    }
    return (
      <div>
        <form onSubmit={this._submit}>
          <div className='col-xs-12 col-md-6 col-md-offset-3'>
            <TextField
            hintText='Username' floatingLabelText="Username"
            className="editInput" floatingLabelFixed={false} id='username'
            required onChange={this._onInputChange} data-statekey="username"
            underlineFocusStyle={style}
            />
            <TextField
            hintText='Password' floatingLabelText="Password" type='password'
            className="editInput" floatingLabelFixed={false} id='password'
            required onChange={this._onInputChange} data-statekey="password"
            underlineFocusStyle={style}
            />
            <div className="col-xs-12 text-center">
              <RaisedButton
              label="Submit"
              labelPosition="before"
              type='submit'
              className='editBtn'/>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  username: state.user.username,
  password: state.user.password
})

const mapDispatchToProps = (dispatch) => ({
  login: (state) => dispatch(login(state))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
