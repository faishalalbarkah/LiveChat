import React, {Component} from "react"
import {Modal} from "react-bootstrap"
import {AiFillCloseCircle} from "react-icons/ai"
import { FaExternalLinkAlt } from "react-icons/fa";
import { connect } from "react-redux";
import { getusersonlineA } from "../../_actions/dashboardA";

class ModalDashboard extends Component {
    constructor(props){
        super(props)
        this.state = {
            show: false,
        }
    }

    handleModal = () => {
        this.setState({
          show: !this.state.show,
        });
        // this.props.GetChatA(id);
        // this.props.getusersonlineA(id);
        // console.log("nama",id)
      };
      handleClose = () => {
        this.setState({
          show: !this.state.show
        })
      }
    
      getById = id => {
        this.props.getusersonlineA(this.props.id);
        this.handleModal()
        console.log(id)
      }

      render(){
        const { GetUsersOnline } = this.props.dashboardR;
        // let data = GetUsersOnline.data.guest;
        // let data_popovers = GetUsersOnline.data;
        const AllData = this.props.id
        // console.log(AllData)
          return (
              <>
            <FaExternalLinkAlt
            onClick={this.getById}
            
            style={{
              float: "right",
              margin: "5px",
              color:'#92959E'
            }}
          />
            <Modal show={this.state.show} onHide={this.handleModal}>
          <Modal.Header>
            <p>View Users</p>

            <button id="btn-modal-DL" onClick={this.handleClose}>
              <AiFillCloseCircle id="icon-modal-DL" /> Exit
            </button>
          </Modal.Header>
          <Modal.Body>
            <div className="btn-modal-body-view-DL">
              <div className="btn-modal-panel-body-view-DL">
                <table border="1">
                  <tr>
                    <td>Name</td>
                    <td>{AllData.guest.name}</td>
                  </tr>
                  <tr>
                    <td>Email</td>
                    <td>{AllData.guest.email}</td>
                  </tr>
                  <tr>
                    <td>IP Address</td>
                    <td>{AllData.ip_address}</td>
                  </tr>
                  <tr>
                    <td>Url</td>
                    <td>{AllData.url}</td>
                  </tr>
                </table>
              </div>
            </div>
          </Modal.Body>
        </Modal>
        </>
          )
      }
}

const mapStateToProp = (state) => {
    return {
      dashboardR: state.dashboardR,
    };
  };
  
const mapDispatchToProps = (dispatch) => {
    return {
      getusersonlineA: (data, id) =>
        dispatch(getusersonlineA( data,id)),

    };
  };
export default connect(mapStateToProp, mapDispatchToProps)(ModalDashboard)