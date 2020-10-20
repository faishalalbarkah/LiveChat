import React, { Component } from "react";
import "./BlacklistUrl.css";
import Header from "../common/Header";
import Menu from "../common/Menu";
import { Row, Col, Table } from "react-bootstrap";

class BlacklistUrl extends Component {
  render() {
    return (
      <div className="Body-BU">
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
                  <div className="Content-Right-BU">
                    <div className="page-title-BU">
                      <p>List Blacklist </p>
                    </div>
                    {/* <Row> */}
                      <Col md={12}>
                        <div className="Pembungkus-BU">
                          <div className="Pembungkus-Header-BU">
                            <p> List Blacklist</p>
                            <button className="btn btn-primary btn-BU">
                              Add New
                            </button>
                          </div>
                          <div className="Pembungkus-Show-Search">
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
                          </div>
                          <div className="table-responsive">
                          <Table bordered >
                            <thead>
                              <tr>
                                <th>Domain Name</th>
                                <th>URL</th>
                                <th>Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Jamal</td>
                                <td>0897.908</td>
                                <td>
                                  <div className="Input-Action-AU">
                                    <button id="btn-edit-AU">Edit</button>
                                    <button id="btn-view-AU">View</button>
                                    <button id="btn-delete-AU">Delete</button>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </Table>
                          <div id="pagination-AU">
                            <nav aria-label="Page navigation example">
                              <ul class="pagination">
                                <li class="page-item">
                                  <a class="page-link" href="#">
                                    Previous
                                  </a>
                                </li>
                                <li class="page-item">
                                  <a class="page-link" href="#">
                                    1
                                  </a>
                                </li>
                                <li class="page-item">
                                  <a class="page-link" href="#">
                                    2
                                  </a>
                                </li>
                                <li class="page-item">
                                  <a class="page-link" href="#">
                                    3
                                  </a>
                                </li>
                                <li class="page-item">
                                  <a class="page-link" href="#">
                                    Next
                                  </a>
                                </li>
                              </ul>
                            </nav>
                          </div>
                          <div id="Showing">Showing 1 To 10 Of 14 Entries</div>
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

export default BlacklistUrl;
