import React, { useEffect, useRef, useState } from "react";
import "./home.css";
import { HiMiniHomeModern } from "react-icons/hi2";
import { MdOutlineWorkHistory } from "react-icons/md";
import { BiSolidCollection } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { PiTiktokLogoFill } from "react-icons/pi";
import Carousel from "../carousel/carousel";
import { RiMenuFoldLine } from "react-icons/ri";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import { GiStakesFence } from "react-icons/gi";
import "animate.css";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";

const Home = () => {
  const [dropdown, setDropDown] = useState(false);

  const handleClick = () => {
    setDropDown(!dropdown);

    if (!dropdown) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  };

  const img = [
    { img: "/assets/n3.png", background: "#92e7acd8" },
    { img: "/assets/n4.png", background: "#8dd6ece1" },
    { img: "/assets/n4.jpg", background: "#ce93d3b0" },
    { img: "/assets/n5.jpg", background: "#92e7acd8" },
    { img: "/assets/n2.png", background: "#eec230" },
  ];

  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Auto-play the audio when the component is mounted
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  }, []);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };
  return (
    <div className="mainContainer" id="home">
      <div className="leftContainer">
        <div className="logo" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%'
        }}>
          <h1>WELCOME TO THE PENGZUKI CLUB</h1>
          <div>
            <audio ref={audioRef} src="/assets/aud.mp3" loop />
            <button
              onClick={togglePlayPause}
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                backgroundColor: "white",
                color: "black",
                border: "none",
                cursor: "pointer",
              }}
            >
              {isPlaying ? <FaPause size={20} /> : <FaPlay size={20} />}
            </button>
          </div>
          <div className="dropDown" onClick={handleClick}>
            <RiMenuFoldLine size={30} />
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
                <RiMenuFoldLine size={25} />
              </div>
              <ul className="rightUl">
                <a href="#home">
                  <li>
                    <HiMiniHomeModern /> HOME
                  </li>
                </a>
                <a href="#imaage">
                  <li>
                    <MdOutlineWorkHistory />
                    STORY
                  </li>
                </a>
                <a href="#image">
                  <li>
                    <BiSolidCollection />
                    COLLECTION
                  </li>
                </a>

                <a href="https://x.com/PengZuki_">
                  <li>
                    <FaXTwitter />
                    FOLLOW ON X
                  </li>
                </a>

                <a href="https://discord.gg/HX5Xvzbp">
                  <li>
                    <RiInstagramFill />
                    FOLLOW ON DISCORD
                  </li>
                </a>
                <a href="https://atlas3.io/project/pengzuki">
                  <li>
                    <PiTiktokLogoFill />
                    FOLLOW ON ATLAS
                  </li>
                </a>
                <Link to={"/comingsoon"}>
                  <li>
                    <GiStakesFence />
                    STAKING
                  </li>
                </Link>
                <Link to="/submit">
                  <button className="joinButton">APPLY FOR AIRDROP</button>
                </Link>
              </ul>
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
          <a href="#home">
            <li>
              <HiMiniHomeModern /> HOME
            </li>
          </a>
          <a href="#imaage">
            <li>
              <MdOutlineWorkHistory />
              STORY
            </li>
          </a>
          <a href="#image">
            <li>
              <BiSolidCollection />
              COLLECTION
            </li>
          </a>
        </ul>

        <div className="bottomUL">
          <ul>
            <a href="https://x.com/PengZuki_">
              <li>
                <FaXTwitter />
                FOLLOW ON X
              </li>
            </a>

            <a href="https://discord.gg/HX5Xvzbp">
              <li>
                <RiInstagramFill />
                FOLLOW ON DISCORD
              </li>
            </a>
            <a href="https://atlas3.io/project/pengzuki">
              <li>
                <PiTiktokLogoFill />
                FOLLOW ON ATLAS
              </li>
            </a>
          </ul>
          <Link to={"/comingsoon"}>
            <li>
              <GiStakesFence />
              STAKING
            </li>
          </Link>
          <Link to="/submit">
            <button className="joinButton">APPLY FOR AIRDROP</button>
          </Link>
        </div>
      </div>
      <div className="slidesContainer">
        <h1>THE PENGZUKIS CLUB</h1>
        <div className="flex">
          <Carousel />

          <div className="leftSlides" id="imaage">
            <Marquee class="animate__animated animate__backInRight">
              {img.map((item, index) => (
                <div
                  className="marqueDiv"
                  key={index}
                  style={{
                    width: "250px",
                    height: "220px",
                    borderRadius: "20px",
                    background: item.background,
                    overflow: "hidden",
                    marginRight: "20px", // Add spacing between slides if needed
                  }}
                >
                  <img
                    src={item.img}
                    alt=""
                    width={"100%"}
                    height={"100%"}
                    style={{
                      objectFit: "cover", // Ensures image fits properly
                    }}
                  />
                </div>
              ))}
            </Marquee>
            <button
              style={{
                width: "100%",
                backgroundColor: "#212121",
                color: "#ffffff",
                padding: "10px",
                borderRadius: "5px",
                marginTop: "10px",
                cursor: "pointer",
                fontSize: "20px",
                border: "none",
              }}
            >
              Explore More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
