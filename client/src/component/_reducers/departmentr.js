const initialState = {
    datadepartment : [],
    getdepartment: [],
    deletedepartment: [],
    editdepartment:[],
    getbyiddepartment:[],
    dataErr : "",
    error:false,
    isLoading:false,
    isAdd:false
}

const departmentr = (state = initialState, action) => {
    switch(action.type) {
        // Create
        case "POST_Department_PENDING":
            return {
                ...state,
                isLoading:true
            };
        case "POST_Department_FULFILLED":
            return {
                ...state,
                datadepartment:action.payload.data,
                isLoading:false,
                // isAdd:true
            };
        case "POST_Department_REJECTED":
            return{
                ...state,
                isLoading:false,
                error:true,
                dataErr: action.payload.response
            }

        //GET 
        case "GET_Department_PENDING":
            return {
                ...state,
                isLoading:true
            };
        case "GET_Department_FULFILLED":
            console.log("cek1",action.payload.data)
            return {
                ...state,
                getdepartment:action.payload.data,
                isLoading:false,
                // isAdd:true
            };
        case "GET_Department_REJECTED":
            return{
                ...state,
                isLoading:false,
                dataErr: action.payload.response
            }

        //DELETE
        case "DELETE_Department_PENDING":
            return{
                ...state,
                isLoading:true
            };
        case "DELETE_Department_FULFILLED":
            return {
                ...state,
                deletedepartment: action.payload.data,
                isLoading:false,
            };
        case "DELETE_Department_REJECTED":
            return {
                ...state,
                isLoading:false,
                dataErr:action.payload.response
            }

        //Edit
        case "PUT_Department_PENDING":
            return{
                ...state,
                isLoading:true
            }
        case "PUT_Department_FULFILLED":
            return {
                ...state,
                editdepartment: action.payload.data,
                isLoading:false
            }
        case "PUT_Department_REJECTED":
            return {
                ...state,
                isLoading:false,
                error:true,
                dataErr: action.payload.response
            }

        //Get By Id
        case "GETID_Department_PENDING":
            return{
                ...state,
                isLoading:true
            }
        case "GETID_Department_FULFILLED":
            return {
                ...state,
                getbyiddepartment: action.payload.data,
                isLoading:false
            }
        case "GETID_Department_REJECTED":
            return {
                ...state,
                isLoading:false,
                dataErr:action.payload.response
            }
        default:
            return state;
    }
}

export default departmentr