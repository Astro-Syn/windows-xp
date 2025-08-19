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
            <div className='msn-chat-window-header'>
                Header
            </div>
            <div className='msn-chat-window-header-two'>
            File, edit, actions, tools
            </div>

            {/*Curvy Header */}
            <div className='msn-chat-window-header-three-container'>
                <div className='msn-chat-window-header-three-left'>
                    Invite, Send Files, Video, Voice
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
                    <div className='msn-chat-display-pictire'>
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
