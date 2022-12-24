import {createStore,combineReducers, applyMiddleware} from 'redux'
import { getAllUsersReducer, getMedicalRepReducers, getUserReducer, loginpatientsReducer, logoutReducer, signUpDoctorReducer, signUpPatientsReducer, submitAppointmentReduce } from './Reducers/userReducers'
import{composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { getAllAppointmentsReducer, getAvailableRoomsReducer, makeReportReducer, validateAppointmentReducer } from './Reducers/doctorReducers'
import { addNewRoomReducer, deleteUserReducer, getAllInterventionsReducer, getAllRoomsReducer } from './Reducers/adminReducers'
import { getUserActions } from './Actions/userActions'




const Reducer=combineReducers({
    update:validateAppointmentReducer,
    getUser:getUserReducer,
    login:loginpatientsReducer,
    deleteUser:deleteUserReducer,
    getAllinterventions:getAllInterventionsReducer,
    getAllUsers:getAllUsersReducer,
    getAllRooms:getAllRoomsReducer,
    getallappointments:getAllAppointmentsReducer,
    signIn:signUpPatientsReducer,
    doctorSignIn:signUpDoctorReducer,
    makeReport:makeReportReducer,
    getReports:getMedicalRepReducers,
    addNewRoom:addNewRoomReducer,
    getAvailableRooms:getAvailableRoomsReducer,
    submitAppointment:submitAppointmentReduce
})

const localstorageInfo=localStorage.getItem('auth')?JSON.parse(localStorage.getItem('auth')):null

const initialstate={
    login:{patients:localstorageInfo}
}



const Store=createStore(Reducer,initialstate,composeWithDevTools(applyMiddleware(thunk)))

export default Store