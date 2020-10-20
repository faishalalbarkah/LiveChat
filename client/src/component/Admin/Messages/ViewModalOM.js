import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import { AiFillCloseCircle } from "react-icons/ai";

class ViewModalOM extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewofm: false,
    };
  }

  handleClickViewofm = () => {
    this.setState({
      viewofm: !this.state.viewofm,
    });
  };
  render() {
    const { dataOM } = this.props;
    return (
      <>
        <button id="btn-view-OM" onClick={this.handleClickViewofm}>
          View
        </button>
        {/* View Modal OM */}
        <Modal show={this.state.viewofm} onHide={this.handleClickViewofm}>
          <Modal.Header>
            <p>View Department</p>
            <button id="btn-modal-DL" onClick={this.handleClickViewofm}>
              <AiFillCloseCircle id="icon-modal-DL" /> Exit
            </button>
          </Modal.Header>
          <Modal.Body>
            <div className="btn-modal-body-view-DL">
              <div className="btn-modal-panel-body-view-DL">
                <table border="1">
                  <tr>
                    <td>Name</td>
                    <td>{dataOM.name}</td>
                  </tr>
                  <tr>
                    <td>Email</td>
                    <td>{dataOM.email}</td>
                  </tr>
                  <tr>
                    <td>IP Address</td>
                    <td>{dataOM.ip_address}</td>
                  </tr>
                  <tr>
                    <td>Message</td>
                    <td>{dataOM.message}</td>
                  </tr>
                </table>
              </div>
            </div>
          </Modal.Body>
        </Modal>
        {/* End View Modal OM */}
      </>
    );
  }
}

export default ViewModalOM;
