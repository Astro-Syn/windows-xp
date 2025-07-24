import '../limewire/LimeWire.css';
import { useRef, useState, useEffect } from 'react';
import LimewireNav from './LimewireNav';

export default function Limewire() {
    const [isVisible, setIsVisible] = useState(true);
    const [isMinimized, setIsMinimized] = useState(false);
    const [isMaximized, setIsMaximized] = useState(false);
    const [position, setPosition] = useState({ x: 100, y: 100 });
    const [offset, setOffset] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);

    const limewireRef = useRef<HTMLDivElement>(null);

    const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        if (isMaximized) return; 
        setIsDragging(true);
        const rect = limewireRef.current?.getBoundingClientRect();
        setOffset({
            x: e.clientX - (rect?.left || 0),
            y: e.clientY - (rect?.top || 0),
        });
    };

    const onMouseMove = (e: MouseEvent) => {
        if (isDragging) {
            setPosition({
                x: e.clientX - offset.x,
                y: e.clientY - offset.y,
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

    if (!isVisible) return null;

    return (
        <div
            ref={limewireRef}
            className={`limewire ${isMaximized ? 'maximized' : ''}`}
            style={{
                transform: isMaximized ? 'none' : `translate(${position.x}px, ${position.y}px)`,
                position: 'absolute',
            }}
        >
            <div className="limewire-header" onMouseDown={onMouseDown}>
                <div className='header-logo-container'>
                    <img
                className='limewire-little-pic'
                src='/Images/icon_limewire.png'
                />
                <span className="limewire-title">
                    LimeWire
                </span>
                </div>
                
                <div className="limewire-buttons">
                    <button onClick={() => setIsMinimized(!isMinimized)}>-</button>
                    <button onClick={() => setIsMaximized(!isMaximized)}>🗖</button>
                    <button onClick={() => setIsVisible(false)}>×</button>
                </div>
            </div>
            {!isMinimized && (
                <div className="limewire-content">
                    <LimewireNav />
                    <p>LimeWire</p>
                </div>
            )}
        </div>
    );
}
