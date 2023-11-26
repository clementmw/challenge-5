import { ShoppingCart } from 'phosphor-react';
import React from 'react'
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <>
    
     <NavLink to="/">Home</NavLink> | 
     <NavLink to="/botcollection">BotCollection</NavLink> | 
     <NavLink to='/botarmy'>
      <ShoppingCart size={'32'}/>
      </NavLink>
    
    </>
  )
}

export default Nav