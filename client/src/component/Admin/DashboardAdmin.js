import React, { Component } from "react";
import { Row } from "react-bootstrap";
import "./DashboardAdmin.css";
import Dashboard from "./Dashboard/Dashboard";
import Header from "./common/Header";
import Menu from "./common/Menu";

class DashboardAdmin extends Component {
  componentDidMount() {
    document.title = "Dashboard"
  }
  
  render() {
    return (
      <>
        <div className="Body-Dashboard">
          <Header />

          <Row className="mr-0">
            <Menu />
            <Dashboard />
          </Row>
        </div>
      </>
    );
  }
}

export default DashboardAdmin;
