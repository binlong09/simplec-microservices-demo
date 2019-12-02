import React, { Component } from 'react';
import { Modal, Form, Input, Icon, Alert } from 'antd';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { register } from '../../actions/authActions';
import { clearErrors } from '../../actions/errorActions';
import { withRouter } from 'react-router-dom'

export class RegisterModal extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    msg: null
  }

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    register: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired
  }

  componentDidUpdate(prevProps) {
    const { error } = this.props;
    if(error !== prevProps.error) {
      // Check for register error
      if(error.id === 'REGISTER_FAIL') {
        this.setState({ msg: error.msg.msg });
      } else {
        this.setState({ msg: null });
      }
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  };

  onSubmit = async e => {
      e.preventDefault();

      const { name, email, password } = this.state;
      // const { isAuthenticated } = this.props;

      // Create user object
      const newUser = {
        name,
        email,
        password
      }

      this.props.register(newUser);
      await this.props.onCancel()
      await this.props.registerSuccessful();
      // if (isAuthenticated) { await this.props.history.push('/Home') }
    }

  render() {
    return (
      <div>
        <Modal
          title="Register a new account"
          visible={this.props.visible}
          onOk={this.onSubmit}
          onCancel={this.props.onCancel}
        >
          <Form className="login-form">
            { this.state.msg ? <Alert type="error" message={this.state.msg}/> : null }
            <Form.Item label="Name">
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} type="email" placeholder="Name"
                id="name"
                name="name"
                onChange={this.onChange}
                onPressEnter={this.props.onOk}
              />
            </Form.Item>
            <Form.Item label="Email">
              <Input
                prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} type="email" placeholder="Email"
                id="email"
                name="email"
                onChange={this.onChange}
                onPressEnter={this.props.onOk}
              />
            </Form.Item>
            <Form.Item label="Password">
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password"
                id="password"
                name="password"
                onChange={this.onChange}
                onPressEnter={this.props.onOk}
              />
            </Form.Item>
            </Form>
        </Modal>

      </div>
    )
  }
}

const mapStateToProps = state => ({
  error: state.error,
  isAuthenticated: state.auth.isAuthenticated
})

export default withRouter(connect(mapStateToProps, { register, clearErrors })(RegisterModal));