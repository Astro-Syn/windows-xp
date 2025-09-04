import React, { useState } from 'react'
import "../msn_chat/MsnChat.css";

export default function MsnChat() {
    const [messages, setMessages] = useState<{ from: "me" | "bot"; text: string}[]>([]);
    const [input, setInput] = useState("");

    const botReply = (input: string) => {
            if(input.toLowerCase().includes("hello")) return "Hey! Long time to talk, what year is it?";
            if(input.toLowerCase().includes("2025")) return "Wow! I never knew it's been THAT long.";
            return "What should we talk about?";
        };

    const sendMessage = () => {
        if (input.trim()) return;

        setMessages([...messages, {from: "me", text: input}]);

        setTimeout(() => {
            setMessages(prev => [...prev, {from: "bot", text: botReply(input)}])}, 2000);

            setInput("");

        };

        
    
  return (
    <div className='messages-container'>
        <div className='messages'>
            <div className='chat-box-header'>
                <p>To: <b>Novie</b></p><p>Novie1993@hotmail.com</p>
            </div>
            <div>
                Never give out your password or credit card number in an instant message conversation.<br/>
                ______
            </div>
            {messages.map((m, i) => (
                <div key={i} className={`message ${m.from}`}>
            {m.text}
          </div>
            ))}
        </div>

            <div className='input-bar-container'>
                <div className='input-bar-options'>
                    <img 
                    className='text-input-bar'
                    src='/Images/msn_chat_text.png'/>
                    <img src='/Images/msn_chat_emoji.png'/>
                    <button>
                        <img src='/Images/msn_chat_voice_clip.png'/>
                        <p>Voice Clip</p>
                    </button>
                    
                    <img src='/Images/msn_chat_wink_emoji.png'/>
                    <img src='/Images/msn_chat_picture.png'/>
                    <img src='/Images/msn_chat_gift.png'/>
                    <img src='/Images/msn_chat_nudge.png'/>
            </div>
        <div className='input-bar'>
            
            <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <div className='send-btn'>
                <button onClick={sendMessage}>Send</button>

            </div>
            
        </div>

            </div>
            
    </div>
  );
}
