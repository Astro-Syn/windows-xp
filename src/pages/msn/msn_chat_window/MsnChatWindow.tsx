import React, { useState, useRef, useEffect} from 'react';
import MsnChat from '../msn_chat/MsnChat';
import '../msn_chat_window/MsnChatWindow.css';


export default function MsnChatWindow() {
    const [isVisible, setIsVisible] = useState(true);
    const [isMinimized, setIsMinimized] = useState(false);
    const [isMaximized, setIsMaximized] = useState(false);
    const [position, setPosition] = useState({x: 100, y:100});
    const [isDragging, setIsDragging] = useState(false);

    const msnChatWindowRef = useRef<HTMLDivElement>(null);
    const offsetRef = useRef({x: 0, y: 0});

    const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        if(isMaximized) return;
        setIsDragging(true);
        const rect = msnChatWindowRef.current?.getBoundingClientRect();
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
    if (!isVisible) return null;


  return (
<div
ref={msnChatWindowRef}
className={`msnChatWindow ${isMaximized ? 'maximized' : ''}`}
style={{
    top: isMaximized ? 0 : `${position.y}px`,
    left: isMaximized ? 0 : `${position.x}px`,
    position: 'absolute',
}}
>
    <div className='msn-chat-window-container'>
        <div className='msn-chat-window'>

            {/*Standard Blue Title */}
            <div className='standard-title-bar'
            onMouseDown={onMouseDown}
            >
                <div className='header-logo-container'>
                    <img
                    src='/Images/msn_chat_invite.png'
                    />
                    <span className='msn-chat-window-title'>    
                        Novie Chat
                    </span>
                    
                </div>
                <div className='header-line'>

                    </div>

                <div className='msn-chat-window-buttons'>
                    <button onClick={() => setIsMinimized(!isMinimized)}>-</button>
                    <button onClick={() => setIsMaximized(!isMaximized)}>🗖</button>
                    <button onClick={() => setIsVisible(false)}>×</button>
                </div>
            </div>

            {!isMinimized && ( 
                <div className='msn-chat-window-content'>

                </div>
            )}
            <div className='msn-chat-window-header-two'>
            File, edit, actions, tools
            </div>

            {/*Curvy Header */}
            <div className='msn-chat-window-header-three-container'>
                

  <div className="banner">
  <svg viewBox="0 500 2200 1000" xmlns="http://www.w3.org/2000/svg">
  
    <defs>
  <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
    <stop offset="10%" stopColor="#DCEFF5" />
    <stop offset="50%" stopColor="#A3C5CC" />
    <stop offset="100%" stopColor="#DCEFF5" />
  </linearGradient>
</defs>

    <path
     d='M 4040 640 Q 1440 640 1200 640 C 1120 640 1120 800 1040 800 Q 880 800 -400 800 C -400 720 -400 560 -400 480 V 480 L 2940 480'
      fill="url(#waveGradient)"
      stroke="gray"
      strokeWidth="5"
    />
  </svg>

  <div className='inner-content'>
    <button
    className='up-down-btn'
    >
        <img
        
        src='/Images/down_up_btn.png'
        />
    </button>
    <div className='options-buttons-container'>
            <button>
        <img
        src='/Images/msn_chat_invite.png'
        />
        <p>Invite</p>
    </button>
    <button>
        <img
        src='/Images/msn_chat_send_files.png'
        />
        <p>Send Files</p>
    </button>
    <button>
        <img
        src='/Images/msn_chat_voice.png'
        />
        <p>Voice</p>
    </button>
    <button>
        <img
        src='/Images/msn_chat_activities.png'
        />
        <p>Activities</p>
    </button>
    <button>
        <img
        src='/Images/msn_chat_games.png'
        />
        <p>Games</p>
    </button>
    
    
    </div>
    
    <div className='msn-chat-window-logo'>
            <img
            src='/Images/msn_logo.png'
            />
    </div>
  </div>
</div>






                <div className='msn-chat-window-header-three-right'>
                    Block, customize
                </div>

            </div>

            {/*Content */}
            <div className='msn-chat-window-content-container'>
                <div className='msn-chat-top-content'>
                    <div className='msn-chat-conversation'>
                    <MsnChat/>
                </div>
                <div className='msn-chat-display-picture-box'>
                    <div className='msn-chat-display-picture'>
                        <img/>
                    </div>
                </div>
                

                </div>
                
            </div>
        </div>
      
    </div>
</div>
  )
}
