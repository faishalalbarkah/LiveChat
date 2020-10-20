import React, { Component } from "react";
import { Dropdown, Col, Row } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";
import {getprofilea} from "../../_actions/profilea"
import { connect } from "react-redux";

class Header extends Component {
  removeClick = () => {
    window.localStorage.removeItem("access_token");
    window.location.href = process.env.REACT_APP_URL +"/Login";
  };
  render() {
    // const { getprofile } = this.props.profiler;
    return (
      <div className="Admin-Header">
        <Row className="mr-0 ml-0">
          <Col md={6}>
            <div className="Admin-Header-Left">
              <p>Live Chat</p>
            </div>
          </Col>
          <Col className="pr-0 pl-0" md={6}>
            <div className="Admin-Header-Right">
              <Dropdown className="DropDown-Header">
                <Dropdown.Toggle
                  variant="success"
                  id="dropdown-basic"
                  className="btn-success dropdown-toggle btn btn-success"
                >
                  <p id="Text-Dropdown"><span>Hi!</span> {this.props.profiler.getprofile.name}</p>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Link to="/ViewProfile">
                    <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
                  </Link>
                  <Link to="/UpdateProfile">
                    <Dropdown.Item href="#/action-2">
                      Update Profile
                    </Dropdown.Item>
                  </Link>
                  <Link to="/ChangePassword">
                    <Dropdown.Item href="#/action-3">
                      Change Password
                    </Dropdown.Item>
                  </Link>
                  <Link to="/Login">
                    <Dropdown.Item  onClick={this.removeClick}>Logout</Dropdown.Item>
                  </Link>
                </Dropdown.Menu>
              </Dropdown>
              {/* <FaCheck className="Icon-AHR" /> */}
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProp = (state) => {
  return {
    profiler: state.profiler
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getprofilea: (data) => dispatch(getprofilea(data))
  }
}

export default connect(mapStateToProp, mapDispatchToProps)(Header);
