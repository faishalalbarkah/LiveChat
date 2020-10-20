const initialState = {
  data: [],
  dataErr: "",
  // message:'',
  error: false,
  isLogin: false,
  isLoading: false,
};

const loginr = (state = initialState, action) => {
  switch (action.type) {
    case "POST_LOGIN_PENDING":
      return {
        ...state,
        isLoading: true,
      };
    case "POST_LOGIN_FULLFILED":
      return {
        ...state,
        data: action.payload.data,
        isLoading: false,
        isLogin: true,
      };
    case "POST_LOGIN_REJECTED":
      return {
        ...state,
        isLoading: false,
        error: true,
        dataErr: action.payload.response.data,
      };
    default:
      return state;
  }
};

export default loginr;
