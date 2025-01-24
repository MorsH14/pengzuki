import React from 'react'
import './submit.css'
import { ImCancelCircle } from "react-icons/im";


const Submit = () => {
  return (
    <div className='submitContainer'>
        <div className="" style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            borderRadius: '5px',
            padding: '5px',
        }}>
            <a href="/">
            <ImCancelCircle size={30}/></a>
             </div>
       <div className="solanaFill">
        <input type="text" placeholder='Input Your Solana Address' style={{
            width: '100%',
            padding: '10px',
            fontSize: '22px',
            border: 'none',
            borderRadius: '10px',
        }}/>
        <button className="joinButton">Submit</button>
        </div> 
    </div>
  )
}

export default Submit