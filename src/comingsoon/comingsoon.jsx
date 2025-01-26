import React from 'react';
import './comingsoon.css';
import { ImCancelCircle } from "react-icons/im";
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import 'animate.css';

const ComingSoon = () => {

  return (
    <div className="submitContainer">
        <div
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          borderRadius: '5px',
          padding: '5px',
        }}
      >
        <Link to="/">
          <ImCancelCircle size={30} />
        </Link>
      </div>
        <h1 style={{
          fontSize: '50px'
        }}  class="animate__animated animate__bounce">COMING SOON!!!</h1>
      </div>
  );
};

export default ComingSoon;
