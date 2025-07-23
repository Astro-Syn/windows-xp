import { useState, useEffect } from 'react';
import '../time/Time.css';


export default function Time() {
    const [time, setTime] = useState("");

   useEffect(() => {
    function updateTime() {
        const now = new Date();
        const formattedTime = now.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,
        });
        setTime(formattedTime);
    }

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
   }, [])
    
        
    return (
        <div className='date'>
            <p>{time}</p>
        </div>
    )

}