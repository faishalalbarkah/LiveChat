import axios from "axios";


export const createdepartmenta = (data) => {
  const access_token = localStorage.getItem("access_token");
  return {
    type: "POST_Department",
    payload: axios({
      method: "POST",
      url: process.env.REACT_APP_API_URL + "/admin/department/create",
      headers: {
        Authorization: "Bearer " + JSON.parse(access_token),
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data,
    })
    .then((response) => {
      window.location.href = process.env.REACT_APP_URL + "/DepartmentList";
      
    }),
  };
};

export const getdepartmenta = (page) => {
  const access_token = localStorage.getItem("access_token");
  return {
    type: "GET_Department",
    payload: axios({
      method: "GET",
      url: process.env.REACT_APP_API_URL + "/admin/departments",
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

export const deletedepartmenta = (id) => {
  const access_token = localStorage.getItem("access_token");
  return {
    type: "DELETE_Department",
    payload: axios({
      method: "DELETE",
      url: process.env.REACT_APP_API_URL + `/admin/department/${id}/delete`,
      headers: {
        Authorization: "Bearer " + JSON.parse(access_token),
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }),
  };
};

export const editdepartmenta = (data, id) => {
  const access_token = localStorage.getItem("access_token");
  return {
    type: "PUT_Department",
    payload: axios({
      method: "POST",
      url: process.env.REACT_APP_API_URL + `/admin/department/${id}/update`,
      headers: {
        Authorization: "Bearer " + JSON.parse(access_token),
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: data,
    }).then((response) => {
      window.location.href = process.env.REACT_APP_URL + "/DepartmentList";
    }),
  };
};

// export const getbyiddepartmenta = (id) => {
//   const access_token = localStorage.getItem("access_token");
//   return {
//     type: "GETID_Department",
//     payload: axios({
//       method: "GET",
//       url: `http://18.139.158.80/ab/api/admin/department/${id}/get`,
//       headers: {
//         Authorization: "Bearer " + JSON.parse(access_token),
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//     })
//   }
// }
