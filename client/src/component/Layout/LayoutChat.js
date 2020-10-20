import React, { Component } from "react";
import { Row, Col, Container, Dropdown, Nav, Tab } from "react-bootstrap";
import Moment from "react-moment";
import {
  AiOutlineWechat,
  AiFillCloseCircle,
  AiFillSetting,
} from "react-icons/ai";
import { BsChatDots } from "react-icons/bs";
import { FaCheckCircle, FaPaperPlane } from "react-icons/fa";
import "./LayoutChat.css";
import { GetGuestA, PostGuestA, EndGuestA } from "../_actions/GuestA";
import {getGSA,GetImageGreetingA} from "../_actions/administrationA"
import { connect } from "react-redux";
import $ from "jquery";
import io from "socket.io-client";
import FormRegistrasi from "./Forms/FormRegistrasi";
import FormDeposit from "./Forms/FormDeposit";
import FormWithdraw from "./Forms/FormWithdraw";
// import autosize from "autosize";

const socketUrl = process.env.REACT_APP_SOCKET_URL;
class LayoutChat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
      // MessageCount:0
    };
  }

  contentOnChange = (e) => {
    this.setState({
      content: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    this.props.PostGuestA(formData);
    e.target.reset();
    // window.location.href = "http://18.139.158.80/ab/Index";
  };

  componentDidMount() {
    this.props.GetGuestA();
    this.initSocket();
    this.scrollBottom();

    $("#form-register").on("submit", function (e) {
      console.log(e.target.name);
    });

    // autosize($("textarea"));
  }

  componentDidUpdate(prevProps) {
    if (this.props.GuestR.isLogin !== prevProps.GuestR.isLogin) {
      this.props.GetGuestA();
    }
    this.scrollBottom();
    // if (localStorage.getItem("conversation_uuid") == null) {
    //   setTimeout(
    //     function () {
    //       localStorage.removeItem("conversation_uuid");
    //     }.bind(this),
    //     2000
    //   );
    // }
  }

  EndChat = (e) => {
    e.preventDefault();
    const conversation_uuid = localStorage.getItem("conversation_uuid");
    if (conversation_uuid) {
      this.props.EndGuestA(conversation_uuid).then(
        setTimeout(
          function () {
            localStorage.removeItem("conversation_uuid");
            window.location.href = process.env.REACT_APP_URL + "/Index";
          }.bind(this),
          2000
        )
      );
    }
    //  $("#btn-chat").css("display", "block");
  };

  closeChat() {
    $("#btn-chat").css("display", "block");
    $("#Body-Index").css("display", "none");
    $("#Body-Layout").css("display", "none");
  }

  // removeClick = () => {
  //   localStorage.removeItem("conversation_uuid");
  //   window.location.href = process.env.REACT_APP_URL + "/Index";
  // };

  initSocket = (socket) => {
    var socket = io.connect(socketUrl);
    socket.on("connected", function () {
      socket.emit("Message");
    });
    socket.on(
      "New_Message",
      function (MessageCount) {
        if (this.props.GuestR.ChatGuest == { success: true }) {
          this.soundaudio();
        }
        this.props.GetGuestA();
      }.bind(this)
    );
  };

  soundaudio = () => {
    const audio = document.getElementById("audio");
    audio.play();
  };

  scrollBottom = () => {
    $(".Chat-Login-Area").animate(
      { scrollTop: $(".Chat-Login-Area").prop("scrollHeight") },
      1
    );
  };

  render() {
    const { GetGuest } = this.props.GuestR;
    let data = GetGuest.guest;
    let looping = GetGuest.messages;
    const { content } = this.state;
    // const urlParams = new URLSearchParams(window.location.search);
    // const register_code = urlParams.get("register_code");
    // const deposit_code = urlParams.get("deposit_code");
    // const withdraw_code = urlParams.get("withdraw_code");
    return (
      <>
        <audio src={require("../Assets/juntos.mp3")} id="audio" />

        <div className="Body-Layout" id="Body-Layout">
          <div className="Panel-Header">
            <Container fluid>
              <Row>
                <Col className="col-8">
                  <div className="Panel-Header-Left">
                    <img
                    style={{width:40,height:40}}
                      src={
                        process.env.REACT_APP_API_URL +
                        "/storage/" +
                        this.props.administrationR.ImaGree.widget_image
                      }
                      className="img-fluid shadow rounded-circle"
                      alt="Responsive image"
                    />
                    &nbsp;&nbsp;&nbsp;
                    <p
                      style={{
                        fontSize: "20px",
                        color: "white",
                      }}
                    >
                      {/* {this.state.onlinecustomer} */}
                      {/* {data ? data.name : ""} */}
                      {this.props.administrationR.ImaGree.company_name}
                    </p>
                  </div>
                </Col>
                <Col className="col-4">
                  <div className="Panel-Header-Right-LC">
                    <Dropdown className="DropDown-Index">
                      <Dropdown.Toggle
                        variant="success"
                        id="dropdown-basic"
                        className="btn-success dropdown-toggle btn btn-success"
                      >
                        <AiFillSetting
                          className="Icon"
                          style={{
                            marginTop: "-1px",
                            float: "right",
                            marginRight: "20px",
                          }}
                        />
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item onClick={this.EndChat}>
                          End Chat
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>

                    <AiFillCloseCircle
                      className="Icon-Close"
                      onClick={this.closeChat}
                    />
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          <div id="Garis" />

          <div className="Pembungkus-Tab">
            {/* <div className=""> */}
            <Tab.Container defaultActiveKey="zero">
              <Nav variant="pills" className="flex-row Header-Menu-Btn">
                <Nav.Item className="col-3 pl-0 pr-0">
                  <Nav.Link
                    eventKey="zero"
                    className="adjustment-height style-font text-center"
                  >
                    <BsChatDots style={{ fontSize: 25 }} />
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="col-3 pl-0 pr-0">
                  <Nav.Link
                    eventKey="one"
                    className="adjustment-height style-font text-center"
                  >
                    Registrasi
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="col-3 pl-0 pr-0">
                  <Nav.Link
                    eventKey="two"
                    className="adjustment-height style-font text-center"
                  >
                    Deposit
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="col-3 pl-0 pr-0">
                  <Nav.Link
                    eventKey="three"
                    className="adjustment-height style-font text-center"
                  >
                    Withdraw
                  </Nav.Link>
                </Nav.Item>
              </Nav>

              {/* </div> */}
              <Tab.Content className=" flex-row">
                <Tab.Pane eventKey="zero">
                  <div className="Panel-Body">
                    <div className="Chat-Login-Area">
                      <ul className="chat-history">
                        {data &&
                          looping.map((index, key) =>
                            index.guest_id !== null ? (
                              <li key={key}>
                                <div className="Message-data">
                                  <span>{index.guest.name}</span>
                                  <i className="online">
                                    <FaCheckCircle
                                      style={{ fontSize: "17px" }}
                                    />
                                  </i>
                                  <Moment
                                    fromNow
                                    className="message-data-time"
                                    style={{ fontSize: "12px" }}
                                  >
                                    {index.created_at}
                                  </Moment>
                                </div>
                                <div className="message my-message">
                                  {index.content}
                                </div>
                              </li>
                            ) : (
                              <li className="clearfix" key={key}>
                                <div className="Message-data align-right">
                                  <Moment
                                    fromNow
                                    className="message-data-time"
                                    style={{ fontSize: "12px" }}
                                  >
                                    {index.created_at}
                                  </Moment>
                                  &nbsp;
                                  <i className="online">
                                    <FaCheckCircle
                                      style={{ fontSize: "17px", color: "red" }}
                                    />
                                  </i>
                                  &nbsp;
                                  <span>{index.user.name}</span>
                                </div>
                                <div className="message other-message float-right">
                                  {index.content}
                                </div>
                                {/* <iframe
                                style={{
                                  border: "0",
                                  width: "100%",
                                  height: "100%",
                                }}
                                src="http://emailyounow.com/ab/embed/9unw9ypg2tbwz1l2lrkd"
                              ></iframe> */}
                              </li>
                            )
                          )}
                      </ul>
                    </div>

                    <form className="Chat-Area" onSubmit={this.handleSubmit}>
                      {/* <textarea
                        name="content"
                        onChange={this.contentOnChange}
                        className="chat-input-box-LC"
                        type="text"
                        placeholder="Masukan Pesan anda"
                      />
                      <button
                        type="submit"
                        className="btn btn-primary Btnn"
                        disabled={content.length < 1}
                        value={content}
                      >
                        <FaPaperPlane style={{ fontSize: 22 }} />
                      </button> */}
                      <div className="input-group">
                        <textarea
                          name="content"
                          onChange={this.contentOnChange}
                          className="form-control chat-input-box-LC"
                          aria-label="With textarea"
                        ></textarea>
                        <div className="input-group-prepend">
                          <button
                            className="btn btn-primary btn-width"
                            disabled={content.length < 1}
                            value={content}
                          >
                            <FaPaperPlane style={{ fontSize: 20 }} />
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="one" className="adujustment-height">
                  {/* <FormRegistrasi eventKey="zero" /> */}
                  {/* <iframe
                    src={`https://emailyounow.com${process.env.REACT_APP_BASE_NAME}/chat/${register_code}`}
                    style={{
                      overflow: "hidden",
                      width: "100%",
                      height: "100%",
                    }}
                    height="100%"
                    width="100%"
                    frameborder="0"
                    allowfullscreen
                  ></iframe> */}
                  <FormRegistrasi />
                </Tab.Pane>
                <Tab.Pane eventKey="two" className="adujustment-height">
                  {/* <FormDeposit eventKey="zero" /> */}

                  <FormDeposit />
                </Tab.Pane>
                <Tab.Pane eventKey="three" className="adujustment-height">
                  {/* <FormWithdraw eventKey="zero" /> */}
                  {/* <iframe
                    src={`https://emailyounow.com${process.env.REACT_APP_BASE_NAME}/chat/${withdraw_code}`}
                    style={{
                      overflow: "hidden",
                      width: "100%",
                      height: "100%",
                    }}
                    height="100%"
                    width="100%"
                    frameborder="0"
                    allowfullscreen
                  ></iframe> */}
                  <FormWithdraw />
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProp = (state) => {
  return {
    GuestR: state.GuestR,
    administrationR: state.administrationR
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // LoginGuestA: (data) => dispatch(LoginGuestA(data)),
    PostGuestA: (data) => dispatch(PostGuestA(data)),
    GetGuestA: (GetGuest) => dispatch(GetGuestA(GetGuest)),
    EndGuestA: (conversation_uuid) => dispatch(EndGuestA(conversation_uuid)),
    getGSA: () => (dispatch(getGSA())),
    GetImageGreetingA: (data) => (dispatch(GetImageGreetingA(data)))
  };
};
export default connect(mapStateToProp, mapDispatchToProps)(LayoutChat);
