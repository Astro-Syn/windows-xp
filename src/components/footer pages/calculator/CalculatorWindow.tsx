import React, { useState, useEffect, useRef } from 'react';
import "../calculator/CalculatorWindow.css";
import CalculatorBody from './calculator body/CalculatorBody';

type Props = {
    onClose: () => void;
};

export default function CalculatorWindow({ onClose }: Props) {
    const [isMinimized, setIsMinimized] = useState(false);
        const [isMaximized, setIsMaximized] = useState(false);
        const [position, setPosition] = useState({ x: 1500, y: 300 });
        const [isDragging, setIsDragging] = useState(false);

            const calculatorRef = useRef<HTMLDivElement>(null);
            const offsetRef = useRef({ x: 0, y: 0 });
        
            const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
                if (isMaximized) return;
                setIsDragging(true);
                const rect = calculatorRef.current?.getBoundingClientRect();
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
    ref={calculatorRef}
    className='calculator-window'
    style={{
    position: isMaximized ? "fixed" : "absolute",
    top: isMaximized ? 0 : position.y,
    left: isMaximized ? 0 : position.x
  }}
    
    >
        <div 
        className='standard-title-bar'
        onMouseDown={onMouseDown}
        ><div className='calc-title'><img className='little-calculator' src='Images/tiny_calculator.png'/><p>Calculator</p></div>
            <div className='nav-buttons'>
                <button
                    className='standard-nav-btn-min'
                    onClick={(e) => {
                    e.stopPropagation();
                    setIsMinimized(!isMinimized);
                    }}
                >
                    -
                </button>

                <button
                className='standard-nav-btn-max'
                    onClick={(e) => {
                    e.stopPropagation();
                    setIsMaximized(!isMaximized);
                    }}
                >
                    🗖
                </button>

                <button
                className='standard-nav-btn-close'
                onClick={(e) => {
                    e.stopPropagation();
                    onClose();
                }}
                >
                ×
                </button>

            </div>
        
        
        </div>
        <div className='calculator-nav'>
            <ul>
                <li><p><u>E</u>dit</p></li>
                <li><p><u>V</u>iew</p></li>
                <li><p><u>H</u>elp</p></li>
            </ul>
        </div>
        
        <div className='calculator-body'>
            <div>
                <CalculatorBody />
            </div>
        </div>
    </div>
  )
}
