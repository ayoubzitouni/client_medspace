import { GET_ALL_APPOINTMENTS_FAIL, GET_ALL_APPOINTMENTS_REQUEST, GET_ALL_APPOINTMENTS_SUCCESS, GET_AVAILABLE_ROOMS_FAIL, GET_AVAILABLE_ROOMS_REQUEST, GET_AVAILABLE_ROOMS_SUCCESS, MAKE_MEDICAL_REPORT_FAIL, MAKE_MEDICAL_REPORT_REQUEST, MAKE_MEDICAL_REPORT_SUCCESS, POST_INTERVENTION_FAIL, POST_INTERVENTION_REQUEST, POST_INTERVENTION_SUCCESS, VALIDATE_FAIL, VALIDATE_REQUEST, VALIDATE_SUCCESS } from "../Constants/Constants";

export const makeReportReducer=(state=[],action)=>{
    switch (action.type) {
        case MAKE_MEDICAL_REPORT_REQUEST:
            return {loading:true}
        case MAKE_MEDICAL_REPORT_SUCCESS:
            return {loading:false,payload:action.data}
        case MAKE_MEDICAL_REPORT_FAIL:
            return {loading:false}
        default:
            return state
    }
}

export const getAvailableRoomsReducer=(state=[],action)=>{
    switch (action.type) {
        case GET_AVAILABLE_ROOMS_REQUEST:
            return{loading:true}
        case GET_AVAILABLE_ROOMS_SUCCESS:
            return{loading:false,payload:action}
        case GET_AVAILABLE_ROOMS_FAIL:
            return{loading:false}
        default:
            return state
    }
}

export const getAllAppointmentsReducer=(state=[],action)=>{
    switch (action.type) {
        case GET_ALL_APPOINTMENTS_REQUEST:
            return{loading:true}
        case GET_ALL_APPOINTMENTS_SUCCESS:
            return{loading:false,payload:action}
        case GET_ALL_APPOINTMENTS_FAIL:
            return{loading:false}
        default:
            return state
    }
}

export const validateAppointmentReducer=(state=[],action)=>{
    switch (action.type) {
        case VALIDATE_REQUEST:
            return{loading:true}
        case VALIDATE_SUCCESS:
            return{loading:false,payload:action}
        case VALIDATE_FAIL:
            return{loading:false}
        default:
            return state
    }
}

export const submitInterventionReducer=(state=[],action)=>{
    switch (action.type) {
        case POST_INTERVENTION_REQUEST:
            return{loading:true}
        case POST_INTERVENTION_SUCCESS:
            return{loading:false,payload:action}
        case POST_INTERVENTION_FAIL:
            return{loading:false}
        default:
            return state
    }
}