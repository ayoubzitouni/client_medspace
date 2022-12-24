import { GET_ALL_USERS_FAIL, GET_ALL_USERS_REQUEST, GET_ALL_USERS_SUCCESS, GET_MEDICAL_REPORT_FAIL, GET_MEDICAL_REPORT_REQUEST, GET_MEDICAL_REPORT_SUCCESS, GET_USER_FAIL, GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_Fail, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_Fail, LOGOUT_REQUEST, LOGOUT_SUCCESS, SIGNUP_DOCTOR_FAIL, SIGNUP_DOCTOR_REQUEST, SIGNUP_DOCTOR_SUCCESS, SIGNUP_FAIL, SIGNUP_REQUEST, SIGNUP_SUCCESS, SUBMIT_APPOINTMENT_FAIL, SUBMIT_APPOINTMENT_REQUEST, SUBMIT_APPOINTMENT_SUCCESS } from "../Constants/Constants";

export const getAllUsersReducer=(state=[],action)=>{
    switch (action.type) {
        case GET_ALL_USERS_REQUEST:
            return{loading:true}
        case GET_ALL_USERS_SUCCESS:
            return{loading:false,patients:action}
        case GET_ALL_USERS_FAIL:
            return{loading:false}
        default:
            return state;
    }
}

export const getUserReducer=(state=[],action)=>{
    switch (action.type) {
        case GET_USER_REQUEST:
            return{loading:true}
        case GET_USER_SUCCESS:
            return{loading:false,patients:action.data}
        case GET_USER_FAIL:
            return{loading:false}
        default:
            return state;
    }
}

export const loginpatientsReducer=(state=[],action)=>{
    switch (action.type) {
        case LOGIN_REQUEST:
            return{loading:true}
        case LOGIN_SUCCESS:
            return{loading:false,patients:action.payload}
        case LOGIN_Fail:
            return{loading:false}
        case LOGOUT_SUCCESS:
            return {}
        default:
            return state;
    }
}
export const signUpPatientsReducer=(state=[],action)=>{
    switch (action.type) {
        case SIGNUP_REQUEST:
            return{loading:true}
        case SIGNUP_SUCCESS:
            return{loading:false,patients:action.payload}
        case SIGNUP_FAIL:
            return{loading:false}
        default:
            return state;
    }
}
export const signUpDoctorReducer=(state=[],action)=>{
    switch (action.type) {
        case SIGNUP_DOCTOR_REQUEST:
            return{loading:true}
        case SIGNUP_DOCTOR_SUCCESS:
            return{loading:false,doctors:action.payload}
        case SIGNUP_DOCTOR_FAIL:
            return{loading:false}
        default:
            return state;
    }
}

export const getMedicalRepReducers=(state=[],action)=>{
    switch (action.type) {
        case GET_MEDICAL_REPORT_REQUEST:
            return {loading:true}
        case GET_MEDICAL_REPORT_SUCCESS:
            return {loading:false,reports:action.payload}
        case GET_MEDICAL_REPORT_FAIL:
            return {loading:false}
        default:
            return state
    }
}
export const submitAppointmentReduce=(state=[],action)=>{
    switch (action.type) {
        case SUBMIT_APPOINTMENT_REQUEST:
            return {loading:true}
        case SUBMIT_APPOINTMENT_SUCCESS:
            return {loading:false,appointment:action.payload}
        case SUBMIT_APPOINTMENT_FAIL:
            return {loading:false}    
        default:
            return state
    }
}