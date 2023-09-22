import React from 'react';
import "./Sponsors.css";

import logo1 from "../../assets/logo1.png"
import logo2 from "../../assets/logo2.png"
import logo3 from "../../assets/logo3.png"
import logo4 from "../../assets/logo4.png"

import Aos from 'aos';
import "aos/dist/aos.css"
import { useEffect } from 'react';

const Sponsors = () => {
  useEffect(() => {
    Aos.init({duration: 2000})
 },[])
  return (
    <div className='Sponsors'>
      <div data-aos="fade-up" className="secContainer flex">
        <span>
          <img src={logo1} alt="Logo Image" />
        </span>
        <span>
          <img src={logo2} alt="Logo Image" />
        </span>
        <span>
          <img src={logo3} alt="Logo Image" />
        </span>
        <span>
          <img src={logo4} alt="Logo Image" />
        </span>
      </div>
    </div>
  )
};

export default Sponsors;
