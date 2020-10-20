import React, { Component } from "react";
import { AiFillWechat } from "react-icons/ai";
import { FaCommentAlt } from "react-icons/fa";
import "./index.css";
import "./LayoutChat.css";

import { Button } from "react-bootstrap";

import { connect } from "react-redux";
import { LoginGuestA } from "../_actions/GuestA";
import { PostGuestA } from "../_actions/GuestA";
import { GetGuestA } from "../_actions/GuestA";
import { getGSA, GetImageGreetingA } from "../_actions/administrationA";
import OfflineMessage from "./OfflineMessage";
import FormGuest from "./FormGuest";
import LayoutChat from "./LayoutChat";
import $ from "jquery";
import Greeting from "./Greeting";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      name: "",
      email: "",
      content: "",
    };
  }

  componentDidMount() {
    this.props.GetGuestA();
    this.props.getGSA();
    this.props.GetImageGreetingA();

    if (localStorage.getItem("conversation_uuid")) {
      $("#btn-chat").css("display", "none");
    }
  }

  contentOnChange = (e) => {
    this.setState({
      content: e.target.value,
    });
  };

  componentDidUpdate(prevProps) {
    if (this.props.GuestR.isLogin !== prevProps.GuestR.isLogin) {
      this.props.GetGuestA();
    }
  }

  hasErrorFor(field) {
    if (this.props.GuestR.error) {
      return !!this.props.GuestR.dataErr[field];
    }
  }

  openChat() {
    $("#Body-Index").css("display", "block");
    $("#btn-chat").css("display", "none");
    $("#Body-Layout").css("display", "block");
  }

  closeChat() {
    $("#btn-chat").css("display", "block");
    $("#Body-Index").css("display", "none");
    $("#Body-Layout").css("display", "none");
  }

  renderChat() {
    if (this.props.administrationR.getGS.offline_mode == "enable") {
      return (
        <>
          <div
            className="Logo-Chat-2"
            id="btn-chat"
            style={{ display: "none" }}
            onClick={this.openChat}
          >
            <img
              src={
                process.env.REACT_APP_API_URL +
                "/storage/" +
                this.props.administrationR.ImaGree.widget_image
              }
              className="img-fluid shadow rounded-circle"
              alt="Responsive image"
            />
          </div>
          <OfflineMessage />
        </>
      );
    } else {
      const {
        dataErr,
        error,
        dataGuest,
        isLogin,
        GetGuest,
      } = this.props.GuestR;
      if (isLogin === true) {
        window.localStorage.setItem(
          "conversation_uuid",
          dataGuest.conversation_uuid
        );
      }
      const conversation_uuid = localStorage.getItem("conversation_uuid");
      return (
        <>
          
          <div className="Logo-Chat-2" id="btn-chat">
          <Greeting  />
            <img
              src={
                process.env.REACT_APP_API_URL +
                "/storage/" +
                this.props.administrationR.ImaGree.widget_image
              }
              className="img-fluid shadow rounded-circle"
              alt="Responsive image"
              onClick={this.openChat}
            />
          </div>
          {/* <Button className="Logo-Chat-2" id="btn-chat" onClick={this.openChat}>
            <FaCommentAlt className="IconDashboard-2" />
          </Button> */}

          {conversation_uuid ? <LayoutChat /> : <FormGuest />}
        </>
      );
    }
  }

  render() {
    return <div>{this.renderChat()}</div>;
  }
}

const mapStateToProp = (state) => {
  return {
    GuestR: state.GuestR,
    administrationR: state.administrationR,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    LoginGuestA: (data) => dispatch(LoginGuestA(data)),
    PostGuestA: (data) => dispatch(PostGuestA(data)),
    GetGuestA: (GetGuest) => dispatch(GetGuestA(GetGuest)),
    getGSA: (data) => dispatch(getGSA(data)),
    GetImageGreetingA: (data) => dispatch(GetImageGreetingA(data)),
  };
};

export default connect(mapStateToProp, mapDispatchToProps)(Index);
