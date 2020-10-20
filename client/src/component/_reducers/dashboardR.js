const initialState = {
  GetOperatorOnline: [],
  GetUsersOnline: [],
  error: false,
  isLoading: false,
  dataErr: "",
  isOperatorOnline: false,
};

const dashboardR = (state = initialState, action) => {
  switch (action.type) {
    case "GET_OperatorOnline_PENDING":
      return {
        ...state,
        isLoading: true,
      };
    case "GET_OperatorOnline_FULFILLED":
      // console.log(action.payload.data.data)
      return {
        ...state,
        GetOperatorOnline: action.payload.data,
        isLoading: false,
        // isOperatorOnline:true
      };
    case "GET_OperatorOnline_REJECTED":
      return {
        ...state,
        isLoading: false,
        error: true,
        dataErr: action.payload.response,
      };

    //Get Users
    case "GET_UsersOnline_PENDING":
      return {
        ...state,
        isLoading: true,
      };
    case "GET_UsersOnline_FULFILLED":
      // console.log(action.payload.data.data)
      return {
        ...state,
        GetUsersOnline: action.payload.data,
        isLoading: false,
        // isOperatorOnline:true
      };
    case "GET_UsersOnline_REJECTED":
      return {
        ...state,
        isLoading: false,
        error: true,
        dataErr: action.payload.response,
      };
    default:
      return state;
  }
};

export default dashboardR;
