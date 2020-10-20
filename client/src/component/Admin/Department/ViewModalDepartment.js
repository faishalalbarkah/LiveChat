import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import "./DepartmentList.css";
import { AiFillCloseCircle } from "react-icons/ai";

class ViewModalDepartment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewdep: false,
    };
  }

  handleClickViewDep = () => {
    this.setState({
      viewdep: !this.state.viewdep,
    });
  };

  getById = e => {
    this.props.editdepartmenta(this.props.id)
    this.handleClickViewDep();
  }
  render() {
    const AllData = this.props.id
    return (
      <>
        <button id="btn-view-DL" onClick={this.handleClickViewDep}>
          View
        </button>
        {/* View Modal Department */}
        <Modal show={this.state.viewdep} onHide={this.handleClickViewDep}>
          <Modal.Header>
            <p>View Department</p>

            <button id="btn-modal-DL" onClick={this.handleClickViewDep}>
              <AiFillCloseCircle id="icon-modal-DL" /> Exit
            </button>
          </Modal.Header>
          <Modal.Body>
            <div className="btn-modal-body-view-DL">
              <div className="btn-modal-panel-body-view-DL">
                <table border="1">
                  <tr>
                    <td>Department</td>
                    <td>{AllData.name}</td>
                  </tr>
                  <tr>
                    <td>Description</td>
                    <td>{AllData.description}</td>
                  </tr>
                </table>
              </div>
            </div>
          </Modal.Body>
        </Modal>
        {/* End View Modal Department */}
      </>
    );
  }
}

export default ViewModalDepartment;
