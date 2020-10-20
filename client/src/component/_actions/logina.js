import axios from "axios";

export const logina = (data) => {
  return {
    type: "POST_LOGIN",
    payload: axios({
      method: "POST",
      url: process.env.REACT_APP_API_URL + "/admin/login",
      data: data,
    }).then(function (response) {
      // handle success
      localStorage.setItem(
        "access_token",
        JSON.stringify(response.data.access_token)
      );
      if (response.data.access_token) {
        window.location.href = process.env.REACT_APP_URL + "/DashboardAdmin";
      }
    }),
  };
};

