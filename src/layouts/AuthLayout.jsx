import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

export const AuthLayout = () => {
  return (
    <div>
        <Navbar />
        <div>
            <Outlet />
        </div>
    </div>
  )
}
