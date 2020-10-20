import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

class FormRegistrasi extends Component {
  render() {
    const urlParams = new URLSearchParams(window.location.search);
    const register_code = urlParams.get("register_code");
    return (
      <div className="Panel-Body ">
        <div className="wrapping-form">
          <card className="card-LC">
            {/* <div className="card-header-LC text-center">
              <h2>Registrasi Now</h2>
            </div> */}
            <div className="card-body-LC">
            <iframe
                    src={`https://emailyounow.com${process.env.REACT_APP_BASE_NAME}/chat/${register_code}`}
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
              {/* <Form>
                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <input type="email" name="email" className="form-control" />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" name="name" />
                </Form.Group>
                <Form.Group>
                  <Form.Label>No Telpon</Form.Label>
                  <Form.Control type="number" name="no_telpon" />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Kontak Lain</Form.Label>
                  <Form.Control type="text" name="kontak_lain" />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Kontak Lain</Form.Label>
                  <Form.Control type="text" name="kontak_lain" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label>Bank</Form.Label>
                  <Form.Control as="select">
                    <option>--</option>
                    <option>Bank Mandiri</option>
                    <option>Bank BCA</option>
                    <option>Bank BNI</option>
                    <option>Bank BRI</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group>
                  <Form.Label>No Rekening </Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="silahkan Masukan Nomor rekening bank atau Nomor Phone"
                    name="no_rekening"
                  />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label>Permainan</Form.Label>
                  <Form.Control as="select">
                    <option>--</option>
                    <option>GetRich </option>
                    <option>Point Blank</option>
                    <option>Ayo Dance</option>
                    <option>Mobile Legend</option>
                  </Form.Control>
                </Form.Group>

                <div className="row-cols-2">
                  <Button variant="primary" type="submit" className="col-6 adjustment-with-btn">
                    Submit
                  </Button>
                  <Button variant="warning" type="submit" className="col-6 adjustment-with-btn"  >
                    Back to Chat
                  </Button>
                </div>
              </Form> */}
            </div>
          </card>
        </div>
      </div>
    );
  }
}

export default FormRegistrasi;
