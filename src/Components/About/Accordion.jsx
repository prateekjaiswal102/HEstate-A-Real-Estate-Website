import React from 'react';
import './About.css';
import { AiFillCheckCircle } from 'react-icons/ai';
import { BiSolidDownArrow, BiSolidUpArrow } from 'react-icons/bi';

import Aos from 'aos';
import "aos/dist/aos.css"
import { useEffect } from 'react';

const Accordion = ({ title, desc, active, setActive }) => {
  const isAccordionActive = active === title;

  const handleAccordionClick = () => {
    if (isAccordionActive) {
      setActive(''); // Close the accordion if it's already active
    } else {
      setActive(title); // Open the accordion if it's not active
    }
  };

  useEffect(() => {
    Aos.init({duration: 2000})
 },[])

  return (
    <div  onClick={handleAccordionClick} className={`singleAccordion ${isAccordionActive ? 'activeAccordion' : ''}`}>
      <span
        className={`accordionTitle flex ${isAccordionActive ? 'activeTitle' : ''}`}
      >
        <span className="flex">
          <AiFillCheckCircle className="icon" />
          <span className="titleText">{title}</span>
        </span>
        <span className="dropDownIcon">
          {isAccordionActive ? <BiSolidDownArrow className="icon" /> : <BiSolidUpArrow className="icon" />}
        </span>
      </span>
      <p  className={`description ${isAccordionActive ? 'show' : ''}`}>{desc}</p>
    </div>
  );
};

export default Accordion;
