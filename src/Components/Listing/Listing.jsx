import React from 'react';
import "./Listing.css";
import {FaBed} from "react-icons/fa"
import {MdPool} from "react-icons/md"
import {AiOutlineWifi} from "react-icons/ai"
import {IoFastFoodSharp} from "react-icons/io5"

import image1 from "../../assets/img12.jpg"
import image2 from "../../assets/img4.jpg"
import image3 from "../../assets/img8.jpg"
import image4 from "../../assets/img7.jpg"
import image5 from "../../assets/img13.jpg"
import image6 from "../../assets/img18.jpg"

import Aos from 'aos';
import "aos/dist/aos.css"
import { useEffect } from 'react';


const properties = [
  {
    id:1,
    Image:image1,
    name:"Countryside Estate,Itlay",
    price:"3,445",
    desc: "A luxurious Balinese villa surrounded by lush gardens",
    beds:6,
  },
  {
    id:2,
    Image:image2,
    name:"Waterfront Mansion",
    price:"4,100",
    desc: "An opulent waterfrnt mansion in Miami Beach with a private dock.",
    beds:4,
  },
  {
    id:3,
    Image:image3,
    name:"Luxury Penthouse, NY",
    price:"5,000",
    desc: "A historic cheteau inthe Bordeaux wine region.Strategically in NY.",
    beds:5,
  },{
    id:4,
    Image:image4,
    name:"Beachfront Ville,CA",
    price:"5,600",
    desc: "This beachfront villa in Malibu offers direct access to the ocean.",
    beds:7,
  },
  {
    id:5,
    Image:image5,
    name:"Elegant Chateau, France",
    price:"3,900",
    desc: "A historic cheteau inthe Bordeaux wine region, featuring vineyards.",
    beds:8,
  },{
    id:6,
    Image:image6,
    name:"Historic Brownstone , Boston",
    price:"4,700",
    desc: "A charming historic brownstone in Boston'sBack Bay neighborhood.",
    beds:6,
  },

];


const Listing = () => {
  useEffect(() => {
    Aos.init({duration: 2000})
 },[])
  return (
    <div className='Listing container section'>
      <div className="secContainer">
        <div className="secHeader">
          <span  data-aos="fade-up" className="orangeText">
            Our Listing
          </span>
          <h1  data-aos="fade-up" className="title">
            Buy And Sell Your Assets
            <span className="orangeDot"> .</span>
          </h1>
          <p  data-aos="fade-up">
            Your housing real estate agency is your key to uncovering hidden 
            savings
          </p>
          <div  data-aos="fade-up" className="btns flex">
            <button className="btn active">Exclusive</button>
            <button className="btn ">Standard</button>
          </div>
        </div>
        <div className="secContent grid">

        {properties.map(({id,Image,name,price,desc,beds}) => {
          return(

          <div key={id} className="singleListing">
            <div data-aos="fade-down" className="imgDiv">
              <img src={Image} alt="House Image" />
            </div>
            <div  data-aos="fade-up" className="info">
              <h2 className="name">{name}</h2>
              <span className="price">
                <span className="digits">{price}</span>
                <span className="orangeText">USD</span>
                <span className="duration">/Month</span>
              </span>
              <p>
                {desc} </p>
              <div className="ammenities flex">
                <span className="flex"><FaBed className="icon" />
                <blockquote>x{beds}</blockquote>
                </span>
 
                 <span className="flex"><MdPool className="icon" />
                </span> 

                <span className="flex"><AiOutlineWifi className="icon" />              
                </span>

                <span className="flex"><IoFastFoodSharp className="icon" />             
                </span> 

              </div>
            </div>
          </div>

          )
        })}
        </div>
      </div>
    </div>
  )
};

export default Listing;
