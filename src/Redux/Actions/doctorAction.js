import axios from "axios"
import { GET_ALL_APPOINTMENTS_FAIL, GET_ALL_APPOINTMENTS_REQUEST, GET_ALL_APPOINTMENTS_SUCCESS, GET_AVAILABLE_ROOMS_FAIL, GET_AVAILABLE_ROOMS_REQUEST, GET_AVAILABLE_ROOMS_SUCCESS, MAKE_MEDICAL_REPORT_FAIL, MAKE_MEDICAL_REPORT_REQUEST, MAKE_MEDICAL_REPORT_SUCCESS, POST_INTERVENTION_FAIL, POST_INTERVENTION_REQUEST, POST_INTERVENTION_SUCCESS, VALIDATE_FAIL, VALIDATE_REQUEST, VALIDATE_SUCCESS } from "../Constants/Constants"


export const makeReportAction=(cred)=>async(dispatch)=>{
    try {
        dispatch({type:MAKE_MEDICAL_REPORT_REQUEST})
        const {data}= await axios.post("https://medspace.onrender.com/doctorsAPI/report",cred)
        dispatch({type:MAKE_MEDICAL_REPORT_SUCCESS,data})
    } catch (error) {
        dispatch({type:MAKE_MEDICAL_REPORT_FAIL})
    }
}

export const getAvailableRoomsAction=()=>async(dispatch)=>{
    try {
        dispatch({type:GET_AVAILABLE_ROOMS_REQUEST})
        const {data}= await axios.get("https://medspace.onrender.com/adminsAPI/rooms")
        dispatch({type:GET_AVAILABLE_ROOMS_SUCCESS,Rooms:data.rooms})
    } catch (error) {
        dispatch({type:GET_AVAILABLE_ROOMS_FAIL})
    }
}
export const submitInterventionAction=(cred)=>async(dispatch)=>{
    try {
        const a=cred
        dispatch({type:POST_INTERVENTION_REQUEST})
        const {data}=await axios.post("https://medspace.onrender.com/doctorsAPI/submitinter",a)
        dispatch({type:POST_INTERVENTION_SUCCESS,data})
    } catch (error) {
        dispatch({type:POST_INTERVENTION_FAIL})
    }
}

export const getAllAppointmentsAction=(cred)=>async(dispatch)=>{
    try {
        dispatch({type:GET_ALL_APPOINTMENTS_REQUEST})
        const {data}=await axios.get(`https://medspace.onrender.com/doctorsAPI/getappointments/${cred.role}/${cred.userId}`)
        dispatch({type:GET_ALL_APPOINTMENTS_SUCCESS,data})
    } catch (error) {
        dispatch({type:GET_ALL_APPOINTMENTS_FAIL})
    }
}
export const validateAppointmentAction=(cred)=>async(dispatch)=>{
    try {
        dispatch({type:VALIDATE_REQUEST})
        console.log(cred)
        const {data}=await axios.put(`https://medspace.onrender.com/doctorsAPI/validate/${cred}`)
        dispatch({type:VALIDATE_SUCCESS,data})
    } catch (error) {
        dispatch({type:VALIDATE_FAIL})
    }
}