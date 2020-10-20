import React, { Component } from "react";
import Header from "../common/Header";
import Menu from "../common/Menu";
import { Row, Col, Table } from "react-bootstrap";
import "./LanguageList.css";

class LanguageList extends Component {
  render() {
    return (
      <div className="Body-LL">
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
            <div className="Content-Right-LL">
              <div className="page-title-LL">
                <p>Languages</p>
              </div>
              {/* <Row> */}
              <Col md={8}>
                <div className="Pembungkus-LL">
                  <div className="Pembungkus-Header-LL">
                    <p>Languages</p>
                    <button className="btn btn-primary btn-LL">Add New</button>
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
                    <div id="Search-LL">
                      Search&nbsp;&nbsp;
                      <input type="text" />
                    </div>
                  </div>
                  <Table bordered responsive>
                    <thead>
                      <tr>
                        <th>Language Name</th>
                        <th>Edit Translation</th>
                        <th>Remove</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Arabic</td>
                        <td>
                          <button id="btn-view-LL">View</button>
                        </td>
                        <td>
                          <button id="btn-delete-LL">Delete</button>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                  <div id="pagination-LL">
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

export default LanguageList;
