const { ADD_NEW_ROOM_SUCCESS, ADD_NEW_ROOM_REQUEST, ADD_NEW_ROOM_FAIL, GET_ALL_ROOMS_REQUEST, GET_ALL_ROOMS_SUCCESS, GET_ALL_ROOMS_FAIL, GET_ALL_INTERVENTIONS_REQUEST, GET_ALL_INTERVENTIONS_SUCCESS, GET_ALL_INTERVENTIONS_FAIL, DELETE_USER_REQUEST, DELETE_USER_SUCCESS, DELETE_USER_FAIL } = require("../Constants/Constants");

export const addNewRoomReducer=(state=[],action)=>{
    switch (action.type) {
        case ADD_NEW_ROOM_REQUEST:
            return{loading:true}
        case ADD_NEW_ROOM_SUCCESS:
            return{loading:false,payload:action.payload}
        case ADD_NEW_ROOM_FAIL:
            return{loading:false}
        default:
            return state
    }
}
export const getAllRoomsReducer=(state=[],action)=>{
    switch (action.type) {
        case GET_ALL_ROOMS_REQUEST:
            return{loading:true}
        case GET_ALL_ROOMS_SUCCESS:
            return{loading:false,payload:action.all.data}
        case GET_ALL_ROOMS_FAIL:
            return{loading:false}
        default:
            return state
    }
}
export const getAllInterventionsReducer=(state=[],action)=>{
    switch (action.type) {
        case GET_ALL_INTERVENTIONS_REQUEST:
            return{loading:true}
        case GET_ALL_INTERVENTIONS_SUCCESS:
            return{loading:false,payload:action}
        case GET_ALL_INTERVENTIONS_FAIL:
            return{loading:false}
        default:
            return state
    }
}
export const deleteUserReducer=(state=[],action)=>{
    switch (action.type) {
        case DELETE_USER_REQUEST:
            return{loading:true}
        case DELETE_USER_SUCCESS:
            return{loading:false,payload:action}
        case DELETE_USER_FAIL:
            return{loading:false}
        default:
            return state
    }
}