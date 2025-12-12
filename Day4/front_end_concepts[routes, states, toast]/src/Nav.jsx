import React from 'react'
import { Link } from 'react-router-dom';
const Nav = () => {
  return (
    <nav>
        <ol>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/adduser'>Add User </Link>
            </li>
            <li>
              <Link to='/getusers'>Get Users </Link>
            </li>
            <li>
              <Link to='/about'>About </Link>
            </li>
            <li>
              <Link to='/contact'>Contact </Link>
            </li>
        </ol>
    </nav>
  )
}

export default Nav;
