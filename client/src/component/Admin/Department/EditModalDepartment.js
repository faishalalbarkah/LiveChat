import React, { Component } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import "./DepartmentList.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { connect } from "react-redux";
import { editdepartmenta } from "../../_actions/departmenta";

class EditModalDepartment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editdep: false,
      name: "",
      description: "",
    };
  }
  handleClickEditDep = () => {
    this.setState({
      editdep: !this.state.editdep,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.append('_method', 'PUT');
    this.props.editdepartmenta(formData, this.props.dataDepartment.id)
  };

  hasErrorFor(field) {
    if( this.props.departmentr.error){
      return !!this.props.departmentr.dataErr.data[field];
    }
  }

  render() {
    const { error, dataErr } = this.props.departmentr;
    return (
      <>
        <button id="btn-edit-DL" onClick={this.handleClickEditDep}>
          Edit
        </button>
        {/* Edit Modal Department */}
        <Modal show={this.state.editdep} onHide={this.handleClickEditDep}>
          <Modal.Header>
            <p>Update Department</p>

            <button id="btn-modal-AU" onClick={this.handleClickEditDep}>
              <AiFillCloseCircle id="icon-modal-AU" /> Exit
            </button>
          </Modal.Header>
          <Modal.Body>
            <div className="btn-modal-body-edit-AU ">
              <div className="btn-modal-panel-body-edit ">
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <input
                      type="text"
                      className={
                        this.hasErrorFor('name')
                          ? "form-control is-invalid"
                          : "form-control"
                      }
                      name="name"
                      defaultValue={this.props.dataDepartment.name}
                    />
                    {error ? (
                      <small style={{ color: "red", fontSize: "12px" }}>
                        {dataErr.data.name}
                      </small>
                    ) : null}
                  </Form.Group>
                  <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Description</Form.Label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      name="description"
                      defaultValue={this.props.dataDepartment.description}
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Update
                  </Button>
                </Form>
              </div>
            </div>
          </Modal.Body>
        </Modal>
        {/* End Edit Modal Department */}
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
    editdepartmenta: (id, data) => dispatch(editdepartmenta(id, data)),
  };
};
export default connect(mapStateToProp, mapDispatchToProps)(EditModalDepartment);
