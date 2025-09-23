import React, {useState, useRef} from 'react';
import '../disc/InsertDisc.css';

type InsertDiscProps = {
    onClose: () => void;
};

export default function InsertDisc({onClose}: InsertDiscProps) {
    const [isVisible, setIsVisible] = useState(true);
    const [position, setPosition] = useState({x: 100, y:100});

    const insertDiscRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const offsetRef = useRef({x: 0, y: 0});
  return (
    <div className='disc-popup-container'>
        <div className='standard-title-bar'>
            <div className='nav-title'>
                <img 
                className='nav-img'
                src='Images/x_icon.png'/>
                <p>D:\</p>
            </div>
            <div className="nav-buttons">
                    <button className='standard-nav-btn-close' onClick={() => setIsVisible(false)}>×</button>
                </div>
            
        </div>
        <div className='disc-message-container'>
            <div className='disc-popup-message'>
            <img 
            src='Images/x_icon.png'/>
            <p>Please insert a disc into Removable Disk (D:)</p>
            
        </div>
        <div className='ok-container'>
            <button>OK</button>
        </div>
        </div>

        
        
    </div>
  )
}
