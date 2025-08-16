import React from 'react'
import '../msn_header/MsnHeader.css';

export default function MsnHeader() {
  return (
    <div>
      <div className='msn-header-container'>
        <div className='med-msn-icon'>
            <img src='/Images/med_msn_icon.png'/>
        </div>
        <div className='customer-and-contact'>
            <div className='info'>
                <img
                src='/Images/icon_info.png'
                />
                <p>Click here to learn about the Customer Experience Improvment Program</p>
            </div>
            <div className='add-contact'>
                <img src='/Images/tiny_msn_add_contact.png'/>
                <p>Add a Contact</p>
            </div>
        </div>

      </div>
    </div>
  )
}
