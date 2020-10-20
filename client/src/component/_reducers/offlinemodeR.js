const initialState = {
  PostOfMod: [],
  isLoading: false,
  error: false,
  dataErr: "",
};

const offlinemodeR = (state = initialState, action) => {
  switch (action.type) {
    case "POST_Guest_Offline_PENDING":
      return {
        ...state,
        isLoading: true,
      };
    case "POST_Guest_Offline_FULFILLED":
      return {
        ...state,
        isLoading: false,
        PostOfMod: action.payload.data,
        error: false,
      };
    case "POST_Guest_Offline_REJECTED":
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

export default offlinemodeR
