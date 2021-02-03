import React, { useState,useEffect } from 'react';
import { Link } from "react-router-dom";
import { FaBars,FaTimes } from 'react-icons/fa';
import './Navbar.css';
import { Button } from './Button';
import { IconContext } from 'react-icons/lib';


const Navbar = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
  
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
  
    const showButton = () => {
      if (window.innerWidth <= 960) {
        setButton(false);
      } else {
        setButton(true);
      }
    };
  
    useEffect(() => {
      showButton();
    }, []);

    window.addEventListener('resize', showButton);
      
  
    return (
        <>
        <IconContext.Provider value={{ color: '#fff' }}>
            <div className='navbar'>
                <div className='navabar-container'>
                    <Link to='/'className='navbar-logo' onClick={closeMobileMenu}>
                            <img 
                                className='navbar_logo'
                                src='https://www.chargebee.com/static/resources/brand/chargebee-logo-black.svg'
                                alt =''
                            />
                    </Link>
                    <div  className='menu-icon' onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </div>
                    <ul className = {click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/Product 'className='nav-links' onClick={closeMobileMenu}>Product</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/'className='nav-links'onClick={closeMobileMenu}>Pricing</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/'className='nav-links'onClick={closeMobileMenu}>Solutions</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/'className='nav-links'onClick={closeMobileMenu}>Customers</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/'className='nav-links'onClick={closeMobileMenu}>Resources</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/'className='nav-links'onClick={closeMobileMenu}>Log In</Link>
                        </li>
                        <li className='nav-btn'>
                            {button ? (
                                <Link to='/scheduleademo' className='btn-link'>
                                    <Button buttonStyle='btn--outline'>Schedule a Demo</Button>
                                </Link>
                                    ) : (
                                        <Link to='/scheduleademo' className='btn-link'>
                                            <Button
                                            buttonStyle='btn--outline'
                                            buttonSize='btn--mobile'
                                            onClick={closeMobileMenu}
                                            >   
                                            Schedule a Demo
                                            </Button>
                                        </Link>)}
                        </li>
                    </ul> 
                </div>
            </div>  
            </IconContext.Provider>
        </>
    )
}

export default Navbar;

  
