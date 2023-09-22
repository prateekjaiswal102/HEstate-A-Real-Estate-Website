import React from 'react';
import "./Popular.css";
import {BiLeftArrowAlt,BiRightArrowAlt} from "react-icons/bi"
import image1 from "../../assets/img18.jpg"
import image2 from "../../assets/img14.jpg"
import image3 from "../../assets/img17.jpg"

import Aos from 'aos';
import "aos/dist/aos.css"
import { useEffect } from 'react';

const Popular = () => {
  useEffect(() => {
    Aos.init({duration: 2000})
 },[])
  return (
    <div className='Popular container section'>
      <div className="secContainer">
        <div className="secHeader flex">
          <div className="textDiv">
            <span data-aos="fade-down" className="orangeText">
              Best Choice
            </span>
            <h1 data-aos="fade-down" className='title'>Popular Residences
              <span className='orangeDot'> .</span>
            </h1>  
          </div>
          
          <div data-aos="fade-down" className="icons flex">
            <BiLeftArrowAlt className='icon'/>
            <BiRightArrowAlt className='icon'/>
          </div>

        </div>
          <div className="secContent grid">
            {/* House One */}
            <div data-aos="fade-down" className="singleProperty">
              <div className="imgDiv">
               <img src={image1} alt="House Image" />
              </div>
              <div  data-aos="fade-up" className="info">
                <span className="price">
                  <span className="orangeText">$ </span>
                  <span className="digits">48,385</span>
                </span>
                <h2 className="name">Alivia Prica Jarfin</h2>
                <p>A stunning penthouse with skyline view and private terrace.</p>
              </div>
            </div>
             
             {/* House two */}
            <div data-aos="fade-down" className="singleProperty">
              <div className="imgDiv">
               <img src={image2} alt="House Image" />
              </div>
              <div  data-aos="fade-up" className="info">
                <span className="price">
                  <span className="orangeText">$ </span>
                  <span className="digits">68,454</span>
                </span>
                <h2 className="name">Mountain Retreat, Aspen</h2>
                <p>A secluded mountain retreat in Aspen with ski-in/ski-out access, a private spa.</p>
              </div>
            </div>

             {/* House three */}
             <div data-aos="fade-down" className="singleProperty">
              <div className="imgDiv">
               <img src={image3} alt="House Image" />
              </div>
              <div data-aos="fade-up" className="info">
                <span className="price">
                  <span className="orangeText">$ </span>
                  <span className="digits">48,300</span>
                </span>
                <h2 className="name">Contemporary Condo</h2>
                <p>A sleek and modern condo in downtown Los Angeles.</p>
              </div>
            </div>

          </div>
      </div>
    </div>
  )
};

export default Popular;
