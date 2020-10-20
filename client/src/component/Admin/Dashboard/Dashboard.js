import React, { Component } from "react";
import { Row, Col, Nav, Dropdown, Tab } from "react-bootstrap";
import { BsCircleFill } from "react-icons/bs";
import { AiOutlineCheckCircle, AiOutlineQuestionCircle } from "react-icons/ai";
import "../DashboardAdmin.css";
import DashboardAdmin from "../DashboardAdmin";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import {getprofilea} from "../../_actions/profilea"
import { getoperatoronlineA } from "../../_actions/dashboardA";
import { getusersonlineA } from "../../_actions/dashboardA";
import { GetChatA } from "../../_actions/ChatA";
import { PostChatA } from "../../_actions/ChatA";
import { EndChatA } from "../../_actions/ChatA";
import Moment from "react-moment";
import io from "socket.io-client";
import $ from "jquery";
import ModalDashboard from "./ModalDashboard";

const socketUrl = process.env.REACT_APP_SOCKET_URL;
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      content: "",
      result: "",
    };
  }

  initSocket = (socket) => {
    var socket = io.connect(socketUrl);
    socket.on("connected", function () {
      socket.emit("Message");
    });
    socket.on(
      "New_Message",
      function () {
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get("id");
        this.props.getoperatoronlineA();
        this.props.getusersonlineA(id);
        if (this.props.ChatR.GetChat.uuid !== null) {
          this.soundaudiodash();
        }
        this.props.GetChatA(id);
        this.scrollBottom();
      }.bind(this)
    );

    // socket.on('audioAdmin', () => {
    //   const audio = document.getElementById("audio");
    //   audio.play();
    // });
  };

  soundaudiodash = () => {
    const dashaudio = document.getElementById("audiodash");
    dashaudio.play();
  };

  scrollBottom = () => {
    $(".chat-area").animate(
      { scrollTop: $(".chat-area").prop("scrollHeight") },
      1
    );
  };

  componentDidMount() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");
    this.initSocket();
    this.props.getoperatoronlineA();
    this.props.getusersonlineA();
    if (id) {
      this.props.GetChatA(id);
      this.scrollBottom();
    }
  }

  componentDidUpdate() {
    this.scrollBottom();
  }

  EndChat = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");
    if (id) {
      this.props.EndChatA(id);
      console.log(this.props.EndChatA);
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");
    if (id) {
      this.props.PostChatA(id, formData);
    }
    e.target.reset();
  };

  contentOnChange = (e) => {
    this.setState({
      content: e.target.value,
    });
  };

  handleClick = (event, id) => {
    this.props.GetChatA(id);
    this.props.getusersonlineA(id);
  };
  render() {
    const { GetOperatorOnline, GetUsersOnline } = this.props.dashboardR;
    const { GetChat } = this.props.ChatR;
    const { content } = this.state;
    const access_token = localStorage.getItem("access_token");
    if (!access_token) {
      return <Redirect to="/Login" />;
    }
    let data = GetChat.guest;
    let data_popovers = GetChat;
    let looping = GetChat.messages;
    return (
      <>
        {this.props.dataGuest}
        <audio src={require("../../Assets/point-blank.mp3")} id="audiodash" />

        <Col md={10} className="pl-0 pr-0">
          <div className="Content-Right">
            <div className="page-title">
              <p>Dashboard {this.props.profiler.getprofile.user_role}</p>
            </div>
            {/* <Row> */}
            <Col md={12}>
              <Row>
                {/* Online User */}
                <Col md={4}>
                  <div className="Panel1">
                    <Col md={12}>
                      <Tab.Container
                        id="left-tabs-example"
                        defaultActiveKey="first"
                      >
                        {/* <Column> */}
                        <Col id="Column">
                          <Nav
                            variant="pills"
                            className="flex-row panel-heading-1"
                          >
                            <Nav.Item>
                              <Nav.Link eventKey="first">Online Users</Nav.Link>
                            </Nav.Item>
                            {/* <Nav.Item>
                              <Nav.Link eventKey="second">
                                Transfer Chat Users
                              </Nav.Link>
                            </Nav.Item> */}
                          </Nav>
                        </Col>
                        <Col id="Column">
                          <Tab.Content className="flex-row" id="Panel-Body-1">
                            <Tab.Pane eventKey="first">
                              <div className="panel-body-content-1">
                                <ul
                                  className="online_user_list"
                                  id="online_operator"
                                >
                                  {GetUsersOnline.data &&
                                    GetUsersOnline.data.map((index, key) =>
                                      index.status_id == "12" ? (
                                        <li
                                          className="active_operator"
                                          key={key}
                                        >
                                          <Link
                                            to={"DashboardAdmin?id=" + index.id}
                                            onClick={(e) =>
                                              this.handleClick(e, index.id)
                                            }
                                          >
                                            <AiOutlineCheckCircle
                                              style={{ margin: "5px" }}
                                            />
                                            {index.guest.name}
                                            <span className="message_count">
                                              {index.unread_messages_count}
                                            </span>
                                          </Link>
                                          <ModalDashboard id={index} />
                                        </li>
                                      ) : (
                                        <li
                                          className="active_visitor guest_visitor"
                                          key={key}
                                        >
                                          <Link
                                            to={"DashboardAdmin?id=" + index.id}
                                            onClick={(e) =>
                                              this.handleClick(e, index.id)
                                            }
                                            data-name="admin"
                                          >
                                            <AiOutlineQuestionCircle
                                              style={{ margin: "5px" }}
                                            />
                                            {index.guest.name}
                                            <span className="message_count">
                                              {index.unread_messages_count}
                                            </span>
                                          </Link>
                                          <ModalDashboard id={index} />

                                          {/* <span  onClick={(e,index) =>
                                                this.handleModal(e, 2)
                                              }>
                                                <Link> */}
                                          {/* <ButtonToolbar>
                                              <ModalDashboard id={index} />
                                            </ButtonToolbar> */}

                                          {/* </Link>
                                          </span> */}
                                        </li>
                                      )
                                    )}
                                </ul>
                              </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                              <p>
                                What is Lorem Ipsum? Lorem Ipsum is simply dummy
                                text of the printing and typesetting industry.
                              </p>
                            </Tab.Pane>
                          </Tab.Content>
                        </Col>
                        {/* </Column> */}
                      </Tab.Container>
                    </Col>
                  </div>
                  <div className="Panel2">
                    <Col md={12}>
                      <div className="panel panel-primary dashboard-panel">
                        <div className="panel-heading">Online Operator</div>
                        <div className="panel-border-bottom"></div>
                        <div className="panel-body">
                          <ul className="online_user_list" id="online_operator">
                            {GetOperatorOnline.data
                              ? GetOperatorOnline.data.map((index, key) => (
                                  <li className="active_operator" key={key}>
                                    <a>{index.name}</a>
                                  </li>
                                ))
                              : null}
                          </ul>
                        </div>
                      </div>
                    </Col>
                  </div>
                </Col>
                {/* End Online User */}
                {/* Chat Window */}
                <Col md={8}>
                  <div className="panel panel-default">
                    <div className="panel-body default-border">
                      {/* New Message Head */}
                      <div className="chat">
                        <div className="chat-header clearfix">
                          <Row>
                            <Col md={10}>
                              <img
                                src={require("../../Image/male_guest.png")}
                              />
                              <div className="chat-about">
                                <div className="chat-with">
                                  Chat With &nbsp;
                                  <span id="guest_name">
                                    {data ? data.name : ""}
                                  </span>
                                </div>
                                <div className="chat-num-messages">
                                  Guest URL:
                                  <a
                                    href={
                                      data_popovers ? data_popovers.url : ""
                                    }
                                    id="guest_url"
                                    target="_blank"
                                  >
                                    {data_popovers ? data_popovers.url : ""}
                                  </a>
                                </div>
                              </div>
                            </Col>
                            <Col md={2}>
                              {data_popovers.id ? (
                                <Dropdown>
                                  <Dropdown.Toggle
                                    variant="primary"
                                    id="dropdown-basic"
                                  >
                                    Chat Action
                                  </Dropdown.Toggle>

                                  <Dropdown.Menu>
                                    {/* <Dropdown.Item href="#/action-1">
                                    Transfer Chat
                                  </Dropdown.Item> */}
                                    <Dropdown.Item onClick={this.EndChat}>
                                      End Chat
                                    </Dropdown.Item>
                                  </Dropdown.Menu>
                                </Dropdown>
                              ) : (
                                ""
                              )}
                            </Col>
                          </Row>
                        </div>
                        <div className="chat-area">
                          <ul className="chat-history">
                            {data &&
                              looping.map((index, key) =>
                                index.user_id == null ? (
                                  <li className="clearfix" key={key}>
                                    <div className="message-data align-right">
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
                                      <BsCircleFill
                                        style={{
                                          color: "#ff7979",
                                          margin: "2px",
                                          fontSize: "10px",
                                        }}
                                      />
                                    </div>
                                    <div className="message other-message float-right">
                                      {index.content}
                                    </div>
                                  </li>
                                ) : (
                                  <li key={key}>
                                    <div className="message-data">
                                      <BsCircleFill
                                        style={{
                                          color: "#007bff",
                                          margin: "2px",
                                          fontSize: "10px",
                                        }}
                                      />
                                      <span className="message-data-name">
                                        {index.user.name}
                                      </span>

                                      <Moment
                                        format="YYYY/MM/DD HH:mm"
                                        className="message-data-time"
                                      >
                                        {index.created_at}
                                      </Moment>
                                    </div>
                                    <div className="message my-message">
                                      {index.content}
                                    </div>
                                  </li>
                                )
                              )}
                          </ul>
                          <p
                            className="typing-status"
                            style={{ display: "none" }}
                          >
                            <b>Typing....</b>
                          </p>
                        </div>
                      </div>
                      {/* End New Message Head */}
                      {/* Chat Area */}
                      <form
                        className="message_write"
                        onSubmit={this.handleSubmit}
                      >
                        {/* <div
                          name="content"
                          onChange={this.contentOnChange}
                          type="text"
                          className="chat-input-box"
                          contentEditable="true"
                        ></div> */}
                        <textarea
                          className="chat-input-box"
                          type="text"
                          name="content"
                          contenteditable="true"
                          onChange={this.contentOnChange}
                        />
                        <Row sm={12}>
                          <Col sm={6}>
                            <div>
                              <button
                                type="submit"
                                // name="content"
                                className="btn-send"
                                value={content}
                                disabled={content.length < 1}
                              >
                                SEND
                              </button>
                              {/* <button className="btn-cm">
                                <AiOutlineMail id="Icon-Mail" />
                                &nbsp; CANNED MESSAGES
                              </button> */}
                            </div>
                          </Col>
                          {/* <Col sm={6}>
                            <div className="btn-addfile">
                              <input type="file" />
                              <p id="text-btn-upload">Add File</p>
                            </div>
                          </Col> */}
                        </Row>
                      </form>
                      {/* End Chat Area */}
                    </div>
                  </div>
                </Col>
                {/* End Chat Window */}
              </Row>
            </Col>
            {/* </Row> */}
          </div>
        </Col>
      </>
    );
  }
}

const mapStateToProp = (state) => {
  return {
    dashboardR: state.dashboardR,
    ChatR: state.ChatR,
    profiler: state.profiler
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getoperatoronlineA: (GetOperatorOnline) =>
      dispatch(getoperatoronlineA(GetOperatorOnline)),
    //Get Users
    getusersonlineA: (GetUsersOnline, id) =>
      dispatch(getusersonlineA(GetUsersOnline, id)),
    GetChatA: (id) => dispatch(GetChatA(id)),
    PostChatA: (id, data) => dispatch(PostChatA(id, data)),
    EndChatA: (id) => dispatch(EndChatA(id)),
    getprofilea: (data) => dispatch(getprofilea(data))
  };
};

export default connect(mapStateToProp, mapDispatchToProps)(Dashboard);
