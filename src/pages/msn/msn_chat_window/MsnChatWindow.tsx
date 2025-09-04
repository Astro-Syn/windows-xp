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
                <div className='msn-chat-window-header-logo-container'>
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
            <ul>
                <li>File</li>
                <li>Edit</li>
                <li>Actions</li>
                <li>Tools</li>
                <li>Help</li>
            </ul>
            </div>

            {/*Curvy Header */}
            <div className='msn-chat-window-header-three-container'>
                

  <div className="banner">
  <svg viewBox="0 540 2200 1000" xmlns="http://www.w3.org/2000/svg">
  
    <defs>
  <linearGradient id="waveGradient" x1="10%" y1="30%" x2="40%" y2="100%">
    <stop offset="5%" stopColor="#eafaffff" />
    <stop offset="40%" stopColor="#aec0dbda" />
    <stop offset="70%" stopColor="#f3fcffff" />
  </linearGradient>
</defs>
    <path
  d="M 4040 640 
     Q 1640 640 1400 640 
     C 1320 640 1320 800 1240 800 
     Q 1080 800 -200 800 
     C -200 720 -200 560 -200 480 
     V 480 L 2940 480"
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
            <img src='/Images/msn_chat_invite.png'/>
        <p>Invite</p>
    </button>
    <button>
        <img src='/Images/msn_chat_send_files.png'/>
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

            <div className='banner-two'>
                <div className='msn-chat-window-header-three-right'>
                    
                    <svg width='220' height='180' viewBox='0 0 280 490' xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="waveGradient2" x1="40%" y1="30%" x2="40%" y2="100%">
                                <stop offset="1%" stopColor="#aec0dbda" />
                                <stop offset="70%" stopColor="#f3fcffff" />
                                <stop offset="100%"  stopColor="#aec0dbda"/>
                            </linearGradient>
                        </defs>
                        <path
                    d="M 52 0
                    L 288 0
                    Q 300 0 296.21 11.39
                    L 263.79 108.61
                    Q 260 120 248 120
                    L 12 120
                    Q 0 120 3.79 108.61
                    L 36.21 11.39
                    Q 40 0 52 0
                    Z"
                fill="url(#waveGradient2)"
                stroke="gray"
                strokeWidth="5"
                />
                
                    </svg>
                

                </div>
                <div className='banner-two-button-container'>
                    <button className='banner-two-button'>
                        <img src='Images/msn_chat_block.png'/>
                    </button>
                    <button className='banner-two-button'>
                        <img src='Images/msn_chat_customize.png'/>
                    </button>
                </div>
                
            </div>

                

            </div>

            {/*Content */}
            <div className='msn-chat-window-content-container'>
                <div className='msn-chat-left-content'>
                    <div className='msn-chat-conversation'>
                    <MsnChat/>
                </div>

                

                </div>
                <div className='msn-chat-display-picture-container'>
                    <div className='msn-chat-display-pic'>
                        <img
                        src='/Images/login_fish.png'
                        />
                        <img
                        src='/Images/msn_chat_webcam.png'
                        />
                    </div>
                    <div className='msn-chat-display-pic'>
                        <img
                        src='/Images/login_duck.png'
                        />
                        
                    </div>
                </div>
                
            </div>
        </div>
      
    </div>
</div>
  )
}
