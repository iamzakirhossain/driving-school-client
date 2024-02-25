import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import Login from './components/auth/Login.jsx';
import Home from './components/Home.jsx';
import StudentAppBar from './components/student/StudentAppBar.jsx';
import Profile from "./components/Profile.jsx";
import History from './components/History.jsx';

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import StudentHome from './components/student/StudentHome.jsx';
import Update from './components/Update.jsx';


let router= createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
        <Route path='' element={<Login/>}/>
        <Route path='home' element={<Home/>}/>
        <Route path='profile' element={<Profile/>}/>
        <Route path='history' element={<History/>}/>
        <Route path='update' element={<Update/>}/>
        {/* <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='user/:userId' element={<User/>}/> */}
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}>
      <App />
  </RouterProvider>
  </React.StrictMode>,
)
