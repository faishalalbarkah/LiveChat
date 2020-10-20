import axios from "axios";

export const createusera = (data) => {
  const access_token = localStorage.getItem("access_token");
  return {
    type: "POST_CreateUser",
    payload: axios({
      method: "POST",
      url: process.env.REACT_APP_API_URL + "/admin/user/create",
      headers: {
        Authorization: "Bearer " + JSON.parse(access_token),
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data,
    }),
  };
};

export const getusera = (page) => {
  const access_token = localStorage.getItem("access_token");
  return {
    type: "GET_GetUser",
    payload: axios({
      method: "GET",
      url: process.env.REACT_APP_API_URL + "/admin/users",
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

export const deletusera = (id) => {
  const access_token = localStorage.getItem("access_token");
  return {
    type: "DELETE_DeleteUser",
    payload: axios({
      method: "DELETE",
      url: process.env.REACT_APP_API_URL + `/admin/user/${id}/delete`,
      headers: {
        Authorization: "Bearer " + JSON.parse(access_token),
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then((res) => {
      window.location.href = process.env.REACT_APP_URL +"/AllUser";
    }),
  };
};

export const updateusera = (data, id) => {
  const access_token = localStorage.getItem("access_token");
  return {
    type: "PUT_USER",
    payload: axios({
      method: "POST",
      url: process.env.REACT_APP_API_URL + `/admin/user/${id}/update`,
      headers: {
        Authorization: "Bearer " + JSON.parse(access_token),
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: data,
    }).then((response) => {
      window.location.href = process.env.REACT_APP_URL +"/AllUser";
    }),
  };
};
