import React, { useState, useEffect } from 'react'
import "../msn_chat/MsnChat.css";

export default function MsnChat() {
    const [messages, setMessages] = useState<{ from: "me" | "bot"; text: React.ReactNode }[]>([]);
    const [input, setInput] = useState("");

    useEffect(() => {
        setMessages([{ from: "bot", text: (
            <>
            <span style={{color: "#5A5A5A"}}>Novie says:</span>
            <br />
            <span style={{ color: "black"}}>hey!</span>
            </>
        )}])
    }, [])

    const botReply = (input: string) => {
            if(input.toLowerCase().includes("hello") || (input.toLowerCase().includes("hey"))) 
                
                return <>
            <span style={{color: "#5A5A5A"}}>Novie says:</span>
            <br />
            <span style={{ color: "black"}}>Where did you go?</span>
            </>
            
            if(input.toLowerCase().includes("2025") || (input.toLowerCase().includes("2026") || (input.toLowerCase().includes("2026")))) 
                
                return  <>
            <span style={{color: "#5A5A5A"}}>Novie says:</span>
            <br />
            <span style={{ color: "black"}}>It's 2007. Are you okay?</span>
            </>

            return <>
            <span style={{color: "#5A5A5A"}}>Novie says:</span>
            <br />
            <span style={{ color: "black"}}>Go get some rest.</span>
            </>
        };

    const sendMessage = () => {
        if (!input.trim()) return;

        const myMessage = (
            <>
            <span style={{ color: "#5A5A5A", marginTop: "10px" }}>Nomad says:</span>
            <br />
            <span style={{ color: "black" }}>{input}</span>
            </>
        );

        setMessages([...messages, {from: "me", text: myMessage}]);

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

            <div className='message-content'>
                <div className='chat-warning'>
                <p>
                    <img src='Images/tiny_never_give_out.png'/>Never give out your password or credit card number in an instant message conversation.<br/>
                ______
                </p>
                
            </div>
            {messages.map((m, i) => (
                <div key={i} className={`message ${m.from}`}>
            {m.text}
          </div>
            ))}

            </div>
            
        </div>

            <div className='input-bar-container'>
                <div className='input-bar-options'>
                    <button>
                        <img 
                    className='text-input-bar'
                    src='/Images/msn_chat_text.png'/>
                    </button>
                    
                    <button>
                        <img src='/Images/msn_chat_emoji.png'/>
                    </button>
                    
                    <button>
                        <img src='/Images/msn_chat_voice_clip.png'/>
                        <p>Voice Clip</p>
                    </button>
                    <button>
                        <img src='/Images/msn_chat_wink_emoji.png'/>
                    </button>
                    
                    <button>
                        <img src='/Images/msn_chat_picture.png'/>
                    </button>
                    <button>
                        <img src='/Images/msn_chat_gift.png'/>
                    </button>
                    <button>
                        <img src='/Images/msn_chat_nudge.png'/>
                    </button>
                    
            </div>
        <div className='input-bar'>
            
            <textarea className='text-box'
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <div className='send-btn'>
                <button onClick={sendMessage}>Send</button>

            </div>
            
        </div>
        {/*Bottom section of Input */}
        <div className='bottom-option-input-container'>
                <div className='bottom-option-icons-container'>
                
                <div className='bottom-option-icons'>
                    <button>
                        <img src='Images/msn_chat_pen_bottom.png'/>
                    </button>
                    <button>
                        <img src='Images/msn_chat_text.png'/>
                    </button>
                </div>
                
            </div>
        </div>
        

            </div>
            
    </div>
  );
}
