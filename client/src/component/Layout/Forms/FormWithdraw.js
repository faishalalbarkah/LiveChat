import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

class FormWithdraw extends Component {
  render() {
    const urlParams = new URLSearchParams(window.location.search);
    const withdraw_code = urlParams.get("withdraw_code");
    return (
      <div className="Panel-Body ">
        <div className="wrapping-form">
          <card className="card-LC">
            {/* <div className="card-header-LC text-center">
                  <h2>Formulir Withdraw</h2>
                </div> */}
            <div className="card-body-LC">
              {/* <div className="alert alert-danger text-center" style={{margin:5, position:"absolute",width:"91%"}}>
                ID yang anda masukan salah,silahkan hubungi CS Kami
              </div> */}
              {/* <Form>
                <Form.Group>
                  <Form.Label>User ID</Form.Label>
                  <input className="form-control" type="text" name="userid" />
                  <Button variant="danger" >Check</Button>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Jumlah Withdraw</Form.Label>
                  <input
                    className="form-control"
                    type="number"
                    name="total_withdraw"
                  />
                </Form.Group>
                <div className="row-cols-2">
                  <Button variant="primary" type="submit" className="col-6 adjustment-with-btn"  >
                    Submit
                  </Button>
                  <Button variant="warning" type="submit" className="col-6 adjustment-with-btn"  >
                    Back to Chat
                  </Button>
                </div>
              </Form> */}
               <iframe
                    src={`https://emailyounow.com${process.env.REACT_APP_BASE_NAME}/chat/${withdraw_code}`}
                    style={{
                      overflow: "hidden",
                      width: "100%",
                      height: "100%",
                    }}
                    height="100%"
                    width="100%"
                    frameborder="0"
                    allowfullscreen
                  ></iframe>
            </div>
          </card>
        </div>
      </div>
    );
  }
}

export default FormWithdraw;
