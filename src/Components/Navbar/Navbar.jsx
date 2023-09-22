import React from 'react';
import "./Navbar.css";
import {SiTreehouse} from 'react-icons/si'
import {AiFillCloseCircle} from 'react-icons/ai'
import {PiDotsNineBold} from 'react-icons/pi'
import { useState } from 'react';

const Navbar = () => {

  // function to show the navbar
  const [menu,setMenu] = useState('menu')
  const shownavbar = () => {
    setMenu("showNavbar menu");
  }

  // function to remove the navbar
  const removenavbar = () => {
    setMenu("menu");
  }

  // function to add background to navbar when scrolled
  const [transparent, setTransparent] = useState('Navbar')
  const addBG = () => {
       if(window.scrollY >= 10) {
        setTransparent('Navbar addBackground'); 
       }
       else{
        setTransparent('Navbar');
       }
  }
  window.addEventListener("scroll",addBG);

  return (
    <div className= {transparent}>
      <div className="logoDiv"><SiTreehouse className='icon'/>
      <span>hEstate</span>
      </div>

      <div className={menu}>
        <ul>
          <li className="navlist">Property</li>
          <li className="navlist">Services</li>
          <li className="navlist">Product</li>
          <li className="navlist">About Us</li>
        </ul>
        {/* icon to close navbar on small devices */}
        <AiFillCloseCircle className="icon closeIcon" onClick={removenavbar} />
      </div>
      <button className="contactBtn btn">Contact</button>
      {/* icon to open navbar on small devices */}
      <PiDotsNineBold className='icon menuIcon' onClick={shownavbar} />
    </div>
  )
};

export default Navbar;
