import React, { Component } from "react";
import "./ViewProfile.css";
import { Row, Col } from "react-bootstrap";
import Header from "../common/Header";
import Menu from "../common/Menu";
import { connect } from "react-redux";
import { getprofilea } from "../../_actions/profilea";

class ViewProfile extends Component {
  componentDidMount() {
   this.props.getprofilea()
   document.title = "ViewProfile"
  }
  render() {
    const {getprofile} = this.props.user
    console.log(getprofile,"kwoqkowqko")
    return (
      <>
        <div className="Body-VP">
          <Header />
          <Row className="mr-0">
            <Menu />
            <Col md={10} className="pl-0 pr-0">
              <div className="Content-Right-VP">
                <div className="page-title-VP">
                  <p>View Profile</p>
                </div>
                <Col md={12}>
                  <Row>
                    <Col md={8}>
                      <div className="Pembungkus-VP">
                        <div className="Pembungkus-Header-VP">
                          <p>Profile</p>
                        </div>
                        <div className="Panel-body-VP">
                          <table border="1">
                            <tr>
                              <td colSpan="2">
                                <img className="thumb-image-lg thumbnail" />
                              </td>
                            </tr>
                            <tr>
                              <td>Name</td>
                              <td>{getprofile.name}</td>
                            </tr>
                            <tr>
                              <td>User Type</td>
                              <td>{getprofile.user_role}</td>
                            </tr>
                            <tr>
                              <td>Email</td>
                              <td>{getprofile.email}</td>
                            </tr>
                          </table>
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
    user: state.profiler,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getprofilea: () => dispatch(getprofilea()),
  };
};
export default connect(mapStateToProp, mapDispatchToProps)(ViewProfile);
