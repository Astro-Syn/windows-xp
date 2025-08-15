import '../my_computer/MyComputer.css';
import { useRef, useState, useEffect } from 'react';
import Navbar from '../my_computer/navbar/MyComputerNav';

export default function MyComputer(){
    const [isVisible, setIsVisible] = useState(true);
    const [isMinimized, setIsMinimized] = useState(false);
    const [isMaximized, setIsMaximized] = useState(false);
    const [position, setPosition] = useState({x: 100, y: 100});
    const [isDragging, setIsDragging] = useState(false);

    const myComputerRef = useRef<HTMLDivElement>(null);
    const offsetRef = useRef({ x: 0, y: 0});

    const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        if (isMaximized) return;
        setIsDragging(true);
        const rect = myComputerRef.current?.getBoundingClientRect();
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
        ref={myComputerRef}
        className={`my-computer ${isMaximized ? 'maximized' : ''}`}
        style={{
            top: isMaximized ? 0 : `${position.y}px`,
            left: isMaximized ? 0 : `${position.x}px`,
            position: 'absolute',
        }}
        >
            <div 
            className='my-computer-header'
            onMouseDown={onMouseDown}>
                <div
                className='header-logo-container'>
                    <img
                    className='my-computer-little-pic'
                    src='/Images/tiny_my_computer.png'
                    />
                    <span
                    className='my-computer-title'
                    >
                        My Computer
                    </span>
                </div>
                <div
                className='my-computer-buttons'
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
                className='my-computer-content'
                >
                    
                    <Navbar/>

                </div>
            )}

        </div>
    )
}