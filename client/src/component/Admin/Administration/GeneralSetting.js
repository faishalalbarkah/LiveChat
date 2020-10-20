import React, { Component } from "react";
import { Row, Col, Tab, Nav, Form } from "react-bootstrap";
import Header from "../common/Header";
import Menu from "../common/Menu";
import "./GeneralSetting.css";
import { BsCloudUpload } from "react-icons/bs";
import Dropzone from "react-dropzone";
import { connect } from "react-redux";
import { getGSA, SettingA } from "../../_actions/administrationA";

class GeneralSetting extends Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {
    this.props.getGSA();
  }

  handleChangeInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleOnSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.append("_method", "PUT");
    this.props.SettingA(formData);
    this.setState({
      redirect: true,
    });
  };

  hasErrorFor(field) {
    if (this.props.administrationR.error) {
      return !!this.props.administrationR.dataErr.data[field];
    }
  }

  render() {
    const { getGS, error, dataErr } = this.props.administrationR;
    return (
      <div className="Body-GS">
        <Header />

        <Row className="mr-0">
          <Menu />
          <Col md={10} className="pl-0 pr-0">
            <div className="Content-Right-GS">
              <div className="page-title-GS">
                <p>GeneralSetting</p>
              </div>
              {/* <Row> */}
              <Col md={12} id="Content-Area-GS" className="pr-0">
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                  {/* <Column> */}
                  <Col id="Column-GS">
                    <Nav
                      variant="pills"
                      className="flex-row panel-heading-1-GS"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">General</Nav.Link>
                      </Nav.Item>
                      {/* <Nav.Item>
                        <Nav.Link eventKey="second">Email</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="three">Logo</Nav.Link>
                      </Nav.Item> */}
                    </Nav>
                  </Col>
                  <Col id="Column-GS">
                    <Tab.Content className="flex-row-GS" id="Panel-Body-1-GS">
                      {/* General Setting */}
                      <Tab.Pane
                        eventKey="first"
                        style={{ paddingBottom: "20px" }}
                      >
                        <div className="Pembungkus-Header-GS">
                          <p>General Settings</p>
                        </div>
                        <div className="params-panel">
                          <Form onSubmit={this.handleOnSubmit}>
                            <Row>
                              <Col md={6}>
                                <Form.Group controlId="formBasicEmail">
                                  <Form.Label>Agent Name</Form.Label>
                                  {/* <Form.Control type="text" /> */}
                                  <input
                                    type="text"
                                    className={
                                      this.hasErrorFor("company_name")
                                        ? "form-control is-invalid"
                                        : "form-control"
                                    }
                                    name="company_name"
                                    defaultValue={getGS.company_name}
                                  />
                                  {error ? (
                                    <small
                                      style={{ color: "red", fontSize: "12px" }}
                                    >
                                      {dataErr.data.company_name}
                                    </small>
                                  ) : null}
                                </Form.Group>
                                <div className="form-group">
                                  <label for="exampleFormControlFile1">
                                    Upload Profile
                                  </label>
                                  <input
                                    type="file"
                                    name="widget_image"
                                    className={
                                      this.hasErrorFor("widget_image")
                                        ? "form-control-file is-invalid"
                                        : "form-control-file"
                                    }
                                    id="exampleFormControlFile1"
                                  />
                                  {error ? (
                                    <small
                                      style={{ color: "red", fontSize: "12px" }}
                                    >
                                      {dataErr.data.widget_image}
                                    </small>
                                  ) : null}

                                  <img
                                    src={
                                      process.env.REACT_APP_API_URL +
                                      "/storage/" +
                                      getGS.widget_image
                                    }
                                    style={{ width: 100 }}
                                    className="mt-2 shadow"
                                  />
                                </div>
                                <div class="form-group">
                                  <label for="exampleFormControlInput1">
                                    Greeting
                                  </label>
                                  <textarea
                                    style={{ overflowX: "hidden" }}
                                    type="text"
                                    name="greeting"
                                    className={
                                      this.hasErrorFor("greeting")
                                        ? "form-control is-invalid"
                                        : "form-control"
                                    }
                                    defaultValue={getGS.greeting}
                                  />
                                  {error ? (
                                    <small
                                      style={{ color: "red", fontSize: "12px" }}
                                    >
                                      {dataErr.data.greeting}
                                    </small>
                                  ) : null}
                                </div>
                                {/* <Form.Group controlId="formBasicPassword">
                                  <Form.Label>
                                    Chatting Refresh Rate (Second)
                                  </Form.Label>
                                  <input type="text" className="form-control" name="offline_mode"  value={getGS.offline_mode} disabled/>
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                  <Form.Label>Message Sound</Form.Label>
                                  <Form.Control as="select">
                                    <option>Default</option>
                                    <option>Chat-Request</option>
                                  </Form.Control>
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                  <Form.Label>Allow File Sharing</Form.Label>
                                  <Form.Control as="select">
                                    <option>Yes</option>
                                    <option>No</option>
                                  </Form.Control>
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                  <Form.Label>Email</Form.Label>
                                  <Form.Control type="email" />
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                  <Form.Label>Language</Form.Label>
                                  <Form.Control as="select">
                                    <option>English</option>
                                    <option>Arabic</option>
                                    <option>Chinese</option>
                                  </Form.Control>
                                </Form.Group>
                              </Col>
                              <Col md={6}>
                                <Form.Group controlId="formBasicEmail">
                                  <Form.Label>Site Title</Form.Label>
                                  <Form.Control type="text" />
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                  <Form.Label>
                                    User Tracking Refresh Rate (Second)
                                  </Form.Label>
                                  <Form.Control type="text" />
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                  <Form.Label>
                                    Maximum Upload Size MB
                                  </Form.Label>
                                  <Form.Control type="text" />
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                  <Form.Label>File Type Supported</Form.Label>
                                  <Form.Control type="text" />
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                  <Form.Label>Time Zone</Form.Label>
                                  <Form.Control as="select">
                                    <option>English</option>
                                    <option>Arabic</option>
                                    <option>Chinese</option>
                                  </Form.Control>
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                  <Form.Label>Theme Direction</Form.Label>
                                  <Form.Control as="select">
                                    <option>RTL</option>
                                    <option>LTR</option>
                                  </Form.Control>
                                </Form.Group> */}
                              </Col>
                            </Row>
                            <button className="btn btn-primary">
                              Save Settings
                            </button>
                          </Form>
                        </div>
                      </Tab.Pane>
                      {/* End General Setting */}
                      {/* Email Setting*/}
                      <Tab.Pane
                        eventKey="second"
                        style={{ paddingBottom: "20px" }}
                      >
                        <div className="Pembungkus-Header-GS">
                          <p>Email Settings</p>
                        </div>
                        <div className="params-panel">
                          <Form>
                            <Row>
                              <Col md={6}>
                                <Form.Group controlId="formBasicEmail">
                                  <Form.Label>Mail Type</Form.Label>
                                  <Form.Control type="text" />
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                  <Form.Label>From Home</Form.Label>
                                  <Form.Control type="text" />
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                  <Form.Label>SMTP Port</Form.Label>
                                  <Form.Control type="text" disabled />
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                  <Form.Label>SMTP Password</Form.Label>
                                  <Form.Control type="text" disabled />
                                </Form.Group>
                              </Col>
                              <Col md={6}>
                                <Form.Group controlId="formBasicEmail">
                                  <Form.Label>From Email</Form.Label>
                                  <Form.Control type="text" />
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                  <Form.Label>SMTP Host</Form.Label>
                                  <Form.Control type="text" disabled />
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                  <Form.Label>SMTP Username</Form.Label>
                                  <Form.Control type="text" disabled />
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                  <Form.Label>SMTP Encryption</Form.Label>
                                  <Form.Control as="select" disabled>
                                    <option>RTL</option>
                                    <option>LTR</option>
                                  </Form.Control>
                                </Form.Group>
                              </Col>
                            </Row>
                            <button className="btn btn-primary">
                              Save Settings
                            </button>
                          </Form>
                        </div>
                      </Tab.Pane>
                      {/* End Email Setting */}
                      {/* Upload Logo */}
                      <Tab.Pane
                        eventKey="three"
                        style={{ paddingBottom: "20px" }}
                      >
                        <div className="Pembungkus-Header-GS">
                          <p>Logo Upload </p>
                        </div>
                        <div className="params-panel">
                          <p>Upload Logo</p>
                          <Form>
                            <Dropzone
                              onDrop={(acceptedFiles) =>
                                console.log(acceptedFiles)
                              }
                            >
                              {({ getRootProps, getInputProps }) => (
                                <section>
                                  <Row md={12}>
                                    <Col md={4}></Col>
                                    <div
                                      {...getRootProps()}
                                      id="Custome-File-Input"
                                    >
                                      <input {...getInputProps()} />
                                      <p id="Icon-upload">
                                        <BsCloudUpload />
                                      </p>
                                    </div>
                                  </Row>
                                </section>
                              )}
                            </Dropzone>
                            <Row md={12}>
                              <Col md={5}></Col>
                              <button className="btn btn-primary btn-upload-GS">
                                UPLOAD
                              </button>
                            </Row>
                          </Form>
                        </div>
                      </Tab.Pane>
                      {/* End Upload Logo */}
                    </Tab.Content>
                  </Col>
                  {/* </Column> */}
                </Tab.Container>
              </Col>
              {/* </Row> */}
            </div>
          </Col>
        </Row>
        {/* </div>
            </Col>
          </Row> */}
        {/* </div> */}
      </div>
    );
  }
}

const mapStateToProp = (state) => {
  return {
    administrationR: state.administrationR,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getGSA: () => dispatch(getGSA()),
    SettingA: (data) => dispatch(SettingA(data)),
  };
};

export default connect(mapStateToProp, mapDispatchToProps)(GeneralSetting);
