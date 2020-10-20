import React, { Component } from "react";
import { Form, Col, Row } from "react-bootstrap";
import Header from "../common/Header";
import Menu from "../common/Menu";
import "./AddDepartment.css";
import { connect } from "react-redux";
import { createdepartmenta } from "../../_actions/departmenta";
import swal from "sweetalert";

class AddDepartment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      name: "",
      description: "",
      alert: false,
    };
  }

  handleChangeInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  // hideAlert() {
  //   console.log("Hiding alert...");
  //   this.setState({
  //     alert: true,
  //   });
  // }

  // getAlert = () => (

  // );

  handleOnSubmit = (e) => {
    e.preventDefault();
    const datacreate = {
      name: this.state.name,
      description: this.state.description,
    };
    this.props
      .createdepartmenta(datacreate)
      this.setState({
        redirect: true,

      })
      // .then((response) => {
      //   if ({
      //     name: this.state.name,
      //     description: this.state.description,
      //   }) {
      //     swal({
      //       title: "Success!!",
      //       text: "Department is added to database",
      //       icon: "success",
      //       timer: 2000,
      //       // button: false
      //     });
      //   }
      
    // if(datacreate != null){
    //   swal({
    //     title: "Success!!",
    //     text: "Department is added to database",
    //     icon: "success",
    //     timer: 2000,
    //     // button: false
    //   });
    // }
    e.target.reset();
  };

  // hideAlert = () => {
  //   this.setState({
  //     alert: false,
  //   });
  // };

  componentDidMount() {
    document.title = "Add Department";
  }
  render() {
    const { error, dataErr } = this.props.departmentr;
    return (
      <div className="Body-AD">
        {/* <SweetAlert success title="Woot!" onConfirm={this.handleOnSubmit}>
          Success!!!
        </SweetAlert> */}
        <Header />

        <Row className="mr-0">
          <Menu />

          <Col md={10} className="pl-0 pr-0">
            <div className="Content-Right-AD">
              <div className="page-title-AD">
                <p>Add Department</p>
              </div>
              {/* <Row> */}
              <Col md={12}>
                <div className="Pembungkus-AD">
                  <div className="Pembungkus-Header-AD">
                    <p>Add Department</p>
                  </div>
                  <div className="Panel-body-AD">
                    <Form onSubmit={this.handleOnSubmit}>
                      <Row>
                        <Col md={6}>
                          <Form.Group controlId="formBasicName">
                            <Form.Label>Department</Form.Label>

                            <input
                              className={
                                error
                                  ? "form-control is-invalid"
                                  : "form-control"
                              }
                              type="text"
                              name="name"
                              onChange={this.handleChangeInput}
                            />
                            {error ? (
                              <small style={{ color: "red", fontSize: "12px" }}>
                                {dataErr.data.name}
                              </small>
                            ) : null}
                          </Form.Group>
                          <Form.Group controlId="formBasicEmail">
                            <Form.Label>Description </Form.Label>

                            <textarea
                              className="form-control adjustment-textarea"
                              name="description"
                              onChange={this.handleChangeInput}
                              rows="3"
                            ></textarea>
                          </Form.Group>
                          <div className="ForBTN-AD">
                            {/* <button className="btn btn-danger">
                                    Reset
                                  </button> */}

                            <button className="btn btn-primary">Save</button>

                            {/* {isAdd
                              ? (window.location.href =
                                  "http://18.139.158.80/ab/AddDepartment")
                              : null} */}
                          </div>
                        </Col>
                      </Row>
                    </Form>
                  </div>
                </div>
              </Col>
              {/* </Row> */}
            </div>
          </Col>
        </Row>
        {/* </div>
          </Col>
        </Row> */}
      </div>
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
    createdepartmenta: (data) => dispatch(createdepartmenta(data)),
  };
};
export default connect(mapStateToProp, mapDispatchToProps)(AddDepartment);
