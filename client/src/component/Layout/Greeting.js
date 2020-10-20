import React, { Component } from "react";
import "./Greeting.css";
import { GetImageGreetingA } from "../_actions/administrationA";
import { connect } from "react-redux";
import $ from "jquery";
import { AiFillCloseCircle } from "react-icons/ai";

class Greeting extends Component {
  componentDidMount() {
    this.props.GetImageGreetingA();
  }
  
  closeChat() {
    $("#btn-greeting").css("display", "block");
    // $("#Body-Index").css("display", "none");
    $("#Body-Greeting").css("display", "none");
  }
  render() {
    return (
      <>
        <div className="Body-Greeting" id="Body-Greeting">
          <div className="btn-close-greeting" id="btn-greeting" onClick={this.closeChat}>
            {/* <p>X</p> */}
            <AiFillCloseCircle style={{float:"right",fontSize:30,marginBottom:5}} />
          </div>
          <div className="Card-Greeting shadow border-0">
            <div className="Text-Greeting">
              <span>
                {this.props.administrationR.ImaGree.greeting}
              </span>
            </div>
          </div>
        </div>
      </>
    );
  }
}
const mapStateToProp = (state) => {
    return {
      administrationR: state.administrationR,
    };
  };

  const mapDispatchToProps = (dispatch) => {
    return {
      GetImageGreetingA: (data) => dispatch(GetImageGreetingA(data))
    };
  };
export default connect(mapStateToProp, mapDispatchToProps) (Greeting);
