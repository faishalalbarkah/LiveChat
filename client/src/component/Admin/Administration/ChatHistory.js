import React, { Component } from "react";
import { Row, Col, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ChatHistory.css";
import Header from "../common/Header";
import Menu from "../common/Menu";
import { GetChatHistoryA,GetChatHistoryByIdA } from "../../_actions/administrationA";
import { connect } from "react-redux";
import ReactPaginate from "react-paginate";

class ChatHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
    };
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  componentDidMount() {
    this.props.GetChatHistoryA(this.state.page);
  }

  handlePageClick(data) {
    let selected = data.selected + 1;
    this.setState({ page: selected }, () => {
      this.props.GetChatHistoryA(this.state.page);
    });
  }

  handleClick = (id) => {
    this.props.GetChatHistoryByIdA(id)
  }
  render() {
    const { GetChatHistory } = this.props.administrationR;
    // console.log(this.handleClick)
    // console.log(GetChatHistory);
    return (
      <div className="Body-CH">
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
            <div className="Content-Right-CH">
              <div className="page-title-CH">
                <p>Chat History</p>
              </div>
              {/* <Row> */}
              <Col md={12}>
                <div className="Pembungkus-AU">
                  <div className="Pembungkus-Header-AU">
                    <p>User List</p>
                    <button className="btn btn-primary btn-AU">Add New</button>
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
                    <Table bordered responsive>
                      <thead>
                        <tr>
                          <th>Guest</th>
                          <th>Email</th>
                          <th>Mobile</th>
                          <th>IP</th>
                          <th>URL</th>
                          <th>Operator</th>
                          <th>Status</th>
                          <th>View Details</th>
                          {/* <th>Delete</th> */}
                        </tr>
                      </thead>
                      <tbody>
                        {GetChatHistory.data != null
                          ? GetChatHistory.data.map((index, key) => (
                              <tr key={key}>
                                <td>{index.name}</td>
                                <td>{index.email}</td>
                                <td></td>
                                <td>{index.ip_address}</td>
                                <td>{index.url}</td>
                                <td>{index.user_role_name}</td>
                                <td>{index.status}</td>
                                <td>
                                  <Link to={"/HalChatHistory?id=" + index.id}
                                  onClick={(e) => this.handleClick(e, index.id)}>
                                    <button id="btn-view-AU">View</button>
                                  </Link>
                                </td>
                                {/* <td>
                                  <button id="btn-delete-AU">Delete</button>
                                </td> */}
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
                      pageCount={GetChatHistory.total / GetChatHistory.per_page}
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
    );
  }
}

const mapStateToProp = (state) => {
  return {
    administrationR: state.administrationR,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    GetChatHistoryA: (GetChatHistory) => dispatch(GetChatHistoryA(GetChatHistory)),
    GetChatHistoryByIdA:(id) => dispatch(GetChatHistoryByIdA(id))
  };
};

export default connect(mapStateToProp, mapDispatchToProps)(ChatHistory);
