import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import { AiFillCloseCircle } from "react-icons/ai";

class ViewModalUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewtampil: false,
    };
  }

  handleClickView = () => {
    this.setState({
      viewtampil: !this.state.viewtampil,
    });
  };

  getById = e => {
    this.props.updateusera(this.props.id)
    this.handleClickView()
  }
  render() {
    const AllData = this.props.id
    return (
      <>
        <button onClick={this.handleClickView} id="btn-view-AU">
          View
        </button>
        {/* Start View Modal */}
        <Modal show={this.state.viewtampil} onHide={this.handleClickView}>
          <Modal.Header>
            <p>View User</p>

            <button id="btn-modal-AU" onClick={this.handleClickView}>
              <AiFillCloseCircle id="icon-modal-AU" /> Exit
            </button>
          </Modal.Header>
          <Modal.Body>
            <div className="btn-modal-body-view-AU">
              <div className="btn-modal-panel-body-view">
                <table border="1">
                  <tr>
                    <td colSpan="2">
                      <img className="thumb-image-lg thumbnail" />
                    </td>
                  </tr>
                  <tr>
                    <td>Name</td>
                    <td>{AllData.name}</td>
                  </tr>
                  <tr>
                    <td>Email</td>
                    <td>{AllData.email}</td>
                  </tr>
                  <tr>
                    <td>User Type</td>
                    <td>{AllData.user_role}</td>
                  </tr>
                </table>
              </div>
            </div>
          </Modal.Body>
        </Modal>
        {/* End View Modal */}
      </>
    );
  }
}

export default ViewModalUser;
