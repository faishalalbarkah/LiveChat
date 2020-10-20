import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import { connect } from "react-redux";
import {
  deletoffmessageA,
  getoffmessageA,
} from "../../_actions/offlinemessagesA";

class DeleteModalOM extends Component {
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
    this.props.deletoffmessageA(this.props.dataDel.id);
    this.load();
    this.handleClose();
    this.load();
  };

  load() {
    this.props.getoffmessageA(this.props.dataPage);
  }

  render() {
    // const {handleSubmit} = this.props
    console.log(this.props.dataPage);
    return (
      <>
        <button id="btn-delete-OM" onClick={this.handleShow}>
          Delete
        </button>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header>
            <Modal.Title>Offline Messages</Modal.Title>
          </Modal.Header>
          <Modal.Body>Delete Data Offline Messages??</Modal.Body>
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
    offlinemessagesR: state.offlinemessagesR,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deletoffmessageA: (getOM) => dispatch(deletoffmessageA(getOM)),
    getoffmessageA: (getOM) => dispatch(getoffmessageA(getOM)),
  };
};

export default connect(mapStateToProp, mapDispatchToProps)(DeleteModalOM);
