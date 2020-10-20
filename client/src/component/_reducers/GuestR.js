const initialState = {
  dataGuest: [],
  ChatGuest:[],
  GetGuest:[],
  EndGuest:[],
  isLoading: false,
  error: false,
  dataErr: "",
  isLogin: false,
};

const GuestR = (state = initialState, action) => {
  switch (action.type) {
    //POST Guest
    case "POST_Guest_LOGIN_PENDING":
      return {
        ...state,
        isLoading: true,
      };
    case "POST_Guest_LOGIN_FULFILLED":
      return {
        ...state,
        isLoading: false,
        dataGuest: action.payload.data.results,
        isLogin: true,
      };
    case "POST_Guest_LOGIN_REJECTED":
      return {
        ...state,
        isLoading: false,
        error: true,
        dataErr: action.payload.response.data,
      };
      //Post Chat Guest
      case "POST_Guest_Chat_PENDING":
        return {
          ...state,
          isLoading:false
        }
      case "POST_Guest_Chat_FULFILLED":
        console.log( action.payload.data,)
        return {
          ...state,
          isLoading:false,
          ChatGuest: action.payload.data,
        }
      case "POST_Guest_Chat_REJECTED":
        return{
          ...state,
          isLoading:false,
          error:true,
          dataErr: action.payload.response.data
        }
        //Get Chat Guest
        case "GET_Guest_Chat_PENDING":
          return{
            ...state,
            isLoading:false
          }
        case "GET_Guest_Chat_FULFILLED":
          // console.log(action.payload.data.datas.conversation)
          return {
            ...state,
            isLoading:false,
            GetGuest: action.payload.data.datas.conversation
          }
        case "GET_Guest_Chat_REJECTED":
          return {
            ...state,
            isLoading:false,
            dataErr: action.payload.response
          }
          //End Chat Guest
          case "PUT_Guest_Chat_PENDING":
            return {
              ...state,
              isLoading:true
            }
          case "PUT_Guest_Chat_FULFILLED":
            return {
              ...state,
              EndGuest: action.payload.data,
              isLoading:false
            }
          case "PUT_Guest_Chat_REJECTED":
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

export default GuestR;
