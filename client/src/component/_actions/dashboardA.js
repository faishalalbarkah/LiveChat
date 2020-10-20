import axios from "axios";

export const getoperatoronlineA = () => {
  const access_token = localStorage.getItem("access_token");
  return {
    type: "GET_OperatorOnline",
    payload: axios({
      method: "GET",
      url: process.env.REACT_APP_API_URL +"/admin/dashboard/operator-online",
      headers: {
        Authorization: "Bearer " + JSON.parse(access_token),
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }),
  };
};

export const getusersonlineA =(id)=> {
  const access_token = localStorage.getItem("access_token");
  return {
    type: "GET_UsersOnline",
    payload: axios({
      method:"GET",
      url: process.env.REACT_APP_API_URL + "/admin/dashboard/guest-online",
      headers: {
        Authorization: "Bearer " + JSON.parse(access_token),
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
  }
}
