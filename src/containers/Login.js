import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import '../stylesheets/Login.css';
import '../stylesheets/Buttons.css';


import { accountLogin } from '../actions/accountActions';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: 'mirna@email.com',
      password: 'password',
      isLoading: true
    };

    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

  }

  componentDidMount() {
      this.setState({ isLoading: false });
    }

  async onSubmit(e) {
    e.preventDefault();
    await this.props.accountLogin(this.state);
    this.props.history.push('/dashboard');
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    if (this.state.isLoading) {
      return <div> loading... </div>
    }
    return (
      <div className="login">
        <div className="form">
          <form onSubmit={ this.onSubmit }>
            <input name="email" placeholder="rex@email.com" onChange={this.handleChange}  /><br/>
            <input type="password" name="password" placeholder="password" onChange={this.handleChange} /><br/>
            <button type='submit' className="button">Log In</button>
          </form>
          <br />
          <button type="button" className="button" onClick={() => this.props.history.push('/signup')}> Sign Up </button><br/>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  accountLogin
}, dispatch);

export default withRouter(connect(null, mapDispatchToProps)(Login));
