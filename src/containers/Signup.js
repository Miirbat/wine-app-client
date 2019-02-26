import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import '../stylesheets/Signup.css';

import { createAccount } from '../actions/accountActions';

class Signup extends Component {
  constructor() {
    super();

    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      password_confirmation: '',
      isLoading: true
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
      this.setState({ isLoading: false });
    }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  async onSubmit(e) {
    e.preventDefault();
    await this.props.createAccount(this.state);
    this.props.history.push('/dashboard');
  }

  render() {
    const { email, password, password_confirmation, first_name, last_name } = this.state;
    
    if (this.state.isLoading) {
      return <div> loading... </div>
    }
    return (
      <div className="signup">
        <div className="formWrapper">
          <h1>Sign Up</h1>
          <form className="form" onSubmit={ this.onSubmit }>
            <input name="first_name" placeholder="First Name" value={ first_name } onChange={ this.onChange }/><br/>
            <input name="last_name" placeholder="Last Name" value={ last_name } onChange={ this.onChange }/><br/>
            <input name="email" placeholder="Email" value={ email } onChange={ this.onChange }/><br/>
            <input type='password' name="password" placeholder="Password" value={ password } onChange={ this.onChange }/><br/>
            <input type='password' name="password_confirmation" placeholder="Password Confirmation" value={ password_confirmation } onChange={ this.onChange }/><br/>

            <button type="submit" className="button">Sign Up</button>
          </form>
          <br />
          <button type="button" className="button" onClick={() => this.props.history.push('/logout')}> Log In </button><br/>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  createAccount
}, dispatch);

export default withRouter(connect(null, mapDispatchToProps)(Signup));
