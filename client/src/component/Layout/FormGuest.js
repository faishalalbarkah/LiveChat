import React, { Component } from "react";
import { Form, Col, Row, Container, Button } from "react-bootstrap";
import {
  AiOutlineWechat,
  AiFillCloseCircle,
  AiFillSetting,
} from "react-icons/ai";
import { connect } from "react-redux";
import { LoginGuestA } from "../_actions/GuestA";
import {  GetImageGreetingA } from "../_actions/administrationA";
import "./FormGuest.css";
import $ from "jquery";

class FormGuest extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      // email:""
    };
  }

  // Event Login
  nameOnChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  // emailOnChange = (e) => {
  //   this.setState({
  //     email: e.target.value,
  //   });
  // };

  componentDidMount(){
    this.props.GetImageGreetingA();
  }

  handleLogin = (e) => {
    e.preventDefault();

    const urlParams = new URLSearchParams(window.location.search);
    const url = urlParams.get("url");

    const formData = new FormData(e.target);

    formData.append("url", url);
    this.props.LoginGuestA(formData);
  };

  hasErrorFor(field) {
    if (this.props.GuestR.error) {
      return !!this.props.GuestR.dataErr[field];
    }
  }

  closeChat() {
    $("#btn-chat").css("display", "block");
    $("#Body-Index").css("display", "none");
    $("#Body-Layout").css("display", "none");
  }

  // End Event Login
  render() {
    const { error, dataErr } = this.props.GuestR;
    return (
      <div className="Body-Index" id="Body-Index">
        <div className="Panel-Header">
          <Container fluid>
            <Row>
              <div className="col-6">
                <div className="Panel-Header-Left">
                  <img
                    style={{ width: 40, height: 40 }}
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
                    Live Chat
                  </p>
                </div>
              </div>
              <div className="col-6">
                <div className="Panel-Header-Right">
                  {/* <AiFillSetting
                        className="Icon"
                        style={{ marginRight: "15px" }}
                      /> */}
                  <AiFillCloseCircle
                    style={{ marginTop: "0px" }}
                    className="Icon"
                    onClick={this.closeChat}
                  />
                </div>
              </div>
            </Row>
          </Container>
        </div>
        <div className="Panel-Body">
          <div className="Chat-Login-Area-Index" style={{overflowX:"hidden"}}>
            <Col md={12}>
              <div className="Pembungkus-FormGuest-Greeting">
                <span>{this.props.administrationR.ImaGree.greeting}</span>
              </div>
              <Form onSubmit={this.handleLogin} className="mt-5">
                <Form.Group>
                  {/* <Form.Label className="Form-Judul">Name</Form.Label> */}
                  <input
                    type="name"
                    name="name"
                    placeholder="Enter Your Name"
                    className={
                      this.hasErrorFor("name")
                        ? "form-control is-invalid Form-Text"
                        : "form-control Form-Text"
                    }
                    onChange={this.nameOnChange}
                  />
                  {error ? (
                    <small style={{ color: "red", fontSize: "12px" }}>
                      {dataErr.name}
                    </small>
                  ) : null}
                </Form.Group>
                {/* <Form.Group>
                      <Form.Label className="Form-Judul">Email Anda</Form.Label>
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter Your Email"
                        className={
                          this.hasErrorFor("email")
                            ? "form-control is-invalid Form-Text"
                            : "form-control Form-Text"
                        }
                        onChange={this.emailOnChange}
                      />
                      {error ? (
                        <small style={{ color: "red", fontSize: "12px" }}>
                          {dataErr.email}
                        </small>
                      ) : null}
                    </Form.Group> */}

                {/* <Link to="/LayoutChat"> */}
                <Button type="submit" className="Button-Form-Index">
                  <p>Start Chat</p>
                </Button>
                {/* </Link> */}
              </Form>
            </Col>
          </div>
        </div>
      </div>
    );
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
    // getGSA: () => dispatch(getGSA()),
    GetImageGreetingA: (data) => dispatch(GetImageGreetingA(data)),
  };
};

export default connect(mapStateToProp, mapDispatchToProps)(FormGuest);
