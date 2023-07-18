import {useContext} from 'react'
import { SidebarContext } from '../context/SidebarContext';
import ShopIcon from '@heroicons/react/24/outline/ShoppingBagIcon'

const Header = () => {
  const {open, setOpen} = useContext(SidebarContext)
  return (
    <div>
      <div>Header</div>
      <div onClick={()=> setOpen(!open)}>
        <ShopIcon className='flex relative w-7 cursor-pointer'/>
      </div>
    </div>
  )
}

export default Header;