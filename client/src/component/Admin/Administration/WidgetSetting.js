import React, { Component } from "react";
import { Row, Col, Form } from "react-bootstrap";
import Header from "../common/Header";
import Menu from "../common/Menu";
import "./WidgetSetting.css";
class WidgetSetting extends Component {
  render() {
    return (
      <div className="Body-WS">
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
                  <div className="Content-Right-WS">
                    <div className="page-title-WS">
                      <p>WidgetSetting</p>
                    </div>
                    {/* <Row> */}
                      <Col md={12}>
                        <div className="Pembungkus-WS">
                          <div className="Pembungkus-Header-WS">
                            <p>WidgetSetting</p>
                            <button className="btn btn-primary btn-WS">
                              Preview
                            </button>
                          </div>
                          <div className="params-panel-WS">
                            <Form>
                              <Row>
                                <Col md={6}>
                                  <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Primary Color</Form.Label>
                                    <Form.Control type="text" />
                                  </Form.Group>

                                  <Form.Group controlId="formBasicPassword">
                                    <Form.Label>
                                      Label Color
                                    </Form.Label>
                                    <Form.Control type="text" />
                                  </Form.Group>
                                  <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Offline Alert Text</Form.Label>
                                    <Form.Control type="text" />
                                  </Form.Group>

                                  <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Widget Direction</Form.Label>
                                    <Form.Control as="select">
                                      <option>Right</option>
                                      <option>Left</option>
                                    </Form.Control>
                                  </Form.Group>
                                  <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Enable Department</Form.Label>
                                    <Form.Control as="select">
                                      <option>Yes</option>
                                      <option>No</option>
                                    </Form.Control>
                                  </Form.Group>
                                  <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Powered By Text</Form.Label>
                                    <Form.Control type="text" />
                                  </Form.Group>
                                </Col>
                                <Col md={6}>
                                  <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Second Color</Form.Label>
                                    <Form.Control type="text" />
                                  </Form.Group>

                                  <Form.Group controlId="formBasicPassword">
                                    <Form.Label>
                                      Heading Text
                                    </Form.Label>
                                    <Form.Control type="text" />
                                  </Form.Group>
                                  <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Widget Style</Form.Label>
                                    <Form.Control as="select">
                                      <option>Modern</option>
                                      <option>Classic</option>
                                    </Form.Control>
                                  </Form.Group>

                                  <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Mobile Version Breakpoint in Pixels</Form.Label>
                                    <Form.Control type="text" />
                                  </Form.Group>
                                  <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Enable Mobile Field</Form.Label>
                                    <Form.Control as="select">
                                      <option>Yes</option>
                                      <option>No</option>
                                    </Form.Control>
                                  </Form.Group>
                                </Col>
                              </Row>
                              <button className="btn btn-primary">
                                Save Settings
                              </button>
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
    );
  }
}

export default WidgetSetting;
