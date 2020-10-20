import React, { Component } from "react";
import "./Withdraw.css";
import { Row, Col, Table, Nav, Tab } from "react-bootstrap";
import Menu from "../../common/Menu";
import Header from "../../common/Header";
import New from "./New";
import Approved from "./Approved";
import Rejected from "./Rejected";

class Withdraw extends Component {
  componentDidMount() {
    document.title = "Withdraw"
  }
  render() {
    return (
      <div className="Body-Withdraw">
        <Header />
        <Row className="mr-0">
          <Menu />

          <Col md={10} className="pl-0 pr-0">
            <div className="Content-Right-Withdraw">
              <div className="page-title-Withdraw">
                <p>Withdraw</p>
              </div>
              <Col md={12}>
                <div className="Pembungkus-Withdraw">
                  <div className="Pembungkus-Header-Withdraw">
                    <p>Withdraw</p>
                  </div>
                  {/* <div className="Pembungkus-Show-Search">
                    <label className="label">
                      Show &nbsp;
                      <select>
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                      </select>
                      &nbsp; Entries
                    </label>
                    <div id="Search-AU">
                      Search&nbsp;&nbsp;
                      <input type="text" />
                    </div>
                  </div> */}

                  <Tab.Container defaultActiveKey="one">
                    <Nav variant="tabs" className="Tabss1">
                      <Nav.Item className="col-4">
                        <Nav.Link
                          eventKey="one"
                          className="adjustment-height-Withdraw style-font-registrasi text-center"
                        >
                          New
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item className="col-4">
                        <Nav.Link
                          eventKey="two"
                          className="adjustment-height-Withdraw style-font-registrasi text-center"
                        >
                          Approved
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item className="col-4">
                        <Nav.Link
                          eventKey="three"
                          className="adjustment-height-Withdraw style-font-registrasi text-center"
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

export default Withdraw;
