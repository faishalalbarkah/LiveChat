import React, { Component } from "react";
import Header from "../common/Header";
import Menu from "../common/Menu";
import "./AddNew.css";
import { Col, Row, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { createusera } from "../../_actions/usera";
class AddNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      name: "",
      email: "",
      password: "",
      password_confirm: "",
      status: "",
      user_role: "",
      department: "",
    };
  }

  handleChangeInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleOnSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    this.props.createusera(formData);
    this.setState({
      redirect: true,
    });
    e.target.reset();
  };

  hasErrorFor(field) {
    if( this.props.userr.error){
      return !!this.props.userr.dataErr.data[field];
    }
  }
  componentDidMount() {
    document.title = "AddUser"
  }
  render() {
    const { isAddUser, error, dataErr } = this.props.userr;
    return (
      <>
        <div className="Body-AN">
          {/* <div>
            <Row md={12}>
              <Col> */}
          <Header />
          {/* </Col>
            </Row>
          </div> */}
          {/* <Row>
            <Col md={12}>
              <div className="Content-Area"> */}
          <Row className="mr-0">
            <Menu />

            <Col md={10} className="pl-0 pr-0">
              <div className="Content-Right-AN">
                <div className="page-title-AN">
                  <p>Add New</p>
                </div>
                {/* <Row> */}
                <Col md={12}>
                  <div className="Pembungkus-AN">
                    <div className="Pembungkus-Header-AN">
                      <p>Add New</p>
                    </div>
                    <div className="Panel-body-AN">
                      <Form onSubmit={this.handleOnSubmit}>
                        <Row>
                          <Col md={10}>
                            <Form.Group>
                              <Form.Label>Name</Form.Label>

                              <input
                                className={
                                  this.hasErrorFor("name")
                                    ? "form-control is-invalid"
                                    : "form-control"
                                }
                                type="text"
                                name="name"
                                onChange={this.handleChangeInput}
                              />
                              {error ? (
                                <small
                                  style={{ color: "red", fontSize: "12px" }}
                                >
                                   {dataErr.data.name}
                                </small>
                              ) : null}
                            </Form.Group>
                            <Form.Group>
                              <Form.Label>Email </Form.Label>

                              <input
                                className={
                                  this.hasErrorFor("email")
                                    ? "form-control is-invalid"
                                    : "form-control"
                                }
                                type="email"
                                name="email"
                                onChange={this.handleChangeInput}
                              />
                              {error ? (
                                <small
                                  style={{ color: "red", fontSize: "12px" }}
                                >
                                 {dataErr.data.email}
                                </small>
                              ) : null}
                            </Form.Group>
                            <Form.Group>
                              <Form.Label>Password</Form.Label>

                              <input
                                className={
                                  this.hasErrorFor("password")
                                    ? "form-control is-invalid"
                                    : "form-control"
                                }
                                type="password"
                                name="password"
                                onChange={this.handleChangeInput}
                              />
                              {error ? (
                                <small
                                  style={{ color: "red", fontSize: "12px" }}
                                >
                                  {dataErr.data.password}
                                </small>
                              ) : null}
                            </Form.Group>
                            <Form.Group>
                              <Form.Label>Confirm Password</Form.Label>

                              <input
                                className={
                                  this.hasErrorFor("password_confirm")
                                    ? "form-control is-invalid"
                                    : "form-control"
                                }
                                type="password"
                                name="password_confirm"
                                onChange={this.handleChangeInput}
                              />
                              {error ? (
                                <small
                                  style={{ color: "red", fontSize: "12px" }}
                                >
                                  {dataErr.data.password}
                                </small>
                              ) : null}
                            </Form.Group>
                            <Form.Group>
                              <Form.Label>Status User</Form.Label>

                              <select
                                name="status"
                                onChange={this.handleChangeInput}
                                className={
                                  this.hasErrorFor("status")
                                    ? "form-control is-invalid"
                                    : "form-control"
                                }
                              >
                                <option value="">Masukan Status</option>
                                <option value="1">Active</option>
                                <option value="2">InActive</option>
                              </select>
                              {error ? (
                                <small
                                  style={{ color: "red", fontSize: "12px" }}
                                >
                                  {dataErr.data.status}
                                </small>
                              ) : null}
                            </Form.Group>
                            <Form.Group>
                              <Form.Label>User Type</Form.Label>

                              <select
                                name="user_role"
                                onChange={this.handleChangeInput}
                                className={
                                  this.hasErrorFor("user_role")
                                    ? "form-control is-invalid"
                                    : "form-control"
                                }
                              >
                                <option value="">Choose</option>
                                <option value="1">Admin</option>
                                <option value="2">Operator</option>
                              </select>
                              {error ? (
                                <small
                                  style={{ color: "red", fontSize: "12px" }}
                                >
                                  {dataErr.data.user_role}
                                </small>
                              ) : null}
                            </Form.Group>
                            <Form.Group>
                              <Form.Label>Department</Form.Label>

                              <select
                                className={
                                  this.hasErrorFor("department")
                                    ? "form-control is-invalid"
                                    : "form-control"
                                }
                                name="department"
                                onChange={this.handleChangeInput}
                              >
                                <option value="">Masukan Department</option>
                                <option value="1">HRD</option>
                                <option value="3">IT</option>
                                <option value="4">General</option>
                                <option value="5">Finance</option>
                              </select>
                              {error ? (
                                <small
                                  style={{ color: "red", fontSize: "12px" }}
                                >
                                  {dataErr.data.department}
                                </small>
                              ) : null}
                            </Form.Group>
                          </Col>
                          <div className="ForBTN-AN">
                            <button className="btn btn-danger">Reset</button>
                            <button className="btn btn-primary">Save</button>
                            {/* {isAddUser
                              ? (window.location.href =
                                process.env.REACT_APP_API_URL +"/AddNew")
                              : null} */}
                          </div>
                        </Row>
                      </Form>
                    </div>
                  </div>
                </Col>
                {/* </Row> */}
              </div>
            </Col>
          </Row>
          {/* </div>
            </Col>
          </Row> */}
        </div>
      </>
    );
  }
}

const mapStateToProp = (state) => {
  return {
    userr: state.userr,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createusera: (data) => dispatch(createusera(data)),
  };
};

export default connect(mapStateToProp, mapDispatchToProps)(AddNew);
