const initialState = {
  GetChat:[],
  PostChat:[],
  EndChat:[],
  isLoading: false,
  error: true,
  dataErr: ""
};

const ChatR = (state = initialState, action) => {
  switch (action.type) {
    //Get Chat
    case "Get_Admin_Chat_PENDING":
        return {
            ...state,
        isLoading: true,
        }
    case "Get_Admin_Chat_FULFILLED":
        // console.log(action.payload.data.datas.conversation)
        return {
            ...state,
            GetChat: action.payload.data.datas.conversation,
            isLoading:false
        }
    case "Get_Admin_Chat_REJECTED":
        return {
            ...state,
            isLoading:false,
            dataErr: action.payload.response
        }
    //Post Chat
    case "Post_Admin_Chat_PENDING":
        return {
            ...state,
            isLoading:true
        }
    case "Post_Admin_Chat_FULFILLED":
        return {
            ...state,
            PostChat: action.payload.data,
            isLoading:false
        }
    case "Post_Admin_Chat_REJECTED":
        return {
            ...state,
            isLoading:false,
            dataErr: action.payload.response
        }
    //End Chat
    case "End_Chat_PENDING":
        return {
            ...state,
            isLoading:true
        }
    case "End_Chat_FULFILLED": 
    return {
        ...state,
        EndChat :action.payload.data,
        isLoading:false
    }
    case "End_Chat_REJECTED":
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

export default ChatR
