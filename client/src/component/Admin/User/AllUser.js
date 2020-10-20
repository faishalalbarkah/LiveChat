import React, { Component } from "react";
import {
  Row,
  Col,
  Table,
  ButtonToolbar,
} from "react-bootstrap";
import ReactPaginate from "react-paginate";
import "./AllUser.css";
import Header from "../common/Header";
import Menu from "../common/Menu";
import { connect } from "react-redux";
import { getusera } from "../../_actions/usera";
import { Redirect, Link } from "react-router-dom";
import ViewModalUser from "./ViewModalUser";
import EditModalUser from "./EditModalUser";
import DeleteModalUser from "./DeleteModalUser";

class AllUser extends Component {
  constructor() {
    super();
    this.state = {
      page: 0,
    };
    this.handlePageClick = this.handlePageClick.bind(this);
  }
  componentDidMount() {
    this.props.getusera(this.state.page);
    document.title = "ListUser"
  }

  handlePageClick(data) {
    let selected = data.selected + 1;
    this.setState({ page: selected }, () => {
      this.props.getusera(this.state.page);
    });
  }

  // handleDelete = (e) => {
  //   this.props.DashById(this.props.id);
  //   this.handleShow();
  // }
  render() {
    const { getuser } = this.props.userr;
    const access_token = localStorage.getItem("access_token");
    if (!access_token) {
      return <Redirect to="/Login" />;
    }
    return (
      <>
        <div className="Body-AU">
          <Header />
          <Row className="mr-0">
            <Menu />

            <Col md={10} className="pl-0 pr-0">
              <div className="Content-Right-AU">
                <div className="page-title-AU">
                  <p>User List</p>
                </div>
                {/* <Row> */}
                <Col md={12}>
                  <div className="Pembungkus-AU">
                    <div className="Pembungkus-Header-AU">
                      <p>User List</p>
                      <Link to="/AddNew">
                        <button className="btn btn-primary btn-AU">
                          Add New
                        </button>
                      </Link>
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
                      <Table bordered>
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>User Type</th>
                            <th>Department</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {getuser.data != null
                            ? getuser.data.map((index, key) => (
                                <tr key={key}>
                                  <td>{index.name}</td>
                                  <td>{index.email}</td>
                                  <td>{index.user_role}</td>
                                  <td>{index.department}</td>
                                  <td>
                                    <div className="Input-Action-AU">
                                      <ButtonToolbar>
                                        <EditModalUser dataUser={index} />
                                      </ButtonToolbar>
                                      <ButtonToolbar>
                                        <ViewModalUser id={index} />
                                      </ButtonToolbar>
                                      <ButtonToolbar>
                                        <DeleteModalUser dataUser={index.id} dataPage={this.state.page}/>
                                      </ButtonToolbar>
                                    </div>
                                  </td>
                                </tr>
                              ))
                            : null}
                        </tbody>
                      </Table>

                      <ReactPaginate
                        previousLabel={"previous"}
                        nextLabel={"next"}
                        breakLabel={"..."}
                        breakClassName={"break-me"}
                        pageCount={getuser.total / getuser.per_page}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={this.handlePageClick}
                        containerClassName={"pagination"}
                        subContainerClassName={"pages pagination"}
                        activeClassName={"active"}
                      />
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

const mapStateToProp = (state) => {
  return {
    userr: state.userr,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getusera: (getuser) => dispatch(getusera(getuser)),
  };
};

export default connect(mapStateToProp, mapDispatchToProps)(AllUser);
