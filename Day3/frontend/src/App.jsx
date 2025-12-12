import React from 'react'
import Nav from './Nav';
import "./styles/nav.css"
import ParentComponent from './ParentComponent';
import ClassBasedComponent from './ClassBasedComponent';
import Register from './Register';
const App = () => {
  return (
    <div>
        <Nav/>
        <Register/>


        {/* <ParentComponent/>
        <hr />
        <ClassBasedComponent/> */}
    </div>
  )
}

export default App