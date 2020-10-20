import React, { Component } from "react";
// import "./OfflineMessage.css";
import { Container, Row, Col, Dropdown, Form, Button } from "react-bootstrap";
import {
  AiOutlineWechat,
  AiFillCloseCircle,
  AiFillSetting,
  AiFillWechat,
} from "react-icons/ai";
import { connect } from "react-redux";
import { offlinemodeA } from "../_actions/offlinemodeA";
import $ from "jquery";

class OfflineMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }

  nameOnChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  emailOnChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  messageOnChange = (e) => {
    this.setState({
      message: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    this.props.offlinemodeA(formData);
    // e.target.reset()
    // if (this.props.offlinemodeA(formData)) {
    //   return (
    //     <div className="alert alert-success">
    //       <p>Your Message Send Sucessfully</p>
    //     </div>
    //   );
    // }
    // e.target.reset()
    // window.location.href = "http://18.139.158.80/ab/OfflineMessage";
  };

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

  componentDidUpdate(prevProps) {
    if (
      this.props.offlinemodeR.PostOfMod.succes !==
      prevProps.offlinemodeR.PostOfMod.succes
    ) {
      this.setState({
        name: "",
      });
      this.setState({
        email: "",
      });
      this.setState({
        message: "",
      });
    }
  }

  hasErrorFor(field) {
    if (this.props.offlinemodeR.error) {
      return !!this.props.offlinemodeR.dataErr[field];
    }
  }
  render() {
    const { error, dataErr } = this.props.offlinemodeR;
    return (
      <>
        {/* <Button className="Logo-Chat-2" id="btn-chat" onClick={this.openChat}>
          <AiFillWechat className="IconDashboard-2" />
        </Button> */}
        <div className="Body-Layout" id="Body-Layout">
          <div className="Panel-Header">
            <Container fluid>
              <Row>
                <div className="col-6">
                  <div className="Panel-Header-Left">
                    <AiOutlineWechat className="Icon" /> &nbsp;&nbsp;&nbsp;
                    <p
                      style={{
                        fontSize: "20px",
                        fontWeight: "800",
                        color: "white",
                      }}
                    >
                      Live Chat
                    </p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="Panel-Header-Right-LC">
                    {/* <Dropdown className="DropDown-Index">
                    <Dropdown.Toggle
                      variant="success"
                      id="dropdown-basic"
                      className="btn-success dropdown-toggle btn btn-success"
                    >
                      <AiFillSetting className="Icon" />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item>End Chat</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown> */}

                    <AiFillCloseCircle
                      className="Icon-Close-OM"
                      onClick={this.closeChat}
                    />
                  </div>
                </div>
              </Row>
            </Container>
          </div>
          <div className="Panel-Body-">
            <div className="Chat-Login-Area-Index OfflineMode-Height">
              <Col md={12}>
                <div className="alert alert-danger text-center">
                  <p>Hi, Currently We are not available</p>
                </div>
                {this.props.offlinemodeR.PostOfMod.succes ? (
                  <div className="alert alert-success text-center">
                    <p>Message has been sent.!</p>
                  </div>
                ) : null}
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group>
                    <Form.Label className="Form-Judul">Name</Form.Label>
                    <input
                      type="name"
                      name="name"
                      onChange={this.nameOnChange}
                      value={this.state.name}
                      placeholder="Enter Your Name"
                      className={
                        error && this.hasErrorFor("name")
                          ? "form-control is-invalid Form-Text"
                          : "form-control Form-Text"
                      }
                    />
                    {error ? (
                      <small style={{ color: "red", fontSize: "12px" }}>
                        {dataErr.name}
                      </small>
                    ) : null}
                  </Form.Group>
                  <Form.Group>
                    <Form.Label className="Form-Judul">Email</Form.Label>
                    <input
                      type="email"
                      name="email"
                      onChange={this.emailOnChange}
                      value={this.state.email}
                      placeholder="Enter Your Email"
                      className={
                        error && this.hasErrorFor("email")
                          ? "form-control is-invalid Form-Text"
                          : "form-control Form-Text"
                      }
                    />
                    {error ? (
                      <small style={{ color: "red", fontSize: "12px" }}>
                        {dataErr.email}
                      </small>
                    ) : null}
                  </Form.Group>
                  <Form.Group>
                    <Form.Label className="Form-Judul">Message</Form.Label>
                    <input
                      type="text"
                      name="message"
                      onChange={this.messageOnChange}
                      value={this.state.message}
                      placeholder="Enter Your Message"
                      className={
                        error && this.hasErrorFor("message")
                          ? "form-control is-invalid Form-Text"
                          : "form-control Form-Text"
                      }
                    />
                    {error ? (
                      <small style={{ color: "red", fontSize: "12px" }}>
                        {dataErr.message}
                      </small>
                    ) : null}
                  </Form.Group>

                  {/* <Link to="/LayoutChat"> */}
                  <Button type="submit" className="Button-Form-Index">
                    <p>Send Message</p>
                  </Button>
                  {/* </Link> */}
                </Form>
              </Col>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProp = (state) => {
  return {
    offlinemodeR: state.offlinemodeR,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    offlinemodeA: (data) => dispatch(offlinemodeA(data)),
  };
};

export default connect(mapStateToProp, mapDispatchToProps)(OfflineMessage);
