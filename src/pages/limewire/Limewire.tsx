import '../limewire/LimeWire.css';
import { useRef, useState, useEffect } from 'react';
import LimewireNav from './LimewireNav';
import LimewireNavTwo from './LimewireNavTwo';
import LimewireSearch from './search/LimewireSearch';

type LimewireProps = {
    onClose: () => void;
}

export default function Limewire({ onClose }: LimewireProps) {
    
    const [isMinimized, setIsMinimized] = useState(false);
    const [isMaximized, setIsMaximized] = useState(false);
    const [position, setPosition] = useState({ x: 100, y: 100 });
    const [isDragging, setIsDragging] = useState(false);

    const limewireRef = useRef<HTMLDivElement>(null);
    const offsetRef = useRef({ x: 0, y: 0 });

    const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        if((e.target as HTMLElement).closest(".nav-buttons")) return;
        if (isMaximized) return;
        setIsDragging(true);
        const rect = limewireRef.current?.getBoundingClientRect();
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
        <div
            ref={limewireRef}
            className={`limewire ${isMaximized ? 'maximized' : ''}`}
            style={{
    top: isMaximized ? 0 : `${position.y}px`,
    left: isMaximized ? 0 : `${position.x}px`,
    position: 'absolute',
}}

        >
            <div className="standard-title-bar" onMouseDown={onMouseDown}>
                <div className='header-logo-container'>
                    <img
                        className='limewire-little-pic'
                        src='/Images/icon_limewire.png'
                    />         
                    <span className="limewire-title">
                        LimeWire: Enabling Open Information Sharing
                    </span>
                    <div className='header-line'>

                    </div>
                </div>

                <div className="nav-buttons">
                    <button  className='standard-nav-btn-min' onClick={() => setIsMinimized(!isMinimized)}>-</button>
                    <button className='standard-nav-btn-max' onClick={() => setIsMaximized(!isMaximized)}>🗖</button>
                    <button className='standard-nav-btn-close' onClick={onClose}>×</button>
                </div>
            </div>
            {!isMinimized && (
                <div className="limewire-content">
                    <LimewireNav />
                    <LimewireNavTwo />
                    <LimewireSearch />
                </div>
            )}
        </div>
    );
}
