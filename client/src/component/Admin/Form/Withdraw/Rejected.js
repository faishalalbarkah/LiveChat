import React, { Component } from "react";
import { Table } from "react-bootstrap";
import "./Withdraw.css";
import ReactPaginate from "react-paginate";

class Rejected extends Component {
  render() {
    return (
      <div className="table-responsive">
        <Table bordered>
          <thead>
            <tr>
              <th>No</th>
              <th>Date</th>
              <th>Time</th>
              <th>User ID</th>
              <th>Deposit</th>
              <th>Operator</th>
            </tr>
          </thead>
          <tbody>
            <td>1</td>
            <td>04-10-1998</td>
            <td>04:50PM</td>
            <td id="style-font-name">depay2345</td>
            <td>Rp.800.000</td>
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
    );
  }
}

export default Rejected;
