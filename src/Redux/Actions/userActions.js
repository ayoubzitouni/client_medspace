import axios from 'axios'

import { GET_ALL_USERS_FAIL, GET_ALL_USERS_REQUEST, GET_ALL_USERS_SUCCESS, GET_MEDICAL_REPORT_FAIL, GET_MEDICAL_REPORT_REQUEST, GET_MEDICAL_REPORT_SUCCESS, GET_USER_FAIL, GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_Fail, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_Fail, LOGOUT_REQUEST, LOGOUT_SUCCESS, SIGNUP_DOCTOR_REQUEST, SIGNUP_DOCTOR_SUCCESS, SIGNUP_FAIL, SIGNUP_REQUEST, SIGNUP_SUCCESS, SUBMIT_APPOINTMENT_FAIL, SUBMIT_APPOINTMENT_REQUEST, SUBMIT_APPOINTMENT_SUCCESS } from '../Constants/Constants'



export const getAllUsersActions=(cred)=>async(dispatch)=>{
    try {
        dispatch({type:GET_ALL_USERS_REQUEST})
        const {data}= await axios.get(`https://medspace.onrender.com/patientsAPI/allusers/${cred.role}`)
        dispatch({type:GET_ALL_USERS_SUCCESS,data})
    } catch (error) {
        dispatch({type:GET_ALL_USERS_FAIL})
    }
 }

 export const getUserActions=(cred1,cred2)=>async(dispatch)=>{
    try {
        dispatch({type:GET_USER_REQUEST})
        const {data}= await axios.get(`https://medspace.onrender.com/patientsAPI/user/${cred1}/${cred2}`)
        dispatch({type:GET_USER_SUCCESS,data})
    } catch (error) {
        dispatch({type:GET_USER_FAIL})
    }
 }

 export const logOutActions=()=>async(dispatch)=>{
        dispatch({type:LOGOUT_SUCCESS})
        localStorage.clear()
 }



 export const loginpatient=({email,password})=>async(dispatch)=>{
    try {
        dispatch({type:LOGIN_REQUEST})
        const {data}=await axios.post("https://medspace.onrender.com/patientsAPI/login",{email:email,password:password})
        dispatch({type:LOGIN_SUCCESS,payload:data})
        if(data){
            localStorage.setItem("auth",JSON.stringify(data)) 
        }
    } catch (error) {
        dispatch({type:LOGIN_Fail})
    }
}

 export const signUp=(cred)=>async(dispatch)=>{
    try {
        const {name,email,password,dateofBirth}=cred
        dispatch({type:SIGNUP_REQUEST})
        const {data}= await axios.post("https://medspace.onrender.com/patientsAPI/addNewPatient",{name:name,email:email,password:password,dateOfBirth:dateofBirth})
        dispatch({type:SIGNUP_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:SIGNUP_FAIL})
    }
 }
export const signUpDoctor=(cred)=>async(dispatch)=>{
    try {
        const {name,email,speciality}=cred
        dispatch({type:SIGNUP_DOCTOR_REQUEST})
        const data=await axios.post("https://medspace.onrender.com/doctorsAPI/adddoctor",{name:name,email:email,speciality:speciality})
        dispatch({type:SIGNUP_DOCTOR_SUCCESS,data})
    } catch (error) {
        dispatch({type:SIGNUP_FAIL})
    }
}
export const getMedicalRep=(cred)=>async(dispatch)=>{
    try {
        dispatch({type:GET_MEDICAL_REPORT_REQUEST})
        const {data}= await axios.get(`https://medspace.onrender.com/patientsAPI/getmedicals/${cred}`)
        dispatch({type:GET_MEDICAL_REPORT_SUCCESS,payload:data.repo})

    } catch (error) {
        dispatch({type:GET_MEDICAL_REPORT_FAIL})
    }
}

export const submitAppointmentAction=(cred)=>async(dispatch)=>{
    try {  
        dispatch({type:SUBMIT_APPOINTMENT_REQUEST})
        const {data}=await axios.post("https://medspace.onrender.com/patientsAPI/submitappointment",cred)
        dispatch({type:SUBMIT_APPOINTMENT_SUCCESS,data})
    } catch (error) {
        dispatch({type:SUBMIT_APPOINTMENT_FAIL})
    }

}