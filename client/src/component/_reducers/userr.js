const initialState = {
    createuser:[],
    getuser:[],
    deleteuser:[],
    edituser:[],
    error:false,
    isLoading:false,
    isAddUser:false,
    dataErr:""
}

const userr = (state = initialState, action) => {
    switch(action.type){
        case "POST_CreateUser_PENDING":
            return{
                ...state,
                isLoading:true
            }
        case "POST_CreateUser_FULFILLED":
            return {
                ...state,
                createuser: action.payload.data,
                isLoading:false,
                isAddUser:true
            }
        case "POST_CreateUser_REJECTED":
            return{
                ...state,
                isLoading:false,
                error:true,
                dataErr:action.payload.response
            }
        //Get
        case "GET_GetUser_PENDING":
            return{
                ...state,
                isLoading:true
            }
        case "GET_GetUser_FULFILLED":
            return {
                ...state,
                getuser: action.payload.data,
                isLoading:false,
                isAddUser:true
            }
        case "GET_GetUser_REJECTED":
            return{
                ...state,
                isLoading:false,
                dataErr:action.payload.response
            }
        //Delete
        case "DELETE_DeleteUser_PENDING":
            return {
                ...state,
                isLoading:true
            }
        case "DELETE_DeleteUser_FULFILLED":
            return {
                ...state,
                deleteuser: action.payload.data.data,
                isLoading:false
            }
        case"DELETE_DeleteUser_REJECTED":
        return{
            ...state,
            isLoading:false,
            dataErr:action.payload.response
        }
        //Edit
        case "PUT_USER_PENDING":
            return {
                ...state,
                isLoading:true
            }
        case "PUT_USER_FULFILLED":
            return {
                ...state,
                edituser: action.payload.data,
                isLoading:false
            }
        case "PUT_USER_REJECTED":
            return {
                ...state,
                isLoading:false,
                error:true,
                dataErr:action.payload.response
            }
            default:
                return state;
    }
}

export default userr