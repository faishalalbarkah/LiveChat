import React, { Component } from "react";
import "./Deposit.css";
import { Row, Col, Table, Nav, Tab } from "react-bootstrap";
import Menu from "../../common/Menu";
import Header from "../../common/Header";
import New from "./New";
import Approved from "./Approved";
import Rejected from "./Rejected";

class Deposit extends Component {
  componentDidMount() {
    document.title = "Deposit"
  }
  render() {
    return (
      <div className="Body-Deposit">
        <Header />
        <Row className="mr-0">
          <Menu />

          <Col md={10} className="pl-0 pr-0">
            <div className="Content-Right-Deposit">
              <div className="page-title-Deposit">
                <p>Deposit</p>
              </div>
              <Col md={12}>
                <div className="Pembungkus-Deposit">
                  <div className="Pembungkus-Header-Deposit">
                    <p>Deposit</p>
                  </div>

                  <Tab.Container defaultActiveKey="one">
                    <Nav variant="tabs" className="Tabss1">
                      <Nav.Item className="col-4">
                        <Nav.Link
                          eventKey="one"
                          className="adjustment-height-Deposit style-font-registrasi text-center"
                        >
                          New
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item className="col-4">
                        <Nav.Link
                          eventKey="two"
                          className="adjustment-height-Deposit style-font-registrasi text-center"
                        >
                          Approved
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item className="col-4">
                        <Nav.Link
                          eventKey="three"
                          className="adjustment-height-Deposit style-font-registrasi text-center"
                        >
                          Rejected
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>

                    <Tab.Content>
                      <Tab.Pane eventKey="one">
                        <New />
                      </Tab.Pane>
                      <Tab.Pane eventKey="two">
                        <Approved />
                      </Tab.Pane>
                      <Tab.Pane eventKey="three">
                        <Rejected />
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              </Col>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Deposit;
