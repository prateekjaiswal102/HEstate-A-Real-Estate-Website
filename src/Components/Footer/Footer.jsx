import React from 'react';
import { AiFillInstagram } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { SiTreehouse } from 'react-icons/si';
import { BsTwitter } from "react-icons/bs";

import Aos from 'aos';
import "aos/dist/aos.css"
import { useEffect } from 'react';

import "./Footer.css";

const Footer = () => {
  useEffect(() => {
    Aos.init({duration: 2000})
 },[])
  return (
    <div className='Footer'>
      <div className="secContainer container grid">

        <div  data-aos="fade-up" className="logoDiv">
          <div className="footerLogo">
            <SiTreehouse className='icon' />
            <span>hEstate</span>
          </div>
          <p>Our vision is to make the place place to live for people!</p>
          <div className="socials flex">
            <FaFacebookF className='icon' />
            <BsTwitter className='icon' />
            <AiFillInstagram className='icon' />
          </div>
        </div>
        <div  data-aos="fade-up" className="footerLinks">
          <span className="linkTitle">Information</span>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Explore</a>
          </li>
          <li>
            <a href="">Travel</a>
          </li>
          <li>
            <a href="">Blog</a>
          </li>
        </div>

        <div  data-aos="fade-up" className="footerLinks">
          <span className="linkTitle">Helpful Links</span>
          <li>
            <a href="">Destination</a>
          </li>
          <li>
            <a href="">Support</a>
          </li>
          <li>
            <a href="">Terms & Conditions</a>
          </li>
          <li>
            <a href="">Privacy</a>
          </li>
        </div>

        <div  data-aos="fade-up" className="footerLinks">
          <span className="linkTitle">Contact Details</span>
          <span className="phone">+651 125 658 000</span>
          <span className="email">prateekjaiswalpj07@gmail.com</span>
          <span className="website">www.domain.com</span>

        </div>
      </div>
    </div>
  )
};

export default Footer;
