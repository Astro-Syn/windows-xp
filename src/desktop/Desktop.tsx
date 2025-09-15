import React, { useState } from 'react';
import '../desktop/Desktop.css';
import Navbar from '../components/navbar/Navbar';
import MyComputer from '../pages/my_computer/MyComputer';

export default function Desktop() {
    const [showMyComputer, setShowMyComputer] = useState(false);

  return (
    <div className='desktop-container'>
        <Navbar onOpenMyComputer={() => setShowMyComputer(true)}/>

            {showMyComputer && (
                <MyComputer onClose={() => setShowMyComputer(false)}/>
            )}
    </div>
  )
}
