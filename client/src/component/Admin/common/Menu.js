import React, { Component } from "react";
import { Col, Collapse } from "react-bootstrap";
import { FaUserAlt, FaDesktop } from "react-icons/fa";
import {
  AiOutlineLaptop,
  AiOutlineUser,
  AiFillCreditCard,
} from "react-icons/ai";
import { BsExclamationOctagonFill, BsGear } from "react-icons/bs";
import { AiFillStop } from "react-icons/ai";
import { Link } from "react-router-dom";
import { getGSA, editGSA } from "../../_actions/administrationA";
import { getprofilea } from "../../_actions/profilea";
import { connect } from "react-redux";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      widget: false,
      user: false,
      department: false,
      canned: false,
      admin: false,
      members: false,
    };
  }

  componentDidMount() {
    this.props.getGSA();
    this.props.getprofilea();
  }

  handleClick = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  handleClickAdmin = () => {
    this.setState({
      admin: !this.state.admin,
    });
  };

  handleClickCanned = () => {
    this.setState({
      canned: !this.state.canned,
    });
  };

  handleClickWidget = () => {
    this.setState({
      widget: !this.state.widget,
    });
  };

  handleClickUser = () => {
    this.setState({
      user: !this.state.user,
    });
  };

  handleClickDepartment = () => {
    this.setState({
      department: !this.state.department,
    });
  };

  handleClickMembers = () => {
    this.setState({
      members: !this.state.members,
    });
  };

  UpdateSetting = (offline_mode) => {
    if (offline_mode == "enable") {
      // alert('disable');
      let mode = "disable";
      this.props.editGSA(mode);
    } else {
      let mode = "enable";
      this.props.editGSA(mode);
    }
  };
  render() {
    const { getGS } = this.props.administrationR;
    // const { getprofile } = this.props.profiler;
    // console.log(getGS)
    return (
      <Col md={2} className="pr-0">
        <div className="Content-Left">
          {/* User Profile */}
          <div className="Profile-Left">
            <div className="Welcome-Profile-Left">
              <FaUserAlt style={{ fontSize: "25px", color: "white" }} />
              <p>Welcome, <span> {this.props.profiler.getprofile.name}</span></p>
            </div>
          </div>
          <div className="border-bottom"></div>
          {/* Start Nav */}
          <div className="Navbar-Left">
            {this.props.profiler.getprofile.user_role == "Admin" ? (
              <ul className="menu" id="metismenu">
                <Link to="/DashboardAdmin">
                  <li>
                    <FaDesktop
                      style={{
                        fontSize: "25px",
                        color: "white",
                        marginLeft: "25px",
                      }}
                    />
                    <p>Dashboard</p>
                  </li>
                </Link>

                <Link onClick={(e) => this.UpdateSetting(getGS.offline_mode)}>
                  {this.props.administrationR.getGS.offline_mode == "enable" ? (
                    <li style={{ backgroundColor: "#E91E63" }}>
                      <AiFillStop
                        style={{
                          fontSize: "25px",
                          color: "white",
                          marginLeft: "25px",
                        }}
                      />
                      <p>Enable Offline Mode</p>
                    </li>
                  ) : (
                    <li disabled>
                      <AiFillStop
                        style={{
                          fontSize: "25px",
                          color: "white",
                          marginLeft: "25px",
                        }}
                      />
                      <p>Disable Offline Mode</p>
                    </li>
                  )}
                </Link>
                <li
                  onClick={this.handleClickWidget}
                  aria-controls="example-collapse-widget"
                  aria-expanded={this.state.widget}
                >
                  <AiOutlineLaptop
                    style={{
                      fontSize: "25px",
                      color: "white",
                      marginLeft: "25px",
                    }}
                  />
                  <p>Widget</p>
                </li>
                <Collapse in={this.state.widget}>
                  <div id="example-collapse-widget">
                    <ul className="Collapse">
                      <Link target="new" to="/widget">
                        <li>Widget Preview</li>
                      </Link>
                      <Link to="/Widgetcode">
                        <li>Widget Code</li>
                      </Link>
                    </ul>
                  </div>
                </Collapse>
                <li
                  onClick={this.handleClickUser}
                  aria-controls="example-collapse-user"
                  aria-expanded={this.state.user}
                >
                  <AiOutlineUser
                    style={{
                      fontSize: "25px",
                      color: "white",
                      marginLeft: "25px",
                    }}
                  />
                  <p>User Management</p>
                </li>
                <Collapse in={this.state.user}>
                  <div id="example-collapse-user">
                    <ul className="Collapse">
                      <Link to="/AllUser">
                        <li>All User</li>
                      </Link>
                      <Link to="/AddNew">
                        <li>Add New</li>
                      </Link>
                    </ul>
                  </div>
                </Collapse>
                <li
                  onClick={this.handleClickDepartment}
                  aria-controls="example-collapse-user"
                  aria-expanded={this.state.department}
                >
                  <AiOutlineLaptop
                    style={{
                      fontSize: "25px",
                      color: "white",
                      marginLeft: "25px",
                    }}
                  />
                  <p>Department</p>
                </li>
                <Collapse in={this.state.department}>
                  <div id="example-collapse-user">
                    <ul className="Collapse">
                      <Link to="/AddDepartment">
                        <li>Add Department</li>
                      </Link>
                      <Link to="/DepartmentList">
                        <li>Department List</li>
                      </Link>
                    </ul>
                  </div>
                </Collapse>

                <Link to="/OfflineMessages">
                  <li>
                    <BsExclamationOctagonFill
                      style={{
                        fontSize: "25px",
                        color: "white",
                        marginLeft: "25px",
                      }}
                    />
                    <p>Offline Messages</p>
                  </li>
                </Link>
                <li
                  onClick={this.handleClickAdmin}
                  aria-controls="example-collapse-user"
                  aria-expanded={this.state.admin}
                >
                  <BsGear
                    style={{
                      fontSize: "25px",
                      color: "white",
                      marginLeft: "25px",
                    }}
                  />
                  <p>Administration</p>
                </li>
                <Collapse in={this.state.admin}>
                  <div id="example-collapse-user">
                    <ul className="Collapse">
                      <Link to="/GeneralSetting">
                        <li>General Settings</li>
                      </Link>

                      <Link to="/ChatHistory">
                        <li>Chat History</li>
                      </Link>
                    </ul>
                  </div>
                </Collapse>
              </ul>
            ) : (
              <ul className="menu" id="metismenu">
                <Link to="/DashboardAdmin">
                  <li>
                    <FaDesktop
                      style={{
                        fontSize: "25px",
                        color: "white",
                        marginLeft: "25px",
                      }}
                    />
                    <p>Dashboard</p>
                  </li>
                </Link>
              </ul>
            )}
          </div>
          {/* End Nav */}
          {/* End User Profile */}
        </div>
      </Col>
    );
  }
}

const mapStateToProp = (state) => {
  return {
    administrationR: state.administrationR,
    profiler: state.profiler,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getGSA: (data) => dispatch(getGSA(data)),
    editGSA: (data) => dispatch(editGSA(data)),
    getprofilea: (data) => dispatch(getprofilea(data)),
  };
};

export default connect(mapStateToProp, mapDispatchToProps)(Menu);
