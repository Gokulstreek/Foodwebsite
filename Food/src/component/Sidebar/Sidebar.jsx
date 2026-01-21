import React from 'react'
import './Sidebar.css'
import {assets} from '../../assets/assets'
import { NavLink } from 'react-router-dom'
const Sidebar = () => {
  return (
    <div className='sidebar'>
     <div className="sidebar-options">
      <NavLink to='/ADMIN/ADD' className={({ isActive }) => isActive ? "sidebar-option active" : "sidebar-option"}>
        <img src={assets.add_icon}/>
        <p>Add The Food items</p>
      </NavLink>
      <NavLink to='/ADMIN/LIST' className={({ isActive }) => isActive ? "sidebar-option active" : "sidebar-option"}>
        <img src={assets.order_icon}/>
        <p>List Item</p>
      </NavLink>
      <NavLink to='/ADMIN/UPDATE' className={({ isActive }) => isActive ? "sidebar-option active" : "sidebar-option"}>
        <img src={assets.order_icon}/>
        <p>Update Item</p>
      </NavLink>

     </div>
    </div>
  )
}

export default Sidebar
