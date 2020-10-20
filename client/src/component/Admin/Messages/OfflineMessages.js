import React, { Component } from "react";
import "./OfflineMessages.css";
import { Col, Row, Table, ButtonToolbar } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import Header from "../common/Header";
import Menu from "../common/Menu";
import { getoffmessageA } from "../../_actions/offlinemessagesA";
import { connect } from "react-redux";
import ViewModalOM from "./ViewModalOM";
import DeleteModalOM from "./DeleteModalOM";

class OfflineMessages extends Component {

  constructor(){
  super()
  this.state = {
    page:0
  }
  this.handlePageClick = this.handlePageClick.bind(this);
}
  componentDidMount() {
    this.props.getoffmessageA(this.state.page);
  }

  componentDidUpdate(prevProps) {
    if (this.props.offlinemessagesR.success !== prevProps.offlinemessagesR.success) {
      // console.log("testdidupdate",this.props.offlinemessagesR.success)
      this.props.getoffmessageA(this.state.page);
    }
  }

  handlePageClick(data) {
    let selected = data.selected + 1;
    this.setState({ page: selected }, () => {
      this.props.getoffmessageA(this.state.page);
    });
  }

  render() {
    const { getOM } = this.props.offlinemessagesR;
    return (
      <>
        <div className="Body-OM">
          <Header />

          <Row className="mr-0">
            <Menu />

            <Col md={10} className="pl-0 pr-0">
              <div className="Content-Right-OM">
                <div className="page-title-OM">
                  <p>List Offline Message</p>
                </div>
                {/* <Row> */}
                <Col md={12}>
                  <div className="Pembungkus-OM">
                    <div className="Pembungkus-Header-OM">
                      <p>List Offline Message</p>
                      <button className="btn btn-primary btn-OM">
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
                      <div id="Search-OM">
                        Search&nbsp;&nbsp;
                        <input type="text" />
                      </div>
                    </div>
                    <div className="table-responsive">
                    <Table bordered >
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Ip Address</th>
                          <th>Url</th>
                          <th>Message</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {getOM.data
                          ? getOM.data.map((index, key) => (
                              <tr key={key}>
                                <td>{index.name}</td>
                                <td>{index.email}</td>
                                <td>{index.ip_address}</td>
                                <td>{index.url}</td>
                                <td>{index.message}</td>
                                <td>
                                  <div className="Input-Action-OM">
                                    <ButtonToolbar>
                                      <ViewModalOM dataOM = {index}/>
                                    </ButtonToolbar>
                                    <ButtonToolbar>
                                      <DeleteModalOM dataDel = {index} dataPage={this.state.page}/>
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
                        // previousClassName={"glyphicon glyphicon-menu-left"}
                        // nextClassName={"glyphicon glyphicon-menu-right"}
                        breakLabel={"..."}
                        breakClassName={"break-me"}
                        pageCount={getOM.total / getOM.per_page}
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
    offlinemessagesR: state.offlinemessagesR,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getoffmessageA: (getOM) => dispatch(getoffmessageA(getOM)),
  };
};

export default connect(mapStateToProp, mapDispatchToProps)(OfflineMessages);
