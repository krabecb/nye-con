import './Layout.css'
import Dashboard from '../Dashboard/Dashboard'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className='Layout'>
      <nav>
        <ul>
          <li>
            <Dashboard />
          </li>
        </ul>
        <div className='color-divide h-2'></div>
      </nav>

      <Outlet />
    </div>
  )
}

export default Layout