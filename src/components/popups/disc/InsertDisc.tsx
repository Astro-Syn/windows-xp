import React, {useState, useRef, useEffect} from 'react';
import '../disc/InsertDisc.css';

type InsertDiscProps = {
    onClose: () => void;

};

export default function InsertDisc({onClose}: InsertDiscProps) {
    const [position, setPosition] = useState({x: 100, y:100});
    const insertDiscRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const offsetRef = useRef({x: 0, y: 0});


        const onMouseMove = (e: MouseEvent) => {
        if (isDragging) {
            setPosition({
                x: e.clientX - offsetRef.current.x, 
                y: e.clientY - offsetRef.current.y,
            });
        }
    };

    const onMouseUp = () => {
        setIsDragging(false);
    };

        useEffect(() => {
            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseup', onMouseUp);
            return () => {
                document.removeEventListener('mousemove', onMouseMove);
                document.removeEventListener('mouseup', onMouseUp);
            };
        });
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
                    <button className='standard-nav-btn-close' onClick={onClose}>×</button>
                </div>
            
        </div>
        <div className='disc-message-container'>
            <div className='disc-popup-message'>
            <img 
            src='Images/x_icon.png'/>
            <p>Please insert a disc into Removable Disk (D:)</p>
            
        </div>
        <div className='ok-container'>
            <button
            onClick={onClose}
            >OK</button>
        </div>
        </div>

        
        
    </div>
    )
    
}
