import '../msn/Msn.css';
import MsnNames from '../msn/msn_names/MsnNames';
import MsnNav from '../msn/msn_nav/MsnNav';
import { useRef, useState, useEffect } from 'react';


export default function Msn(){
    const [isVisible, setIsVisible] = useState(true);
    const [isMinimized, setIsMinimized] = useState(false);
    const [isMaximized, setIsMaximized] = useState(false);
    const [position, setPosition] = useState({x: 100, y: 100});
    const [isDragging, setIsDragging] = useState(false);

    const msnRef = useRef<HTMLDivElement>(null);
    const offsetRef = useRef({ x: 0, y: 0});

    const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        if (isMaximized) return;
        setIsDragging(true);
        const rect = msnRef.current?.getBoundingClientRect();
        offsetRef.current = {
            x: e.clientX - (rect?.left || 0),
            y: e.clientY - (rect?.top || 0),
        };
    };

    const onMouseMove = (e: MouseEvent) => {
        if (isDragging) {
            setPosition({
                x: e.clientX - offsetRef.current.x,
                y: e.clientY - offsetRef.current.y, 
            })
        }
    };

    const onMouseUp = () => {
        setIsDragging(false);
    };

    useEffect(() => {
        document.addEventListener('mousemove', onMouseMove);
        document. addEventListener('mouseup', onMouseUp);
        return () => {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener
            ('mouseup', onMouseUp);
        };
    });

    if (!isVisible) return null;

    return (
        <div
        ref={msnRef}
        className={`msn ${isMaximized ? 'maximized' : ''}`}
        style={{
            top: isMaximized ? 0 : `${position.y}px`,
            left: isMaximized ? 0 : `${position.x}px`,
            position: 'absolute',
        }}
        >
            <div 
            className='msn-header'
            onMouseDown={onMouseDown}>
                <div 
                className='header-line'
                >

                </div>
                <div
                className='header-logo-container'>
                    <img
                    className='msn-little-pic'
                    src='/Images/tiny_msn_full.png'
                    />
                    <span
                    className='msn-title'
                    >
                       MSN Messenger
                    </span>
                </div>
                <div
                className='msn-buttons'
                >
                    <button
                    onClick={() => setIsMinimized (!isMinimized)}
                    >-</button>
                    <button onClick={() => setIsMaximized (!isMaximized)}>🗖</button>
                    <button onClick={() => setIsVisible(false)}>×</button>
                </div>
            </div>
            {!isMinimized && (
                <div
                className='msn-content'
                >
                    
                    <MsnNav />
                    <MsnNames />                   

                </div>
            )}

        </div>
    )
}