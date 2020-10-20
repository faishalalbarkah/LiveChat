import React, { Component } from "react";
import { Table, Modal, Row } from "react-bootstrap";
import "./Registrasi.css";
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
            <p style={{ fontSize: "20px", fontWeight: "600" }}>Data Member</p>

            <button id="btn-modal-AU" onClick={this.handleClickApproved}>
              <AiFillCloseCircle id="icon-modal-AU" /> Exit
            </button>
          </Modal.Header>
          <Modal.Body>
            <div className="Modal-Body-Approved">
              <p style={{ position: "absolute" }}>Join Date : 2020-08-24</p>
              <p style={{ textAlign: "right" }}>OP/CS:-</p>
              <table className="table table-striped">
                {/* <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                  </tr>
                </thead> */}
                <tbody>
                  <tr>
                    <th scope="row" colSpan={5}>
                      Name :
                    </th>
                    <td>isal</td>
                    <th scope="row" colSpan={5}>
                      Domain :
                    </th>
                    <td>http://541.5498.21/Registrasi</td>
                  </tr>
                  <tr>
                    <th scope="row" colSpan={5}>
                      Phone :
                    </th>
                    <td>089758469</td>
                    <th scope="row" colSpan={5}>
                      IP Address :
                    </th>
                    <td>114.115.854.21</td>
                  </tr>
                  <tr>
                    <th scope="row" colSpan={5}>
                      Other Contact :
                    </th>
                    <td>089745786</td>
                    <th scope="row" colSpan={5}>
                      Status :
                    </th>
                    <td>New - Reguler</td>
                  </tr>
                  <tr>
                    <th scope="row" colSpan={5}>
                      Email :
                    </th>
                    <td>depay@gmail.com</td>
                    <th scope="row" colSpan={5}>
                      Bank :
                    </th>
                    <td>BRI</td>
                  </tr>
                </tbody>
              </table>
              <h5 style={{ position: "absolute" }}>DATA BANK</h5>
              <h5 style={{ textAlign: "right" }}>
                ID GAME
              </h5>
              <table className="table table-striped">
                {/* <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                  </tr>
                </thead> */}
                <tbody>
                  <tr>
                    <th scope="row" colSpan={5}>
                      Bank :
                    </th>
                    <td>BRI</td>
                    <th scope="row" colSpan={5}>
                    No Rekening :
                    </th>
                    <td>15484-8794-0152</td>
                  </tr>
                  <tr>
                    <th scope="row" colSpan={5}>
                      ID Game :
                    </th>
                    <td>WMAB301</td>
                    <th scope="row" colSpan={5}>
                      Game :
                    </th>
                    <td>WM CASINO</td>
                  </tr>
                </tbody>
              </table>
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
