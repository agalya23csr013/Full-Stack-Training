import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from './Register'
import AddUser from './AddUser'
import GetUsers from './GetUsers'
import About from './About'
import Contact from './Contact'
import Home from './Home'
import Nav from './Nav'
import "./styles/nav.css"

const App = () => {
  return (
   <BrowserRouter>
   <Nav/>
   <Routes>
      <Route path='/' element={<Home/>}  />
      <Route path='/adduser' element={<AddUser/>}/>
      <Route path='/getusers' element={<GetUsers/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App
