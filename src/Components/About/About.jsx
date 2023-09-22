import React, { useState } from 'react';
import "./About.css";
// import { useState } from 'react';
import Accordion from './Accordion';
import image from "../../assets/image.png"

import Aos from 'aos';
import "aos/dist/aos.css"
import { useEffect } from 'react';

const About = () => {
  const [active,setActive] = useState("Proven Track Record")

  useEffect(() => {
    Aos.init({duration: 2000})
 },[])

  return (
    <div className='About section container'>
      <div className="secContainer flex">
        <div  data-aos="fade-up" className="imgDiv">
          <img src={image} alt="About Image" />
        </div>

        <div className="textDiv">
          <div data-aos="fade-down" className="secHeader flex">
            <div className="secTitle">
              <span className="orangeText">Our Values</span>
              <h1>
                Value We Give You
                <span className="orangeDot">.</span>
                <p>
                  We always ready to help by holding the best services for you.We believe a good place to live can make your life better|
                </p>
              </h1>
            </div>
          </div>
          <div  data-aos="fade-up" className="accordion grid">
            <Accordion 
            title="Proven Track Record"
            desc="Our agency has a demonstrated track record of successfully helping clients buy and sell properties. We have a history of acheiving excellent results, whether it's securing the best deals for buyers or maximizing the sale price for sellers."
            active={active}
            setActive={setActive}
            />
            <Accordion 
            title="Local Market Knowledge"
            desc="We possess in-depth knowledge of the local real estate market. Our agents are well-versed in current market trends, pricing, and neighbourhood specifics. This expertise allows us to provide valuable insights to clients"
            active={active}
            setActive={setActive}
            />
            <Accordion 
            title="Personalised Service"
            desc="We understand that every client has unique needs and goals. That's why we offer personalised service tailored to each individual. "
            active={active}
            setActive={setActive}
            />
            <Accordion 
            title="Ethical Practices"
            desc="Integrity is at the core of our agency. We uphold the highest ethical standards and maintain transparency throughout the real estate process."
            active={active}
            setActive={setActive}
            />
            </div>
        </div>
      </div>
    </div>
  )
};

export default About;
