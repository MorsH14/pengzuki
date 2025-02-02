import React, { useState } from 'react';
import './submit.css';
import { ImCancelCircle } from "react-icons/im";
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Submit = () => {
  const [text, setText] = useState('');

  const handleSubmit = () => {
    if (text.length <= 10 || text.trim() === '') {
      toast.error('Please enter a valid Address');
    } else {
      toast.success('Solana Address has been successfully Added');
    }
  };

  return (
    <div className="submitContainer">
      {/* Toast notifications */}
      <ToastContainer position="top-right" autoClose={3000} />

      {/* Cancel button */}
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

      {/* Input field and submit button */}
      <div className="solanaFill">
        <input
          name="text"
          type="text"
          placeholder="Input Your Solana Address"
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{
            width: '100%',
            padding: '10px',
            fontSize: '22px',
            border: 'none',
            borderRadius: '10px',
          }}
        />
        <button
          onClick={handleSubmit}
          style={{
            marginTop: '10px',
            padding: '10px',
            fontSize: '18px',
            border: 'none',
            borderRadius: '10px',
            color: 'white',
            cursor: 'pointer',
            backgroundColor: '#1a5231b6',
          }}
          className="joinButton" >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Submit;
