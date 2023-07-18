import React, { useContext } from 'react'
import {SidebarContext} from "../context/SidebarContext"
import CartItem from './CartItem'

const Sidebar = () => {
  const {open, closeSidebar} = useContext(SidebarContext)
  return (
    <div className={`${open ? "right-0" : "-right-full"} `}>Sidebar</div>
  )
}

export default Sidebar