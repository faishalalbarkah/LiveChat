import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import { deletusera,getusera } from "../../_actions/usera";
import { connect } from "react-redux";

class DeleteModalUser extends Component {
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

  handleSubmit = (e) => {
    this.props.deletusera(this.props.dataUser);
    this.load();
    this.handleClose();
    this.load();
  };

  load() {
    this.props.getusera(this.props.dataPage)
  }
  render() {
    return (
      <>
        <button id="btn-delete-AU" onClick={this.handleShow}>
          Delete
        </button>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header>
            <Modal.Title>User Management</Modal.Title>
          </Modal.Header>
          <Modal.Body>Delete Data User??</Modal.Body>
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
    userr: state.userr,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deletusera: (getuser) => dispatch(deletusera(getuser)),
    getusera: (getuser) => dispatch(getusera(getuser))
  };
};

export default connect(mapStateToProp, mapDispatchToProps)(DeleteModalUser);
