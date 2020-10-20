const initialState = {
  getGS: [],
  UpdateSetting: [],
  ImageSetting: [],
  ImaGree: [],
  GetChatHistory:[],
  GetChatHistoryById:[],
  error: false,
  isLoading: false,
  success: false,
  dataErr: "",
};

const administrationR = (state = initialState, action) => {
  switch (action.type) {
    case "GET_General_PENDING":
      return {
        ...state,
        isLoading: true,
      };
    case "GET_General_FULFILLED":
      return {
        ...state,
        getGS: action.payload.data,
        isLoading: false,
      };
    case "GET_General_REJECTED":
      return {
        ...state,
        isLoading: false,
        error: true,
        dataErr: action.payload.response,
      };
    //Enable / Disabled Offline Mode
    case "PUT_ModeOffline_PENDING":
      return {
        ...state,
        isLoading: true,
      };
    case "PUT_ModeOffline_FULFILLED":
      return {
        ...state,
        UpdateSetting: action.payload.data,
        success: true,
        error: false,
      };
    case "PUT_ModeOffline_REJECTED":
      return {
        ...state,
        isLoading: false,
        error: true,
        dataErr: action.payload.response,
      };
    //Upload Image
    case "PUT_Setting_PENDING":
      return {
        ...state,
        isLoading: true,
      };
    case "PUT_Setting_FULFILLED":
      return {
        ...state,
        ImageSetting: action.payload.data,
        success: true,
        error: false,
      };
    case "PUT_Setting_REJECTED":
      return {
        ...state,
        isLoading: false,
        error: true,
        dataErr: action.payload.response,
      };
    //Get Image and Greeting
    case "GET_ImaGree_PENDING":
      return {
        ...state,
        isLoading: true,
      };
    case "GET_ImaGree_FULFILLED":
      return {
        ...state,
        ImaGree: action.payload.data,
        isLoading: false,
      };
    case "GET_ImaGree_REJECTED":
      return {
        ...state,
        isLoading: false,
        error: true,
        dataErr: action.payload.response,
      };
    //Get ChatHistory
    case "GET_ChatHistory_PENDING":
      return {
        ...state,
        isLoading:true
      }
    case "GET_ChatHistory_FULFILLED":
      return {
        ...state,
        GetChatHistory: action.payload.data,
        isLoading:false
      }
    case "GET_ChatHistory_REJECTED":
      return {
        ...state,
        isLoading:false,
        error:true,
        dataErr: action.payload.response
      }
    //Get ChatHistoryById
    case "GET_ChatHistoryById_PENDING":
      return {
        ...state,
        isLoading:true
      }
    case "GET_ChatHistoryById_FULFILLED":
      return {
        ...state,
        GetChatHistoryById:action.payload.data,
        isLoading:false
      }
    case "GET_ChatHistoryById_REJECTED":
      return {
        ...state,
        isLoading:false,
        error:true,
        dataErr: action.payload.response
      }
    default:
      return state;
  }
};

export default administrationR;
