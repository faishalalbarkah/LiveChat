import React, { Component } from "react";
import { Col, Row, Form, Button } from "react-bootstrap";
import "./ChangePassword.css";
import Header from "../common/Header";
import Menu from "../common/Menu";
import { connect } from "react-redux";
import { changepasswordA } from "../../_actions/profilea";

class ChangePassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password_old: "",
      password_new: "",
      password_confirm: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.append("_method", "PUT");
    this.props.changepasswordA(formData, this.props.getprofile);
  };

  hasErrorFor(field) {
    if (this.props.profiler.error) {
      return !!this.props.profiler.dataErr.data[field];
    }
  }

  componentDidMount() {
    document.title = "ChangePassword"
  }
  render() {
    const { error, dataErr } = this.props.profiler;
    return (
      <>
        <div className="Body-CP">
          <Header />
          <Row className="mr-0">
            <Menu />

            <Col md={10} className="pl-0 pr-0">
              <div className="Content-Right-CP">
                <div className="page-title-CP">
                  <p>Change Password</p>
                </div>
                {/* <Row> */}
                <Col md={12}>
                  <div className="Pembungkus-CP">
                    <div className="Pembungkus-Header-CP">
                      <p>Change Password</p>
                    </div>
                    <div className="Panel-body-UP">
                      <Col md={8}>
                        <div className="Form-CP">
                          <Form onSubmit={this.handleSubmit}>
                            <Row>
                              <Form.Group
                                controlId="formBasicName"
                                className="col-sm-12"
                              >
                                <label>
                                  <span>Old Password</span>
                                </label>
                                <input
                                  type="password"
                                  name="password_old"
                                  className={
                                    this.hasErrorFor("password_old")
                                      ? "form-control is-invalid"
                                      : "form-control"
                                  }
                                />
                                {error ? (
                                  <small
                                    style={{ color: "red", fontSize: "12px" }}
                                  >
                                    {dataErr.data.password_old}
                                  </small>
                                ) : null}
                              </Form.Group>
                            </Row>
                            <Row>
                              <Form.Group
                                controlId="formBasicEmail"
                                className="col-sm-12"
                              >
                                <label>
                                  <span>New Password</span>
                                </label>
                                <input
                                  type="password"
                                  name="password_new"
                                  className={
                                    this.hasErrorFor("password_new")
                                      ? "form-control is-invalid"
                                      : "form-control"
                                  }
                                />
                                {error ? (
                                  <small
                                    style={{ color: "red", fontSize: "12px" }}
                                  >
                                    {dataErr.data.password_new}
                                  </small>
                                ) : null}
                              </Form.Group>
                            </Row>
                            <Row>
                              <Form.Group
                                controlId="formBasicEmail"
                                className="col-sm-12"
                              >
                                <label>
                                  <span>Confirm Password</span>
                                </label>
                                <input
                                  type="password"
                                  name="password_confirm"
                                  className={
                                    this.hasErrorFor("password_confirm")
                                      ? "form-control is-invalid"
                                      : "form-control"
                                  }
                                />
                                {error ? (
                                  <small
                                    style={{ color: "red", fontSize: "12px" }}
                                  >
                                    {dataErr.data.password_confirm}
                                  </small>
                                ) : null}
                              </Form.Group>
                            </Row>
                            <Row>
                              <Button
                                id="btn-CP"
                                variant="primary"
                                type="submit"
                              >
                                Change Password
                              </Button>
                            </Row>
                          </Form>
                        </div>
                      </Col>
                    </div>
                  </div>
                </Col>
              </div>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

const mapStateToProp = (state) => {
  return {
    profiler: state.profiler,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changepasswordA: (data) => dispatch(changepasswordA(data)),
  };
};

export default connect(mapStateToProp, mapDispatchToProps)(ChangePassword);
