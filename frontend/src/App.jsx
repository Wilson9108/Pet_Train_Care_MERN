import { useState,lazy,Suspense } from 'react'

import {BrowserRouter,Routes,Route, Router} from 'react-router-dom'
import './App.css'
const HomePage = lazy(()=>import('./components/Homepage.jsx'))
import Navbar from './components/Navbar'
import Footer from './components/Footer'
const Signup = lazy(()=>import('./components/Signup'))
const Signin = lazy(()=>import('./components/Signin'))
const RouterError = lazy(()=>import('./components/RouterError'))
const AdminSignin = lazy(()=>import('./components/AdminSignin'))
const AdminSignup = lazy(()=>import('./components/AdminSignup'))
const MyProfile=lazy(()=>import('./components/MyProfile'))
const TrainingRequest = lazy(()=>import('./components/TrainingRequest'))
const TrainingData= lazy(()=>import('./components/TrainingData'))
const TrainingAmount = lazy(()=>import('./components/TrainingAmount'))
const AdminProfile = lazy(()=>import('./components/AdminProfile'))
const TrainingResponse = lazy(()=>import('./components/TrainingResponse'))
const PetDaysCareRequest = lazy(()=>import('./components/PetDaysCareRequest'))
const  PetsDaysCareData = lazy(()=>import('./components/PetsDaysCareData'))
const  PetDaysCareAmount = lazy(()=>import('./components/PetDaysCareAmount'))
const PetDaysCareResponse =lazy(()=>import('./components/PetDaysCareResponse'))
const  PetCareUserAccept = lazy(()=>import('./components/PetCareUserAccept'))
const  TrainingCareUserAccept = lazy(()=>import('./components/TrainingUserAccept'))
const  UserPlacedTrainingData = lazy(()=>import('./components/UserPlacedTrainingData'))
const UserPlacedPetCareData= lazy(()=>import('./components/UserPlacedPetCareData'))
function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Suspense fallback={<div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"}}><h1>Loading.....</h1></div>}>
    <Routes>

      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/signin" element={<Signin/>}></Route>
      <Route path='/adminsignin' element={<AdminSignin/>}></Route>
      <Route path='/adminsignup' element={<AdminSignup/>}></Route>
      <Route path='/adminprofile' element={<AdminProfile/>}></Route>
      <Route path='/profile' element={<MyProfile/>}></Route>
      <Route path='/training' element={<TrainingRequest/>}></Route>
      <Route path='/trainingData' element={<TrainingData/>}></Route>
      <Route path='/trainingamount' element={<TrainingAmount/>}></Route>
      <Route path="/trainingresponse" element={<TrainingResponse/>}></Route>
      <Route path='/petcarerequest' element={<PetDaysCareRequest/>}></Route>
      <Route path='/petcaredata' element={<PetsDaysCareData/>}></Route>
      <Route path='/petcareamount' element={<PetDaysCareAmount/>}></Route>
      <Route path='/petcareresponse' element={<PetDaysCareResponse/>}></Route>
      <Route path="/petcareuseraccept" element={<PetCareUserAccept/>}></Route>
      <Route path="/traininguseraccept" element={<TrainingCareUserAccept/>}></Route>
      <Route path='/trainingplaceddata' element={<UserPlacedTrainingData/>}></Route>
      <Route path='/petcareplaceddata' element={<UserPlacedPetCareData/>}></Route>

      <Route path="*" element={<RouterError/>}></Route>
      
    </Routes>
    </Suspense>
    <Footer/>
    </BrowserRouter>

    </>
  )
}

export default App
