import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { sessionActionCreator } from '../../redux/session/actions';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(prevState => {
      const newState = { ...prevState };
      newState[name] = value;
      return newState;
    });
  };

  handleLogin = e => {
    e.preventDefault();
    const { login } = this.props;
    const { username, password } = this.state;

    const credentials = {
      username,
      password
    };

    login(credentials);
  };

  render() {
    const { errorMsg, user } = this.props.session;
    if (user) {
      return <Redirect to={'/'} />;
    } else {
      return (
        <React.Fragment>
          <form onSubmit={e => this.handleLogin(e)}>
            <h4>Log In</h4>
            <label htmlFor='username'>Username</label>
            <input
              type='text'
              name='username'
              value={this.state.username}
              onChange={this.handleChange}
            />
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              name='password'
              value={this.state.password}
              onChange={this.handleChange}
            />
            <input type='submit' />
          </form>
          {errorMsg && <p>{errorMsg}</p>}
        </React.Fragment>
      );
    }
  }
}

const mapStateToProps = ({ session }) => {
  return {
    session
  };
};

const mapDispatchToProps = dispatch => {
  return {
    ...sessionActionCreator(dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
