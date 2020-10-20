import React, { Component } from "react";
import { Col, Row, Form, Button } from "react-bootstrap";
import "./UpdateProfile.css";
import Header from "../common/Header";
import Menu from "../common/Menu";
import { connect } from "react-redux";
import { updateprofilea } from "../../_actions/profilea";
import {getprofilea} from "../../_actions/profilea"


class UpdateProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
    };
  }

  componentDidMount(){
    this.props.getprofilea();
    document.title = "UpdateProfile"
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.append("_method", "PUT");
    this.props.updateprofilea(formData, this.props.getprofile);
  };

  hasErrorFor(field) {
    if (this.props.profiler.error) {
      return !!this.props.profiler.dataErr.data[field];
    }
  }
  render() {
    const { error, dataErr,getprofile } = this.props.profiler;
    return (
      <>
        <div className="Body-UP">
          <Header />
          <Row className="mr-0">
            <Menu />
            <Col md={10} className="pl-0 pr-0">
              <div className="Content-Right-UP">
                <div className="page-title-UP">
                  <p>Update Profile</p>
                </div>
                {/* <Row> */}
                <Col md={12}>
                  <div className="Pembungkus-UP">
                    <div className="Pembungkus-Header-UP">
                      <p>Update Profile</p>
                    </div>
                    <div className="Panel-body-UP">
                      <Col md={8}>
                        <div className="Form-UP">
                          <Form onSubmit={this.handleSubmit}>
                            <Row>
                              <Form.Group
                                controlId="formBasicName"
                                className="col-sm-12"
                              >
                                <label>
                                  <span>Name</span>
                                </label>
                                <input
                                  type="text"
                                  name="name"
                                  defaultValue={getprofile.name}
                                  className={
                                    this.hasErrorFor("name")
                                      ? "form-control is-invalid"
                                      : "form-control"
                                  }
                                />
                                {error ? (
                                  <small
                                    style={{ color: "red", fontSize: "12px" }}
                                  >
                                    {dataErr.data.name}
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
                                  <span>Email</span>
                                </label>
                                <input
                                  type="email"
                                  name="email"
                                  defaultValue={getprofile.email}
                                  className={
                                    this.hasErrorFor("email")
                                      ? "form-control is-invalid"
                                      : "form-control"
                                  }
                                />
                                {error ? (
                                  <small
                                    style={{ color: "red", fontSize: "12px" }}
                                  >
                                    {dataErr.data.email}
                                  </small>
                                ) : null}
                              </Form.Group>
                            </Row>
                            <Row>
                              <Button variant="primary" type="submit">
                                Update Profile
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
    getprofilea: data => dispatch(getprofilea(data)),
    updateprofilea: (data) => dispatch(updateprofilea( data))
  };
};

export default connect(mapStateToProp, mapDispatchToProps)(UpdateProfile);
