import React from 'react';
import { Link , useLocation} from 'react-router-dom';
import './navbar.css'; 

function Navbar ()  {
    const { pathname } = useLocation()
  return (

    <nav className='nav nav-tabs mt-2'>
      <ul className="nav-links">
        <li>
          <Link to="/project/home"
          className={`nav-link ${pathname.includes('home') ? 'active' : ''}`} >
            Home
          </Link>
        </li>
        <li>
          <Link to="/project/search"
           className={`nav-link ${pathname.includes('search') ? 'active' : ''}`}>
            Search
          </Link>
        </li>
        <li>
          <Link to="/project/signin"
           className={`nav-link ${pathname.includes('signin') ? 'active' : ''}`}>
            SignIn
          </Link>
        </li>
        <li>
          <Link  to="/project/signup"
           className={`nav-link ${pathname.includes('signup') ? 'active' : ''}`}>
            SignUp
          </Link>
        </li>
        <li>
          <Link  to="/project/account"
           className={`nav-link ${pathname.includes('account') ? 'active' : ''}`}>
            Account
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
