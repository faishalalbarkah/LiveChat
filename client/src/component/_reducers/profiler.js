const initialState = {
    getprofile: [],
    editprofile:[],
    changeprofile:[],
    dataErr: "",
    error:false,
    isLoading:false,
    isProfile:false
}

const profiler = (state = initialState, action) => {
    switch(action.type) {
        //GET
        case "GET_Profile_PENDING":
            return{
                ...state,
                isLoading:true
            }
        case "GET_Profile_FULFILLED":
            return{
                ...state,
                getprofile: action.payload.data,
                isLoading:false,
                isProfile:true
            }
        case "GET_Profile_REJECTED":
            return {
                ...state,
                isLoading:false,
                error:true,
                dataErr: action.payload.response
            }

        //PUT
        case "PUT_Profile_PENDING":
            return {
                ...state,
                isLoading:true
            }
        case "PUT_Profile_FULFILLED":
            return {
                ...state,
                isLoading:false,
                editprofile: action.payload.data
            }
        case "PUT_Profile_REJECTED":
            return {
                ...state,
                isLoading:true,
                error:true,
                dataErr: action.payload.response
            }

        //PUT Change Password
        case "PUT_Change_PENDING":
            return{
                ...state,
                isLoading:true
            }
        case "PUT_Change_FULFILLED":
            return{
                ...state,
                isLoading:false,
                changeprofile:action.payload.data
            }
        case "PUT_Change_REJECTED":
            return {
                ...state,
                isLoading:true,
                error:true,
                dataErr: action.payload.response
            }
        default:
            return state;
    }
}

export default profiler