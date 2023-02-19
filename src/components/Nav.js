import { useState } from 'react'
import logo from "../icons_assets/Logo.svg"
import { Link } from 'react-router-dom';

const Nav = () => {
  const [displayMenu, setDisplayMenu] = useState(false);

  function handleMenu(){
    setDisplayMenu((prev) => !prev);
  }


  return (
    <nav className={displayMenu ?'navbar open-menu' : 'navbar'}>
        <div className="container">
          <div className='mobile-menu'>
            <Link to="/" className='brand-logo'>
              <img src={logo} alt="little lemon logo" />
            </Link>
            {displayMenu ? <span class="material-symbols-outlined hamberger-menu" onClick={handleMenu}>close</span>
            : <span class="material-symbols-outlined hamberger-menu" onClick={handleMenu}>menu</span>}
          </div>
          <ul className='desk-menu'>
            <li className='active'>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li><Link className='link' to="/booking">Reservations</Link></li>
            <li>Order Online</li>
            <li>Login</li>
          </ul>
        </div>
    </nav>
  )
}

export default Nav