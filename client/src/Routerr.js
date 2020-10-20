import React, { Component } from "react";
import { getprofilea } from "./component/_actions/profilea";
import { connect } from "react-redux";
import PrivateRoute from "./Utils/PrivateRoute";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import DashboardAdmin from "./component/Admin/DashboardAdmin";
import ViewProfile from "./component/Admin/Profile/ViewProfile";
import UpdateProfile from "./component/Admin/Profile/UpdateProfile";
import ChangePassword from "./component/Admin/Profile/ChangePassword";
import AllUser from "./component/Admin/User/AllUser";
import AddNew from "./component/Admin/User/AddNew";
import AddDepartment from "./component/Admin/Department/AddDepartment";
import DepartmentList from "./component/Admin/Department/DepartmentList";
import AddNewMessages from "./component/Admin/Messages/AddNewMessages";
import CannedMessages from "./component/Admin/Messages/CannedMessages";
import OfflineMessages from "./component/Admin/Messages/OfflineMessages";
import GeneralSetting from "./component/Admin/Administration/GeneralSetting";
import WidgetSetting from "./component/Admin/Administration/WidgetSetting";
import BlacklistUrl from "./component/Admin/Administration/BlacklistUrl";
import ChatHistory from "./component/Admin/Administration/ChatHistory";
import LanguageList from "./component/Admin/Administration/LanguageList";
import HalChatHistory from "./component/Admin/HalChatHistory";
import Login from "./component/Admin/Login/Login";
import Registrasi from "./component/Admin/Form/Members/Registrasi";
import Deposit from "./component/Admin/Form/Deposit/Deposit";
import Withdraw from "./component/Admin/Form/Withdraw/Withdraw";
import Widgetcode from "./component/Admin/Widget/Widgetcode";

import Index from "./component/Layout/Index";
import OfflineMessage from "./component/Layout/OfflineMessage";

class Routerr extends Component {
  renderRouter() {
    if (this.props.profiler.getprofile.user_role !== null || undefined) {
      if (this.props.profiler.getprofile.user_role === "Operator") {
        if (this.props.profiler.getprofile.user_role !== "Admin") {
          return (
            <>
              <PrivateRoute
                path="/DashboardAdmin"
                component={DashboardAdmin}
                title="Dashboard Admin"
              />
              <PrivateRoute path="/ViewProfile" component={ViewProfile} />
              <PrivateRoute path="/UpdateProfile" component={UpdateProfile} />
              <PrivateRoute path="/ChangePassword" component={ChangePassword} />
              <PrivateRoute>
                <Redirect to="/DashboardAdmin" />
              </PrivateRoute>
            </>
          );
        } else {
          return (
            <>
              <PrivateRoute>
                <Redirect to="/DashboardAdmin" />
              </PrivateRoute>
            </>
          );
        }
      } else {
        return (
          <>
            <PrivateRoute
              path="/DashboardAdmin"
              component={DashboardAdmin}
              title="Dashboard Admin"
            />
            <Route path="/Index" component={Index} />
            <PrivateRoute path="/ViewProfile" component={ViewProfile} />
            <PrivateRoute path="/UpdateProfile" component={UpdateProfile} />
            <PrivateRoute path="/ChangePassword" component={ChangePassword} />
            <PrivateRoute path="/AllUser" component={AllUser} />
            <PrivateRoute path="/AddNew" component={AddNew} />
            <PrivateRoute path="/AddDepartment" component={AddDepartment} />
            <PrivateRoute path="/DepartmentList" component={DepartmentList} />
            <PrivateRoute path="/AddNewMessages" component={AddNewMessages} />
            <PrivateRoute path="/CannedMessages" component={CannedMessages} />
            <PrivateRoute path="/OfflineMessages" component={OfflineMessages} />
            <PrivateRoute path="/GeneralSetting" component={GeneralSetting} />
            <PrivateRoute path="/WidgetSetting" component={WidgetSetting} />
            <PrivateRoute path="/BlacklistUrl" component={BlacklistUrl} />
            <PrivateRoute path="/ChatHistory" component={ChatHistory} />
            <PrivateRoute path="/LanguageList" component={LanguageList} />
            <PrivateRoute path="/HalChatHistory" component={HalChatHistory} />
            <PrivateRoute path="/Registrasi" component={Registrasi} />
            <PrivateRoute path="/Deposit" component={Deposit} />
            <PrivateRoute path="/Withdraw" component={Withdraw} />
            <PrivateRoute path="/Widgetcode" component={Widgetcode} />
          </>
        );
      }
    } else {
      return <Redirect to="/Login" />;
    }
  }
  render() {
    return (
      <Router basename={process.env.REACT_APP_BASE_NAME}>
        <Switch>
          <Route path="/Index" component={Index} />
          <Route path="/OfflineMessage" component={OfflineMessage} />
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/Login" component={Login}  />
          <div>{this.renderRouter()}</div>
        </Switch>
      </Router>
    );
  }
}

const mapStateToProp = (state) => {
  return {
    profiler: state.profiler,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getprofilea: (data) => dispatch(getprofilea(data)),
  };
};

export default connect(mapStateToProp, mapDispatchToProps)(Routerr);
