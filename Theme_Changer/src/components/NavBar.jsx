import React from 'react'
import { Link } from 'react-router-dom'
import {useTheme} from '../Context'
function NavBar() {

const {Theme,toggleTheme} = useTheme();

  return (
<>
 <div className='nav'>
    <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">ABOUT</Link></li>
        <li><Link to="/contact">CONTACT</Link></li>
    </ul>
    <button onClick={()=>{
         toggleTheme();
    }}>{Theme}</button>
 </div>

</>

  )
}

export default NavBar