import React, { Component } from "react";
import { Col, Row, Form, Button } from "react-bootstrap";
import "../Profile/UpdateProfile.css";
import Header from "../common/Header";
import Menu from "../common/Menu";
import Highlight from 'react-highlight'
import { getGSA } from "../../_actions/administrationA";
import { connect } from "react-redux";

class Widgetcode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
    };
  }

  componentDidMount(){
    this.props.getGSA();
  }
  

  render() {
    const urlParams = new URLSearchParams(window.location.search);
    const register_code = urlParams.get("register_code");
    const deposit_code = urlParams.get("deposit_code");
    const withdraw_code = urlParams.get("withdraw_code");

    var Widgetcode = '<script src="http://18.139.158.80/ab/widget/widget.js"></script>'
         + '<script>'
            + 'var register_code = "xxx"'
             + 'var deposit_code = "xxx"'
      + 'var withdraw_code = "xxx"'
    +'</script>';
    return (
      <>
        <div className="Body-UP">
          <Header />
          <Row className="mr-0">
            <Menu />
            <Col md={10} className="pl-0 pr-0">
              <div className="Content-Right-UP">
                <div className="page-title-UP">
                  <p>Widget Code</p>
                </div>
                {/* <Row> */}
                <Col md={12}>
                  <div className="Pembungkus-UP">
                    <div className="Pembungkus-Header-UP">
                      <p>Widget Code</p>
                    </div>
                    <div className="Panel-body-UP">
                      <Col md={8}>
                        {/* <textarea
                          readonly="readonly"
                          className="display-code"
                          id="display_code"
                          rows="3"
                        > */}
                            {/* <pre>
                                <code>
                                 { ' <p>2</p>'}
                                </code>
                            </pre> */}
                            <Highlight innerHTML={true} className="mt-3">{this.props.administrationR.getGS.widget_code}</Highlight>
                            {/* <div innerHTML={true} className="mt-3"><p>dsfdfd</p></div> */}
                         {/* { Widgetcode } */}
                        {/* </textarea> */}
                        {/* <div className="Form-UP">
                          <Form onSubmit={this.handleSubmit}>
                            <Row>
                              <Form.Group
                                controlId="formBasicName"
                                className="col-sm-12"
                              >
                                <label>
                                  <span>Name</span>
                                </label>
                                <input
                                  type="text"
                                  name="name"
                                  defaultValue={getprofile.name}
                                  className={
                                    this.hasErrorFor("name")
                                      ? "form-control is-invalid"
                                      : "form-control"
                                  }
                                />
                                {error ? (
                                  <small
                                    style={{ color: "red", fontSize: "12px" }}
                                  >
                                    {dataErr.data.name}
                                  </small>
                                ) : null}
                              </Form.Group>
                            </Row>
                            <Row>
                              <Form.Group
                                controlId="formBasicEmail"
                                className="col-sm-12"
                              >
                                <label>
                                  <span>Email</span>
                                </label>
                                <input
                                  type="email"
                                  name="email"
                                  defaultValue={getprofile.email}
                                  className={
                                    this.hasErrorFor("email")
                                      ? "form-control is-invalid"
                                      : "form-control"
                                  }
                                />
                                {error ? (
                                  <small
                                    style={{ color: "red", fontSize: "12px" }}
                                  >
                                    {dataErr.data.email}
                                  </small>
                                ) : null}
                              </Form.Group>
                            </Row>
                            <Row>
                              <Button variant="primary" type="submit">
                                Update Profile
                              </Button>
                            </Row>
                          </Form>
                        </div> */}
                      </Col>
                    </div>
                  </div>
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
      getGSA: (data) => dispatch(getGSA(data)),
    };
  };

export default connect(mapStateToProp, mapDispatchToProps)(Widgetcode);
