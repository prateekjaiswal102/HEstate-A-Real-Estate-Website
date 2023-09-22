import React from 'react';
import { AiFillMessage } from 'react-icons/ai';
import { BiSolidMessageDetail, BiSolidPhoneCall, BiSolidVideo } from 'react-icons/bi';
import "./Contact.css";
import ContacImage from "../../assets/contact.png"

import Aos from 'aos';
import "aos/dist/aos.css"
import { useEffect } from 'react';

const Contact = () => {
  useEffect(() => {
    Aos.init({duration: 2000})
 },[])
  return (
    <div className='Contact container section'>
      <div className="secContainer flex">
        <div data-aos="fade-down" className="imgDiv">
          <img src={ContacImage} alt="Contact Image" />
        </div>

        <div className="textDiv">
          <div  data-aos="fade-up" className="secHeader flex">
            <div className="secTitle">
              <span className="orangeText">Contact Us</span>
              <h1>
                {" "}
                Easy way to contact us
                <span className="orangeDot">.</span> 
              </h1>
              <p>
                Is there a problem finding your dream home?
                Need a guide in
                buying your first home? Just contact us|
              </p>
            </div>
          </div>
          <div className="secContent grid">
            <div data-aos="fade-up" className="phone active">
              <div className="info flex"><BiSolidPhoneCall className='icon'/>
              <span>
                <h4>Phone Call</h4>
                <p>24/7 Support</p>
              </span>
              </div>
              <button>Call Now</button>
            </div>

             <div  data-aos="fade-up" className="chat ">
              <div className="info flex"><AiFillMessage className='icon'/>
              <span>
                <h4>Chat</h4>
                <p>24/7 Support</p>
              </span>
              </div>
              <button>Chat Now</button>
            </div>
            <div  data-aos="fade-up" className="videoCall ">
              <div className="info flex"><BiSolidVideo className='icon'/>
              <span>
                <h4>Video Call</h4>
                <p>24/7 Support</p>
              </span>
              </div>
              <button>Video Call Now</button>
            </div>

            <div  data-aos="fade-up" className="message ">
              <div className="info flex"><BiSolidMessageDetail className='icon'/>
              <span>
                <h4>Message</h4>
                <p>24/7 Support</p>
              </span>
              </div>
              <button>Message Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Contact;
