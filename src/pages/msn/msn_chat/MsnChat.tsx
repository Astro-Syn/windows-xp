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
            {messages.map((m, i) => (
                <div key={i} className={`message ${m.from}`}>
            {m.text}
          </div>
            ))}
        </div>

        <div className='input-bar'>
            <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button onClick={sendMessage}>Send</button>
        </div>
    </div>
  );
}
