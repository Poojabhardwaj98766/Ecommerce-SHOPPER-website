import './Navbar.css'
import logo from '../../assets/nav-logo.svg'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div className="navbar">
       <img src={logo} className='nav-logo' alt="" />
      <Link to='/login'><button>Login</button></Link>
    </div>
  )
}

export default Navbar
