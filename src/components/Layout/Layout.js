import './Layout.css'
import { Outlet, Link } from 'react-router-dom'

function Layout() {
    return (
        <div className='Layout'>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>
            <div className='color-divide h-2'>

            </div>
          </nav>
    
          <Outlet />
        </div>
      )
}

export default Layout