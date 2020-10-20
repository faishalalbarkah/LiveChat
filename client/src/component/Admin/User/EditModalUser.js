import React, { Component } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { AiFillCloseCircle } from "react-icons/ai";
import { updateusera } from "../../_actions/usera";
import { connect } from "react-redux";

class EditModalUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edittampil: false,
      name: "",
      email: "",
      password: "",
      password_confirm: "",
      status: "",
      user_role: "",
      department: "",
    };
  }

  handleClickEdit = () => {
    this.setState({
      edittampil: !this.state.edittampil,
    });
  };

  handleChangeInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleOnSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.append("_method", "PUT");
    this.props.updateusera(formData, this.props.dataUser.id);
  };

  hasErrorFor(field) {
    if( this.props.userr.error){
      return !!this.props.userr.dataErr.data[field];
    }
  }

  render() {
    const { error,dataErr } = this.props.userr;
    return (
      <>
        <button id="btn-edit-AU" onClick={this.handleClickEdit}>
          Edit
        </button>
        {/* Star Edit Modal */}
        <Modal show={this.state.edittampil} onHide={this.handleClickEdit}>
          <Modal.Header>
            <p>Update Profile</p>

            <button id="btn-modal-AU" onClick={this.handleClickEdit}>
              <AiFillCloseCircle id="icon-modal-AU" /> Exit
            </button>
          </Modal.Header>
          <Modal.Body>
            <div className="btn-modal-body-edit-AU ">
              <div className="btn-modal-panel-body-edit ">
                <Form onSubmit={this.handleOnSubmit}>
                  <Form.Group controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <input
                      type="text"
                      className={
                        this.hasErrorFor('name') ? "form-control is-invalid" : "form-control"
                      }
                      defaultValue={this.props.dataUser.name}
                      name="name"
                    />
                    {error ? (
                      <small style={{ color: "red", fontSize: "12px" }}>
                        {dataErr.data.name}
                      </small>
                    ) : null}
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <input
                      type="text"
                      className={
                        this.hasErrorFor('email') ? "form-control is-invalid" : "form-control"
                      }
                      defaultValue={this.props.dataUser.email}
                      name="email"
                    />
                    {error ? (
                      <small style={{ color: "red", fontSize: "12px" }}>
                        {dataErr.data.email}
                      </small>
                    ) : null}
                  </Form.Group>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <input
                      type="password"
                      className={
                        this.hasErrorFor('password') ? "form-control is-invalid" : "form-control"
                      }
                      name="password"
                    />
                    {error ? (
                      <small style={{ color: "red", fontSize: "12px" }}>
                        {dataErr.data.password}
                      </small>
                    ) : null}
                  </Form.Group>
                  <Form.Group controlId="formBasicConfirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <input
                      type="password"
                      className={
                        this.hasErrorFor('password_confirm') ? "form-control is-invalid" : "form-control"
                      }
                      name="password_confirm"
                    />
                    {error ? (
                      <small style={{ color: "red", fontSize: "12px" }}>
                        {dataErr.data.password_confirm}
                      </small>
                    ) : null}
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Status User</Form.Label>
                    <select
                      className={
                        this.hasErrorFor('status') ? "form-control is-invalid" : "form-control"
                      }
                      name="status"
                      defaultValue={this.props.dataUser.status_id}
                    >
                      <option value="">--Select--</option>
                      <option value="1">Active</option>
                      <option value="2">InActive</option>
                    </select>
                    {error ? (
                      <small style={{ color: "red", fontSize: "12px" }}>
                        {dataErr.data.status}
                      </small>
                    ) : null}
                  </Form.Group>
                  <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>User Type</Form.Label>
                    <select
                      className={
                        this.hasErrorFor('user_role') ? "form-control is-invalid" : "form-control"
                      }
                      name="user_role"
                      defaultValue={this.props.dataUser.user_role_id}
                    >
                      <option value="">--Select--</option>
                      <option value="1">Admin</option>
                      <option value="2">Operator</option>
                    </select>
                    {error ? (
                      <small style={{ color: "red", fontSize: "12px" }}>
                        {dataErr.data.user_role}
                      </small>
                    ) : null}
                  </Form.Group>
                  <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Department</Form.Label>
                    <select
                      className={
                        this.hasErrorFor('department') ? "form-control is-invalid" : "form-control"
                      }
                      name="department"
                      defaultValue={this.props.dataUser.department_id}
                    >
                      <option value="">--Select--</option>
                      <option value="1">HRD</option>
                      <option value="5">Finance</option>
                      <option value="9">Marketing</option>
                      <option value="3">IT</option>
                      <option value="4">General</option>
                    </select>
                    {error ? (
                      <small style={{ color: "red", fontSize: "12px" }}>
                        {dataErr.data.department}
                      </small>
                    ) : null}
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </div>
            </div>
          </Modal.Body>
        </Modal>
        {/* End Edit Modal */}
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
    updateusera: (id, data) => dispatch(updateusera(id, data)),
  };
};

export default connect(mapStateToProp, mapDispatchToProps)(EditModalUser);
