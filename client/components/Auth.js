import React from 'react';
import { connect } from 'react-redux';
import { refreshLogin } from '../actions/auth';

class Auth extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    let { 
      email, 
      password, 
      props: { router, dispatch, location: { pathname }}
    } = this;

    $.ajax({
      url: `/api/auth${pathname}`,
      type: 'POST',
      data: { email: email.value, password: password.value }
    }).done( user => {
      dispatch(refreshLogin(user));
      router.push('/dashboard');
    });
  }

  render() {
    let { route: { title }} = this.props;
    return (
      <div>
        <h2 className="center">{title}</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="email"
            required
            ref={ n => this.email = n }
            placeholder="email"
          />
          <input
            type="password"
            required
            ref={ n => this.password = n }
            placeholder="password"
          />
          <button className="btn">{title}</button>
        </form>
      </div>
    )
  }
}

export default connect()(Auth);
