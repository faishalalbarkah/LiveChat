import React, { Component } from "react";
import {Table} from "react-bootstrap"
import ReactPaginate from "react-paginate";

class New extends Component {
  render() {
    return (
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
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <td>1</td>
            <td>04-10-1998</td>
            <td>04:50PM</td>
            <td>faishal</td>
            <td>faishal@gmail.com</td>
            <td></td>
            <td></td>
            <td colSpan={3}>
              <div className="Input-Action-Registrasi">
              <button  id="btn-view-Approved">
          Approved
        </button>
        <button  id="btn-view-Rejected">
          Rejected
        </button>
              </div>
            </td>
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

export default New