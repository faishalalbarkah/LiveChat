import React, { Component } from "react";
import { Col, Row, Table, ButtonToolbar } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import Header from "../common/Header";
import Menu from "../common/Menu";
import "./DepartmentList.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getdepartmenta } from "../../_actions/departmenta";
import { getprofilea } from "../../_actions/profilea";
import { Redirect } from "react-router-dom";
import ViewModalDepartment from "./ViewModalDepartment";
import EditModalDepartment from "./EditModalDepartment";
import DeleteModalDepartment from "./DeleteModalDepartment";

class DepartmentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
    };

    this.handlePageClick = this.handlePageClick.bind(this);
  }

  componentDidMount() {
    this.props.getdepartmenta(this.state.page);
    document.title = "DepartmentList";
  }

  handlePageClick(data) {
    let selected = data.selected + 1;
    this.setState({ page: selected }, () => {
      this.props.getdepartmenta(this.state.page);
    });
  }
  // handleDelete = (e) => {
  //   e.preventDefault();
  //   const id = this.props.id;
  // }

  // handlePageClick(data) {
  //   let selected = data.selected + 1;
  //   this.setState({ page: selected }, () => {
  //     this.props.getdepartmenta(this.state.page);
  //   });
  // }

  render() {
    const { getdepartment } = this.props.departmentr;
    console.log(getdepartment);
    const access_token = localStorage.getItem("access_token");
    if (!access_token) {
      return <Redirect to="/Login" />;
    }
    return (
      <>
        <div className="Body-DL">
          <Header />

          <Row className="mr-0">
            <Menu />

            <Col md={10} className="pl-0 pr-0">
              <div className="Content-Right-DL">
                <div className="page-title-DL">
                  <p>List Department</p>
                </div>
                {/* <Row> */}
                <Col md={12}>
                  <div className="Pembungkus-DL">
                    <div className="Pembungkus-Header-DL">
                      <p>List Department</p>
                      <Link to="/AddDepartment">
                        <button className="btn btn-primary btn-DL">
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
                      <div id="Search-DL">
                        Search&nbsp;&nbsp;
                        <input type="text" />
                      </div>
                    </div>
                    <div className="table-responsive">
                      <Table bordered responsive>
                        <thead>
                          <tr>
                            <th>Department</th>
                            <th>Description</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {getdepartment.data != null
                            ? getdepartment.data.map((index, key) => (
                                <tr key={key}>
                                  <td>{index.name}</td>
                                  <td>{index.description}</td>
                                  <td>
                                    <div className="Input-Action-DL">
                                      <ButtonToolbar>
                                        <EditModalDepartment
                                          dataDepartment={index}
                                        />
                                      </ButtonToolbar>
                                      <ButtonToolbar>
                                        <ViewModalDepartment id={index} />
                                      </ButtonToolbar>
                                      <ButtonToolbar>
                                        <DeleteModalDepartment
                                          data={index}
                                          dataPage={this.state.page}
                                        />
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
                        previousClassName={"glyphicon glyphicon-menu-left"}
                        nextClassName={"glyphicon glyphicon-menu-right"}
                        breakLabel={"..."}
                        breakClassName={"break-me"}
                        pageCount={getdepartment.total / getdepartment.per_page}
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
        </div>
      </>
    );
  }
}

const mapStateToProp = (state) => {
  return {
    departmentr: state.departmentr,
    profiler: state.profiler,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getdepartmenta: (getdepartment) => dispatch(getdepartmenta(getdepartment)),
    getprofilea: (data) => dispatch(getprofilea(data)),
  };
};

export default connect(mapStateToProp, mapDispatchToProps)(DepartmentList);
