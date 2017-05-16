import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet'
import actions from 'actions';
import classnames from 'classnames'

class Login extends React.PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }

    this.onChangeInput = this.onChangeInput.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state; 
    this.props.loginIn([ email, password])
  }

  onChangeInput(e) {
    const name = e.target.name
    const value = e.target.value
    this.setState({
      [name]: value
    })
  }

  render() {
    const { isLoggingIn } = this.props;
    const btnCls =  classnames("button", "is-medium", isLoggingIn && "is-loading")

    return (
      <section className="hero is-light is-fullheight">
        <Helmet title="Login" meta={[{
              name: "description",
              content: "Login page of Chankseam's site"
            }
        ]}/>
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-primary">
              Login
            </h1>
            <form onSubmit={this.onSubmit}>
              <div className="field">
                <p className="control has-icons-left">
                  <input className="input is-large" name="email" type="email" placeholder="Email" onChange={this.onChangeInput} />
                  <span className="icon is-small is-left">
                    <i className="fa fa-envelope"></i>
                  </span>
                </p>
              </div>
              <div className="field">
                <p className="control has-icons-left">
                  <input className="input is-large" name="password" type="password" placeholder="Password" onChange={this.onChangeInput} />
                  <span className="icon is-small is-left">
                    <i className="fa fa-lock"></i>
                  </span>
                </p>
              </div>
              <div className="field">
                <p className="control">
                  <button className={btnCls} type="submit">
                    Go
                  </button>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default connect(null, actions)(Login);