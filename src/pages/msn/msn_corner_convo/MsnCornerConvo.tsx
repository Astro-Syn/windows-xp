import React from 'react'
import '../msn_corner_convo/MsnCornerConvo.css';

export default function MsnCornerConvo() {
  return (
    <div>
      <div className='corner-convo-container'>
        <div className='corner-convo-box'>
            <div className='corner-convo-box-header'>
                <div className='corner-convo-box-header-title'>
                    <img
                src='/Images/tiny_msn_full.png'
                />
                <p>MSN Messenger</p>
                </div>
                
                <button>×</button>
            </div>
            <div className='corner-convo-box-content'>
                <div className='corner-convo-picture'>
                    <img
                    src='/Images/login_fish.png'
                    />
                </div>
                <div className='corner-convo-text-content'>
                    <p>Options</p>
                    <p>Novie has just signed in.</p>
                    <img
                    src='/Images/msn_logo.png'
                    />
                </div>
            </div>

        </div>
      </div>
    </div>
  )
}
