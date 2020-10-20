const initialState = {
  getOM: [],
  delOM: [],
  dataErr: "",
  error: false,
  success:false,
  isLoading: false,
};

const offlinemessagesR = (state = initialState, action) => {
  switch (action.type) {
    //Get
    case "GET_OffMessage_PENDING":
      return {
        ...state,
        isLoading: true,
      };
    case "GET_OffMessage_FULFILLED":
      return {
        ...state,
        getOM: action.payload.data,
        isLoading: false,
      };
    case "GET_OffMessage_REJECTED":
      return {
        ...state,
        isLoading: false,
        error: true,
        dataErr: action.payload.response,
      };
    //Delete
    case "DELETE_OM_PENDING":
      return {
        ...state,
        isLoading: false,
      };
    case "DELETE_OM_FULFILLED":
      return {
        ...state,
        delOM: action.payload.data,
        isLoading: false,
        success:true
      };
    case "DELETE_OM_REJECTED":
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

export default offlinemessagesR;
