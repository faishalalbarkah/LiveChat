import React, { Component } from "react";
import { Row, Col, Table } from "react-bootstrap";
import "./HalChatHistory.css";
import Header from "./common/Header";
import Menu from "./common/Menu";
import { GetChatHistoryByIdA } from "../_actions/administrationA";
import { connect } from "react-redux";
import Moment from "react-moment";

class HalChatHistory extends Component {
  componentDidMount() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");
    // if (id) {
      this.props.GetChatHistoryByIdA(id);
    // }
  }
  render() {
    const { GetChatHistoryById } = this.props.administrationR;
    console.log(GetChatHistoryById)
    return (
      <>
        <div className="Body-HCH">
          <Header />

          <Row className="mr-0">
            <Menu />

            <Col md={10} className="pl-0 pr-0">
              <div className="Content-Right-HCH">
                <div className="page-title-HCH">
                  <p>Dashboard</p>
                </div>
                <Col md={12}>
                  <Row>
                    <Col md={12}>
                      <div className="panel panel-default">
                        <div className="Pembungkus-Header-HCH">
                          <p>Chat History</p>
                        </div>
                        <div className="panel-body-history">
                          <div className="chat">
                            <div className="chat_history_area_HCH">
                              <ul className="chat-history">
                                {GetChatHistoryById.map((index, key) =>
                                  index.user_id == null ? (
                                    <li className="clearfix" key={key}>
                                      <div className="message-data align-right">
                                        {/* <span className="message-data-time">
                                          2020-07-16 01:08:06
                                        </span> */}
                                        <Moment
                                          format="YYYY/MM/DD HH:mm"
                                          className="message-data-time"
                                        >
                                          {index.created_at}
                                        </Moment>
                                        &nbsp;&nbsp;
                                        <span className="message-data-name">
                                          {index.guest.name}
                                        </span>
                                        <i className="fa fa-circle me"></i>
                                      </div>
                                      <div className="message other-message float-right">
                                        {index.content}
                                      </div>
                                    </li>
                                  ) : (
                                    <li key={key}>
                                      <div className="message-data">
                                        <span className="message-data-name">
                                          <i className="fa fa-circle online"></i>
                                          {index.user.name}
                                        </span>
                                        <Moment
                                          format="YYYY/MM/DD HH:mm"
                                          className="message-data-time"
                                        >
                                          {index.created_at}
                                        </Moment>
                                        {/* <span className="message-data-time">
                                          2020-07-16 01:08:06
                                        </span> */}
                                      </div>
                                      <div className="message my-message">
                                        {index.content}
                                      </div>
                                    </li>
                                  )
                                )}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Col>
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
    administrationR: state.administrationR,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    GetChatHistoryByIdA: (id) => dispatch(GetChatHistoryByIdA(id)),
  };
};
export default connect(mapStateToProp, mapDispatchToProps)(HalChatHistory);
