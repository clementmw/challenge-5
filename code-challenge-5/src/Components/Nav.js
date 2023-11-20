import React from 'react'
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <>
    
     <NavLink to="/">Home</NavLink> | 
     <NavLink to="/botcollection">BotCollection</NavLink> | 
     <NavLink to='/botarmy/:id'>Bot-Army</NavLink>
    
    </>
  )
}

export default Nav