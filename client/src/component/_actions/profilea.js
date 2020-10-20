import axios from "axios";

export const getprofilea = (data) => {
  const access_token = localStorage.getItem("access_token");
  return {
    type: "GET_Profile",
    payload: axios({
      method: "GET",
      url: process.env.REACT_APP_API_URL + "/admin/profile",
      headers: {
        Authorization: "Bearer " + JSON.parse(access_token),
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data,
    }),
  };
};

export const updateprofilea = (data) => {
  const access_token = localStorage.getItem("access_token");
  return {
    type: "PUT_Profile",
    payload: axios({
      method: "POST",
      url: process.env.REACT_APP_API_URL + "/admin/profile/update",
      headers: {
        Authorization: "Bearer " + JSON.parse(access_token),
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data:data
    }).then((response) => {
      window.location.href = process.env.REACT_APP_URL +"/UpdateProfile";
    })
  };
};

export const changepasswordA = (data) => {
  const access_token = localStorage.getItem("access_token");
  return {
    type: "PUT_Change",
    payload: axios ({
      method:"POST",
      url: process.env.REACT_APP_API_URL + "/admin/profile/change-password",
      headers: {
        Authorization: "Bearer " + JSON.parse(access_token),
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data:data
    }).then((response) => {
      window.location.href = process.env.REACT_APP_URL +"/ChangePassword";
    })
  }
}