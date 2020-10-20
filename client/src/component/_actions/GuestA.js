import axios from "axios";

export const LoginGuestA = (data) => {
  return {
    type: "POST_Guest_LOGIN",
    payload: axios({
      method: "POST",
      url: process.env.REACT_APP_API_URL + "/guest/chat/start",
      data: data,
    }),
  };
};

export const PostGuestA = (data) => {
  // const token = localStorage.getItem("token");
  const conversation_uuid = localStorage.getItem("conversation_uuid");
  console.log(conversation_uuid);
  return {
    type: "POST_Guest_Chat",
    payload: axios({
      method: "POST",
      url: process.env.REACT_APP_API_URL + `/guest/chat/${conversation_uuid}`,
      headers: {
        // Authorization: "Bearer " + JSON.parse(token),
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: data,
    }),
  };
};

export const GetGuestA = () => {
  // const token = localStorage.getItem("token");
  const conversation_uuid = localStorage.getItem("conversation_uuid");
  // console.log(token)
  // console.log(`http://18.139.158.80/ab/api/guest/chat/${conversation_uuid}`)
  return {
    type: "GET_Guest_Chat",
    payload: axios({
      method: "GET",
      url: process.env.REACT_APP_API_URL + `/guest/chat/${conversation_uuid}`,
      headers: {
        // Authorization: "Bearer " + JSON.parse(token),
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }),
  };
};

export const EndGuestA = () => {
  const conversation_uuid = localStorage.getItem("conversation_uuid");
  return {
    type:"PUT_Guest_Chat",
    payload: axios ({
      method: "PUT",
      url: process.env.REACT_APP_API_URL + `/guest/chat/${conversation_uuid}/end`,
      headers: {
        // Authorization: "Bearer " + JSON.parse(token),
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
  }
}
