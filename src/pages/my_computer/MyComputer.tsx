import '../my_computer/MyComputer.css';
import { useRef, useState, useEffect } from 'react';
import Navbar from '../my_computer/navbar/MyComputerNav';

export default function MyComputer(){
    const [isVisible, setIsVisible] = useState(true);
    const [isMinimized, setIsMinimized] = useState(false);
    const [isMaximized, setIsMaximized] = useState(false);
    const [position, setPosition] = useState({x: 100, y: 100});
    const [isDragging, setIsDragging] = useState(false);

    const [currentView, setCurrentView] = useState<"root" | "nostalgia-docs">("root");

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
            className='standard-title-bar'
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
                    <div 
                className='header-line'
                >

                </div>
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

                    {/*Render Views */}
                {currentView === "root" && (
                    <div>
                        <div
                        className='folder'
                        onClick={() => setCurrentView("nostalgia-docs")}
                        >
                            nostalgia Documents

                        </div>
                        <div className='folder'>
                            Backgrounds
                        </div>
                        <div className='folder'>
                            Display Pictures
                        </div>
                        
                    </div>
                    
                )}

                 {currentView === "nostalgia-docs" && (
                    <div className='folder-content'>
                        <button onClick={() => setCurrentView("root")}> 
                            ⬅ Back
                        </button>
                        <h3>Nostalgia Documents</h3>
                        <ul>
                            <li>Wallpapers</li>
                            <li>Display Pictures</li>
                        </ul>
                    </div>
                 )}
                </div>
            )}

        </div>
    )
}