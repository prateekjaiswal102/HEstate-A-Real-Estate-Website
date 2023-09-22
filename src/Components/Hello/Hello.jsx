import React from 'react';
import "./Hello.css";
import { HiLocationMarker} from "react-icons/hi"
import Image from "../../assets/img1.png"
import Aos from 'aos';
import "aos/dist/aos.css"
import { useEffect } from 'react';

const Hello = () => {

  useEffect(() => {
     Aos.init({duration: 2000})
  },[])
  return (
    <div className='Hello'>
      <div className="secContainer container flex">
        <div className="textDiv">
          <h1 data-aos="fade-up">Discover Most Suitable Property</h1>
          <span className="design"></span>
          <p data-aos="fade-up">
            Find a variety of properties that suit you very easily,
            forget all
            difficulties in finding a residence for you. 
          </p>

          <div data-aos="fade-up" className="searchBar flex">
            <div className="inputBox flex">
              <HiLocationMarker className="icon" />
              <input type="text" placeholder='Search by location' />
            </div>
            <button className="btn">Search</button>
          </div>
          <div data-aos="fade-up" className="numbers flex">
            <div className="singleNumber">
              <span>
                9K <blockquote>+</blockquote>
              </span>
              <small>Premium Product</small>
            </div>

            <div className="singleNumber">
              <span>
                2K <blockquote>+</blockquote>
              </span>
              <small>Happy Custormes</small>
            </div>

            <div className="singleNumber">
              <span>
                48K <blockquote>+</blockquote>
              </span>
              <small>Awards Winning</small>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" className="imgDiv">
          <img src={Image} alt="Hello Imager" />
        </div>
      </div>
    </div>
  )
};

export default Hello;
