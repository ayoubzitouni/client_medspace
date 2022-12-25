import { Route, Routes } from 'react-router-dom';
import './App.css';
import Signup from './views/Signup';
import Home from './views/Home';
import Login from './views/Login'
import Profile from './views/Profile';
import AddDoctor from './views/AddDoctor';
import MedRep from './views/MedRep';
import GetReport from './views/GetReport';
import Interventions from './views/Interventions';
import Dashboard from './views/DashboardView';

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/adddoctor'element={<AddDoctor/>}/>
        <Route path='/makereport' element={<MedRep/>}/>
        <Route path='/getreport' element={<GetReport/>}/>
        <Route path='/intervention' element={<Interventions/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    </>
  );
}

export default App;
