import React, { Component } from 'react';
import {
  Form , Icon, Input, Button, Alert
} from 'antd';
import { withRouter } from 'react-router-dom';
import RegisterModal from './RegisterModal';
import ForgotModal from './ForgotModal';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from '../../actions/authActions';
import { clearErrors } from '../../actions/errorActions';

export class Login extends Component {
  state = {
    registerVisible: false,
    forgotVisible: false,
    registerSuccessful: false,
    email: '',
    password: '',
    msg: null
  }

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    login: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired
  }

  componentDidUpdate(prevProps) {
    const { error } = this.props;
    if(error !== prevProps.error) {
      // Check for login error
      if(error.id === 'LOGIN_FAIL') {
        this.setState({ msg: error.msg.msg });
      } else {
        this.setState({ msg: null });
      }
    }
  }

  handleLogin = async(e) => {
    e.preventDefault();

    const { email, password } = this.state;
    const { isAuthenticated, error } = this.props;

    const user = {
      email,
      password
    }

    // Attemp to login
    await this.props.login(user);

    console.log(this.props)
    if (Object.keys(error.msg).length == 0) { this.props.history.push('/Home') }
  }

  handleRegister = e => {
    this.setState({
      registerVisible: true
    })
  }

  handleRegisterOk = async e => {
    e.preventDefault();

    const { name, email, password } = this.state;
    const { isAuthenticated } = this.props;

    // Create user object
    const newUser = {
      name,
      email,
      password
    }

    await this.props.register(newUser);
    if (isAuthenticated) { this.props.history.push('/Home') }
  }

  handleRegisterCancel = e  => {
    this.setState({
      registerVisible: false
    })
  }

  registerSuccessful = e => {
    this.setState({
      registerSuccessful: true
    })
  }

  handleForgot = e => {
    this.setState({
      forgotVisible: true
    })
  }

  handleForgotOk = e => {
    // handle Forgot Password here - TBI

    this.setState({
      forgotVisible: false
    })
  }

  handleForgotCancel = e => {
    this.setState({
      forgotVisible: false
    })
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  };

  render() {
    // const { getFieldDecorator } = this.props.form;
    return (
      <div className="container">
        <RegisterModal
          visible={this.state.registerVisible}
          onCancel={this.handleRegisterCancel}
          onOk={this.handleForgotOk}
          registerSuccessful={this.registerSuccessful}
        />
        <ForgotModal
          visible={this.state.forgotVisible}
          onCancel={this.handleForgotCancel}
        />
        <div className="auth-left"></div>
        <div className="auth-right">
          <div className="auth-headerText">
            <strong>S I M PL E</strong><span>&nbsp;&nbsp;</span><strong>C</strong>
          </div>
          <div className="auth-welcomeText">
            Welcome Back! Please login to your account
          </div>
          <Form className="login-form">
            { this.state.msg ? <Alert type="error" message={this.state.msg}/> : null }
            { this.state.registerSuccessful ? <Alert type="success" message="Registered Successfully"/> : null }
            <Form.Item label="Email">
              <Input
                prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} type="email" placeholder="Email"
                id="email"
                name="email"
                onChange={this.onChange}
                onPressEnter={this.handleLogin}
              />
            </Form.Item>
            <Form.Item label="Password">
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password"
                id="password"
                name="password"
                onChange={this.onChange}
                onPressEnter={this.handleLogin}
              />
            </Form.Item>
            <Form.Item className="button-row-container">
              <Button
                type="primary"
                style={{ fontSize: 12, backgroundColor: "#3a3b5a", width: "45%", marginRight: "5%" }}
                onClick={this.handleLogin}
              >Login</Button>
              <Button
                type="default"
                style={{ fontSize: 12, color: "#3a3b5a", width: "45%", marginLeft: "5%" }}
                onClick={this.handleRegister}
              >Sign Up</Button>
            </Form.Item>
            <Form.Item>
              <a className="login-form-forgot" onClick={this.handleForgot}>Forgot Your Password?</a>
            </Form.Item>
          </Form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error
})

export default withRouter(connect(mapStateToProps, { login, clearErrors })(Login));