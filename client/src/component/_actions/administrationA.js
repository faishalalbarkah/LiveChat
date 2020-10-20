import axios from "axios";

export const getGSA = (data) => {
  const access_token = localStorage.getItem("access_token");
  return {
    type: "GET_General",
    payload: axios({
      method: "GET",
      url: process.env.REACT_APP_API_URL + "/admin/setting",
      headers: {
        Authorization: "Bearer " + JSON.parse(access_token),
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: data,
    }),
  };
};

export const GetImageGreetingA = (data) => {
  const access_token = localStorage.getItem("access_token");
  return {
    type: "GET_ImaGree",
    payload: axios({
      method: "GET",
      url: process.env.REACT_APP_API_URL + `/guest/setting`,
      headers: {
        Authorization: "Bearer " + JSON.parse(access_token),
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: data,
    }),
  };
};

export const editGSA = (mode) => {
  const access_token = localStorage.getItem("access_token");
  return {
    type: "PUT_ModeOffline",
    payload: axios({
      method: "PUT",
      url:
        process.env.REACT_APP_API_URL +
        `/admin/setting/update?offline_mode=${mode}`,
      headers: {
        Authorization: "Bearer " + JSON.parse(access_token),
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: mode,
    }).then((response) => {
      window.location.href = process.env.REACT_APP_URL + "/DashboardAdmin";
    }),
  };
};

export const SettingA = (data) => {
  const access_token = localStorage.getItem("access_token");
  return {
    type: "PUT_Setting",
    payload: axios({
      method: "POST",
      url: process.env.REACT_APP_API_URL + `/admin/setting/update`,
      headers: {
        Authorization: "Bearer " + JSON.parse(access_token),
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: data,
    }).then((response) => {
      window.location.href = process.env.REACT_APP_URL + "/GeneralSetting";
    }),
  };
};



export const GetChatHistoryA = (page) => {
  const access_token = localStorage.getItem("access_token");
  return {
    type: "GET_ChatHistory",
    payload: axios({
      method: "GET",
      url: process.env.REACT_APP_API_URL + `/admin/chathistory`,
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

export const GetChatHistoryByIdA = (id) => {
  const access_token = localStorage.getItem("access_token");
  return {
    type: "GET_ChatHistoryById",
    payload: axios({
      method: "GET",
      url: process.env.REACT_APP_API_URL + `/admin/chathistory/${id}/history`,
      headers: {
        Authorization: "Bearer " + JSON.parse(access_token),
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }),
  };
};
