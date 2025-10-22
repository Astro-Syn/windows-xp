import '../my_computer/MyComputer.css';
import { useRef, useState, useEffect } from 'react';
import Navbar from '../my_computer/navbar/MyComputerNav';
import OldWeb from '../nostalgia/old_web_photos/OldWeb';
import Neopets from '../nostalgia/old_web_photos/neopets/Neopets';
import Myspace from '../nostalgia/old_web_photos/myspace/Myspace';
import HabboHotel from '../nostalgia/old_web_photos/habbo_hotel/HabboHotel';


export type NostalgiaView =
  | "root"
  | "nostalgia-docs"
  | "old-web"
  | "desktop-backgrounds"
  | "user-icons"
  | "myspace"
  | "neopets"
  | "habbo-hotel";

export default function MyComputer({ onClose }: { onClose: () => void }) {
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [position, setPosition] = useState({ x: 150, y: 50 });
  const [isDragging, setIsDragging] = useState(false);

  const [currentView, setCurrentView] = useState<NostalgiaView>("root");


const goTo = (view: NostalgiaView) => setCurrentView(view);
  const goBack = () => setCurrentView("nostalgia-docs");


  const myComputerRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef({ x: 0, y: 0 });

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
      ref={myComputerRef}
      className={`my-computer ${isMaximized ? 'maximized' : ''}`}
      style={{
        top: isMaximized ? 0 : `${position.y}px`,
        left: isMaximized ? 0 : `${position.x}px`,
        position: 'absolute',
      }}
    >
      <div className='standard-title-bar' onMouseDown={onMouseDown}>
        <div className='header-logo-container'>
          <img
            className='my-computer-little-pic'
            src='/Images/tiny_my_computer.png'
          />
          <span className='my-computer-title'>My Computer</span>
          <div className='header-line'></div>
        </div>
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

      {!isMinimized && (
        <div className='my-computer-content'>
          <Navbar />
          {/* Render Views */}
          {currentView === "old-web" && (
            <OldWeb goTo={goTo} goBack={goBack} />
          )}
        {currentView === "neopets" && (
        <Neopets goTo={goTo} goBack={goBack} />
        )}
        {currentView === "myspace" && (
        <Myspace goTo={goTo} goBack={goBack} />
        )}
        {currentView === "habbo-hotel" && (
        <HabboHotel goTo={goTo} goBack={goBack} />
        )}

          
          {currentView === "root" && (
            <div>
              {/* Root contents go here */}
            </div>
          )}
          
        </div>
      )}
    </div>
  );
}
