import React, { Component } from "react";
import Header from "../common/Header";
import Menu from "../common/Menu";
import { Col, Form, Row } from "react-bootstrap";
import "./AddNewMessages.css";

class AddNewMessages extends Component {
  render() {
    return (
      <div className="Body-ANM">
        <Header />

        <Row className="mr-0">
          <Menu />

          <Col md={10} className="pl-0 pr-0">
            <div className="Content-Right-ANM">
              <div className="page-title-ANM">
                <p>Add Canned Messages</p>
              </div>
              {/* <Row> */}
              <Col md={12}>
                <div className="Pembungkus-ANM">
                  <div className="Pembungkus-Header-ANM">
                    <p>Add Canned Messages</p>
                  </div>
                  <div className="Panel-body-ANM">
                    <form>
                      <Row>
                        <Col md={6}>
                          <Form.Group controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" />
                          </Form.Group>
                          <Form.Group controlId="formBasicEmail">
                            <Form.Label>Message </Form.Label>
                            <Form.Control as="textarea" rows="3" />
                          </Form.Group>
                          <div className="ForBTN-ANM">
                            <button className="btn btn-danger">Reset</button>
                            <button className="btn btn-primary">Save</button>
                          </div>
                        </Col>
                      </Row>
                    </form>
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

export default AddNewMessages;
