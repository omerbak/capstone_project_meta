import { useState } from 'react'
import logo from "../icons_assets/Logo.svg"
const Nav = () => {
  const [displayMenu, setDisplayMenu] = useState(false);
  function handleMenu(){
    setDisplayMenu((prev) => !prev);
  }


  return (
    <nav className={displayMenu ?'navbar open-menu' : 'navbar'}>
        <div className="container">
          <div className='mobile-menu'>
            <img className='brand-logo' src={logo} alt="little lemon logo" />
            {displayMenu ? <span class="material-symbols-outlined hamberger-menu" onClick={handleMenu}>close</span>
            : <span class="material-symbols-outlined hamberger-menu" onClick={handleMenu}>menu</span>}
          </div>
          <ul className='desk-menu'>
            <li className='active'>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Reservations</li>
            <li>Order Online</li>
            <li>Login</li>
          </ul>
        </div>
    </nav>
  )
}

export default Nav