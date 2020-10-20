import axios from "axios";

export const GetChatA = (id) => {
  // console.log(id)
  const access_token = localStorage.getItem("access_token");
  return {
    type: "Get_Admin_Chat",
    payload: axios({
      method: "GET",
      url: process.env.REACT_APP_API_URL + `/admin/dashboard/${id}`,
      headers: {
        Authorization: "Bearer " + JSON.parse(access_token),
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }),
  };
};

export const PostChatA = (id, data) => {
  const access_token = localStorage.getItem("access_token");
  return {
    type: "Post_Admin_Chat",
    payload: axios({
      method: "POST",
      url: process.env.REACT_APP_API_URL + `/admin/dashboard/${id}`,
      headers: {
        Authorization: "Bearer " + JSON.parse(access_token),
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data,
    }),
  };
};

export const EndChatA = (id) => {
  const access_token = localStorage.getItem("access_token");
  return {
    type: "End_Chat",
    payload: axios({
      method: "PUT",
      url: process.env.REACT_APP_API_URL + `/admin/dashboard/${id}/end`,
      headers: {
        Authorization: "Bearer " + JSON.parse(access_token),
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }),
  };
};
