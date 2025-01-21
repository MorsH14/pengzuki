import React, { useState } from "react";
import "./home.css";
import { HiMiniHomeModern } from "react-icons/hi2";
import { MdOutlineWorkHistory } from "react-icons/md";
import { BiSolidCollection } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { PiTiktokLogoFill } from "react-icons/pi";
import Carousel from "../carousel/carousel";
import { RiMenuFoldLine } from "react-icons/ri";



const Home = () => {

  const [dropdown, setDropDown] = useState(false)

  const handleClick = () =>{
    setDropDown(!dropdown);
  }

  if (dropdown) {
    document.body.classList.add("no-scroll");
  } else {
    document.body.classList.remove("no-scroll");
  }

  return (
    <div className="mainContainer">
      <div className="leftContainer">
        <div className="logo">
        <h1>WELCOME TO THE PENGZUKI CLUB</h1>

        <div className="dropDown" onClick={handleClick}>
        <RiMenuFoldLine size={30}/>
        <div className={`MediarightContainer ${dropdown ? "show" : ""}`}>
          <div className="logo">
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          PENGZUKI
        </h1>
        <RiMenuFoldLine size={25}/>
        </div>
        <ul className="rightUl">
          <li>
            <HiMiniHomeModern /> HOME
          </li>
          <li>
            <MdOutlineWorkHistory />
            STORY
          </li>
          <li>
            <BiSolidCollection />
            COLLECTION
          </li>
        </ul>

        <div className="bottomUL">
          <ul>
            <li>
              <FaXTwitter />
              FOLLOW ON X
            </li>
            <li>
              <RiInstagramFill />
              FOLLOW ON INSTAGRAM
            </li>
            <li>
              <PiTiktokLogoFill />
              FOLLOW ON TIKTOK
            </li>
          </ul>
          <button className="joinButton">JOIN THE CLUB</button>
        </div>
      </div>
        </div>
        </div>
        <div className="imgContainer">
          <h2>Its Pengzuki's time!</h2>
        </div>
      </div>


      <div className="rightContainer">
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          PENGZUKI
        </h1>
        <ul className="rightUl">
          <li>
            <HiMiniHomeModern /> HOME
          </li>
          <li>
            <MdOutlineWorkHistory />
            STORY
          </li>
          <li>
            <BiSolidCollection />
            COLLECTION
          </li>
        </ul>

        <div className="bottomUL">
          <ul>
            <li>
              <FaXTwitter />
              FOLLOW ON X
            </li>
            <li>
              <RiInstagramFill />
              FOLLOW ON INSTAGRAM
            </li>
            <li>
              <PiTiktokLogoFill />
              FOLLOW ON TIKTOK
            </li>
          </ul>
          <button className="joinButton">JOIN THE CLUB</button>
        </div>
      </div>
        <div className="slidesContainer">
        <Carousel/>

        <div className="leftSlides">

        </div>
        </div>
      
     
    </div>
  );
};

export default Home;
