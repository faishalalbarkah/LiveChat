import React, { Component } from "react";
import { Table, Modal, Row, Form, Button } from "react-bootstrap";
import "./Withdraw.css";
import ReactPaginate from "react-paginate";
import { AiFillCloseCircle } from "react-icons/ai";

class Approved extends Component {
  constructor() {
    super();
    this.state = {
      modalapproved: false,
    };
  }

  handleClickApproved = () => {
    this.setState({
      modalapproved: !this.state.modalapproved,
    });
  };
  render() {
    return (
      <>
        <Modal
          show={this.state.modalapproved}
          onHide={this.handleClickApproved}
          size="lg"
        >
          <Modal.Header>
            <h5 style={{ color: "#ADADAD", position: "absolute" }}>
              ADD WITHDRAW - DENI EKO SUJARYANT (AB777A867)
            </h5>

            <button id="btn-modal-AU" onClick={this.handleClickApproved}>
              <AiFillCloseCircle id="icon-modal-AU" /> Exit
            </button>
          </Modal.Header>
          <Modal.Body>
            <div className="Modal-Body-Approved">
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Amount</Form.Label>
                  <input
                    type="text"
                    className="form-control"
                    value="Rp.200.000"
                    disabled
                  />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label>Member Bank</Form.Label>
                  <Form.Control as="select" disabled>
                    <option>-</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Reff</Form.Label>
                  <input type="text" className="form-control" disabled />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Transfer Balance</Form.Label>
                  <input type="text" className="form-control" disabled />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Note</Form.Label>
                  <input
                    type="text"
                    className="form-control"
                    value="Rp.751.000"
                    disabled
                  />
                </Form.Group>
                <Button variant="secondary" onClick={this.handleClickApproved}>
                  Close
                </Button>
              </Form>
            </div>
          </Modal.Body>
        </Modal>

        <div className="table-responsive">
          <Table bordered>
            <thead>
              <tr>
                <th>No</th>
                <th>Join Date</th>
                <th>Time</th>
                <th>Name</th>
                <th>Email</th>
                <th>Note</th>
                <th>Operator</th>
              </tr>
            </thead>
            <tbody>
              <td>1</td>
              <td>04-10-1998</td>
              <td>04:50PM</td>
              <td id="style-font-name" onClick={this.handleClickApproved}>
                depay
              </td>
              <td id="style-font-email">faishal@gmail.com</td>
              <td></td>
              <td></td>
              <td></td>
            </tbody>
          </Table>
          <ReactPaginate
            previousLabel={"previous"}
            nextLabel={"next"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            // pageCount={getuser.total / getuser.per_page}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={this.handlePageClick}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}
          />
        </div>
      </>
    );
  }
}

export default Approved;
