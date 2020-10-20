import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import { connect } from "react-redux";
import {deletedepartmenta,getdepartmenta} from "../../_actions/departmenta"

class DeleteModalDepartment extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
  }

  handleClose = () => {
    this.setState({ show: false });
  };
  handleShow = () => {
    this.setState({ show: true });
  };

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   const access_token = localStorage.getItem("access_token");
  //   Axios({
  //     method: "DELETE",
  //     url: `http://18.139.158.80/ab/api/admin/department/${this.props.data.id}/delete`,
  //     headers: {
  //       Authorization: "Bearer " + JSON.parse(access_token),
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //   }).then((res) => {
  //     window.location.href = "http://18.139.158.80/ab/DepartmentList";
  //   });
  // };

  handleSubmit = (e) => {
    this.props.deletedepartmenta(this.props.data.id);
    this.load();
    this.handleClose();
    this.load();
  };

  load() {
    this.props.getdepartmenta(this.props.dataPage);
  }
  render() {
    return (
      <>
        <button id="btn-delete-DL" onClick={this.handleShow}>
          Delete
        </button>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header>
            <Modal.Title>Department</Modal.Title>
          </Modal.Header>
          <Modal.Body>Delete Data Department??</Modal.Body>
          <Modal.Footer>
            <Button variant="outline-danger" onClick={this.handleClose}>
              No
            </Button>
            <Button variant="outline-success" onClick={this.handleSubmit}>
              Yes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

const mapStateToProp = (state) => {
  return {
    departmentr: state.departmentr,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deletedepartmenta: (getdepartment) => dispatch(deletedepartmenta(getdepartment)),
    getdepartmenta: (getdepartment) => dispatch(getdepartmenta(getdepartment)),
  };
};

export default connect(mapStateToProp, mapDispatchToProps) (DeleteModalDepartment);
