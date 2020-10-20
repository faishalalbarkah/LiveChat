import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import "./Login.css";
import { connect } from "react-redux";
import { logina } from "../../_actions/logina";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  usernameOnChange = (e) => {
    this.setState({
      username: e.target.value,
    });
  };

  passwordOnChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  handleLogin = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    this.props.logina(formData);
  };

  hasErrorFor(field) {
    if (this.props.loginr.error) {
      return !!this.props.loginr.dataErr.message[field];
    }
  }

  // componentDidMount() {
  //   document.title = this.props.title
  // }

  render() {
    const { dataErr, error } = this.props.loginr;
    return (
      <div className="Body-Login">
       
          {/* <b>{process.env.API_URL}</b> */}
       
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-4">
              <div className="card card-signin my-5">
                <div className="card-header text-center">Sign In</div>
                <div className="card-body">
                  <img
                    className="logo"
                    src={require("../../Image/livechat1.png")}
                  />

                  <Form
                    onSubmit={this.handleLogin}
                    className="needs-validation"
                    novalidate
                  >
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label
                        className="label-text"
                        for="validationServer05"
                      >
                        Username
                      </Form.Label>
                      <input
                        type="username"
                        name="username"
                        className={
                          this.hasErrorFor("username")
                            ? "form-control is-invalid"
                            : "form-control"
                        }
                        onChange={this.usernameOnChange}
                        placeholder="Enter Username"
                      />
                      {error ? (
                        <small style={{ color: "red", fontSize: "12px" }}>
                          {dataErr.message.username}
                        </small>
                      ) : null}
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                      <Form.Label className="label-text">Password</Form.Label>
                      <Form.Control
                        type="password"
                        name="password"
                        className={
                          this.hasErrorFor("password")
                            ? "form-control is-invalid"
                            : "form-control"
                        }
                        onChange={this.passwordOnChange}
                        placeholder="Password"
                      />
                      {error ? (
                        <small style={{ color: "red", fontSize: "12px" }}>
                          {dataErr.message.password}
                        </small>
                      ) : null}
                    </Form.Group>
                    {/* <Link to="/DashboardAdmin"> */}
                    <Button variant="primary" type="submit">
                      Login
                    </Button>
                    {/* </Link> */}
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProp = (state) => {
  return {
    loginr: state.loginr,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logina: (data) => dispatch(logina(data)),
  };
};
export default connect(mapStateToProp, mapDispatchToProps)(Login);
