import React, { useState } from 'react';
import '../../msn chats/novies chat/NovieChat.css';
import MsnChatWindow from '../../../../pages/msn/msn_chat_window/MsnChatWindow.tsx';

export default function NovieChat() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);

  const handleTaskbarClick = () => {
    if (!isVisible) {
      setIsVisible(true);
      setIsMinimized(false);
    } else {
      setIsMinimized(prev => !prev);
    }
  };

  return (
    <div>
      {/* Taskbar Button */}
      <button onClick={handleTaskbarClick} className="footer-page">
        Novie - Conversation
      </button>

      {/* MSN Chat Window */}
      {isVisible && (
        <MsnChatWindow
          onClose={() => setIsVisible(false)}
          onMinimize={() => setIsMinimized(prev => !prev)}
          onMaximize={() => setIsMaximized(prev => !prev)}
          isMinimized={isMinimized}
          isMaximized={isMaximized}
        />
      )}
    </div>
  );
}
