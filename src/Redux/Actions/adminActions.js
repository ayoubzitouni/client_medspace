import axios from 'axios'
import { ADD_NEW_ROOM_REQUEST, ADD_NEW_ROOM_SUCCESS, ADD_NEW_ROOM_FAIL, GET_ALL_ROOMS_REQUEST, GET_ALL_ROOMS_FAIL, GET_ALL_ROOMS_SUCCESS, GET_ALL_INTERVENTIONS_REQUEST, GET_ALL_INTERVENTIONS_SUCCESS, GET_ALL_INTERVENTIONS_FAIL, DELETE_USER_REQUEST, DELETE_USER_SUCCESS, DELETE_USER_FAIL } from"../Constants/Constants"

export const addNewRoom=(cred)=>async(dispatch)=>{
    try {
        dispatch({type:ADD_NEW_ROOM_REQUEST})
        console.log('action',cred)
        const newR=await axios.post("https://medspace.onrender.com/adminsAPI/newroom",{rNumber:cred})
        dispatch({type:ADD_NEW_ROOM_SUCCESS,payload:newR})
    } catch (error) {
        dispatch({type:ADD_NEW_ROOM_FAIL})
    }
}
export const getAllRoomsAction=()=>async(dispatch)=>{
    try {
        dispatch({type:GET_ALL_ROOMS_REQUEST})
        const all= await axios.get("https://medspace.onrender.com/adminsAPI/allrooms")
        dispatch({type:GET_ALL_ROOMS_SUCCESS,all})
    } catch (error) {
        dispatch({type:GET_ALL_ROOMS_FAIL})
    }
}
export const getAllInterventionsAction=()=>async(dispatch)=>{
    try {
        dispatch({type:GET_ALL_INTERVENTIONS_REQUEST})
        const {data}= await axios.get("https://medspace.onrender.com/adminsAPI/allinterventions")
        dispatch({type:GET_ALL_INTERVENTIONS_SUCCESS,data})
    } catch (error) {
        dispatch({type:GET_ALL_INTERVENTIONS_FAIL})
    }
}
export const deleteUserAction=(id)=>async(dispatch)=>{
    try{
        console.log(id)
        dispatch({type:DELETE_USER_REQUEST})
        const {data}=await axios.delete(`https://medspace.onrender.com/adminsAPI/deleteuser/${id}`)
        dispatch({type:DELETE_USER_SUCCESS,data})
    }catch(error){
        dispatch({type:DELETE_USER_FAIL})
    }

}
