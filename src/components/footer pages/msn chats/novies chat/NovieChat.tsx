import React, { useState } from 'react';
import '../../msn chats/novies chat/NovieChat.css';
import '../../../footer/Footer.css';
import MsnChatWindow from '../../../../pages/msn/msn_chat_window/MsnChatWindow.tsx';

export default function NovieChat() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  const handleTaskbarClick = () => {
    if (!isVisible) {
      // First click: open window
      setIsVisible(true);
      setIsMinimized(false);
    } else {
      // Already open: toggle minimized/restore
      setIsMinimized((prev) => !prev);
    }
  };

  return (
    <div>
      {/* Taskbar Button */}
      <button onClick={handleTaskbarClick} className="footer-page">
        Novie - Conversation
      </button>

     
    </div>
  );
}
