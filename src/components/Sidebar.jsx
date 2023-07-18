import React, { useContext } from 'react'
import {SidebarContext} from "../context/SidebarContext"
import ArrowIcon from '@heroicons/react/24/outline/ArrowRightIcon'

const Sidebar = () => {
  const {open, closeSidebar} = useContext(SidebarContext)
  return (
    <div className={`${open ? "right-0" : "-right-full"} fixed top-0 bg-slate-500 h-full w-[25%] rounded transition-all`}>
      <div className='flex items-center justify-between px-5 py-5 border-b rounded text-sm font-semibold uppercase'>
        <div>Cart Item (0)</div>
        <ArrowIcon className=' w-5 cursor-pointer' onClick={closeSidebar}/>
      </div>
      
    </div>
  )
}

export default Sidebar