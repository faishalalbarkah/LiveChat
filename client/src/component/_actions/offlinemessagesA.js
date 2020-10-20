import axios from "axios";

export const getoffmessageA = (page) => {
  const access_token = localStorage.getItem("access_token");
  return {
    type: "GET_OffMessage",
    payload: axios({
      method: "GET",
      url: process.env.REACT_APP_API_URL + "/admin/offline/messages",
      params: {
        page: page,
      },
      headers: {
        Authorization: "Bearer " + JSON.parse(access_token),
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }),
  };
};

export const deletoffmessageA = (id) => {
  const access_token = localStorage.getItem("access_token");
  return {
    type: "DELETE_OM",
    payload: axios({
      method: "DELETE",
      url: process.env.REACT_APP_API_URL + `/admin/offline/message/${id}/delete`,
      headers: {
        Authorization: "Bearer " + JSON.parse(access_token),
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }),
  };
};
