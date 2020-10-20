import React, { Component } from "react";
import Header from "../common/Header";
import Menu from "../common/Menu";
import { Col, Row, Table, Modal, Form, Button } from "react-bootstrap";
import "./CannedMessages.css";
import { AiFillCloseCircle } from "react-icons/ai";

class CannedMessages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewcm: false,
      editcm: false,
    };
  }

  handleClickViewCM = () => {
    this.setState({
      viewcm: !this.state.viewcm,
    });
  };

  handleClickEditCM = () => {
    this.setState({
      editcm: !this.state.editcm,
    });
  };

  render() {
    return (
      <>
        {/* Start View Modal */}
        <Modal show={this.state.viewcm} onHide={this.handleClickViewCM}>
          <Modal.Header>
            <p>View Canned Message</p>

            <button id="btn-modal-DL" onClick={this.handleClickViewCM}>
              <AiFillCloseCircle id="icon-modal-DL" /> Exit
            </button>
          </Modal.Header>
          <Modal.Body>
            <div className="btn-modal-body-view-DL">
              <div className="btn-modal-panel-body-view-DL">
                <table border="1">
                  <tr>
                    <td>Name</td>
                    <td>Hello</td>
                  </tr>
                  <tr>
                    <td>Message</td>
                    <td>Selamat Pagi</td>
                  </tr>
                </table>
              </div>
            </div>
          </Modal.Body>
        </Modal>
        {/* End View Modal */}

        {/* Start Edit Modal  */}
        <Modal show={this.state.editcm} onHide={this.handleClickEditCM}>
          <Modal.Header>
            <p>Update Canned Message</p>

            <button id="btn-modal-AU" onClick={this.handleClickEditCM}>
              <AiFillCloseCircle id="icon-modal-AU" /> Exit
            </button>
          </Modal.Header>
          <Modal.Body>
            <div className="btn-modal-body-edit-AU ">
              <div className="btn-modal-panel-body-edit ">
                <Form>
                  <Form.Group controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                  <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows="3" />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Update
                  </Button>
                </Form>
              </div>
            </div>
          </Modal.Body>
        </Modal>
        {/* End Edit Modal  */}
        <div className="Body-CM">
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
              <div className="Content-Right-CM">
                <div className="page-title-CM">
                  <p>List Canned Message</p>
                </div>
                {/* <Row> */}
                <Col md={12}>
                  <div className="Pembungkus-CM">
                    <div className="Pembungkus-Header-CM">
                      <p>List Canned Message</p>
                      <button className="btn btn-primary btn-CM">
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
                      <div id="Search-CM">
                        Search&nbsp;&nbsp;
                        <input type="text" />
                      </div>
                    </div>
                    <div className="table-responsive">
                    <Table bordered >
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Message</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Hello</td>
                          <td>Selamat Pagi</td>
                          <td>
                            <div className="Input-Action-CM">
                              <button
                                id="btn-edit-CM"
                                onClick={this.handleClickEditCM}
                              >
                                Edit
                              </button>
                              <button
                                id="btn-view-CM"
                                onClick={this.handleClickViewCM}
                              >
                                View
                              </button>
                              <button id="btn-delete-CM">Delete</button>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                    <div id="pagination-CM">
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
                              Next
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                    <div id="Showing">Showing 1 To 2 Of 2 Entries</div>
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

export default CannedMessages;
