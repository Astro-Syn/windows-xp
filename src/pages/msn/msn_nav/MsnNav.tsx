import '../msn_nav/MsnNav.css';
import {useState, useEffect, useRef} from 'react';

export default function MsnNav() {
    const [open, setOpen] = useState(false);
    const [status, setStatus] = useState('Online');
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    }, []);

    const handleStatusChange = (newStatus: string) => {
        setStatus(newStatus);
        setOpen(false);
    }

    return (
        <div>
            <div className='msn-nav-container'>
                <nav className='msn-first-nav'>
                    <ul>
                        <li>
                            <p><u>F</u>ile</p>
                        </li>
                        <li>
                            <p><u>C</u>ontacts</p>
                        </li>
                        <li>
                            <p><u>A</u>ctions</p>
                        </li>
                        <li>
                            <p><u>T</u>ools</p>
                        </li>
                        <li>
                            <p><u>H</u>elp</p>
                        </li>
                    </ul>
                </nav>
                <nav className='msn-second-nav'>
                    <div className='first-row'>
                        <button className='down-up-btn'>
                            <img
                            
                            src='/Images/down_up_btn.png'
                            />
                        </button>
                        <img
                        className='msn-logo'
                        src='/Images/msn_logo.png'
                        /> 
                        
                        <p className='messenger-title'>Messenger</p>
                    </div>
                    <div className='second-row'>
                        <div className='image-container'>
                            <img
                        className='msn-display-pic'
                        src='/Images/login_duck.png'
                        />
                        </div>

                        {/*Dropdown Section*/}
                        <div className='info-container'>
                            <div className='name-and-status'>
                                <div></div>
                                <p>Nomad</p>
                                <div className='dropdown-status'
                                ref={dropdownRef}
                                >
                                    <button className='drop-btn'
                                    onClick={() => setOpen(!open)}
                                    >({status})
                                    <p>▾</p>
                                    </button>
                                    {open && (
                                        <div className='dropdown-content'>
                                        <a onClick={() => handleStatusChange("Online")}>Online</a>
                                        <a onClick={() => handleStatusChange("Away")}>Away</a>
                                        <a onClick={() => handleStatusChange("Busy")}>Busy</a>
                                        <a onClick={() => handleStatusChange("Appear Offline")}>Appear Offline</a>
                                    </div>
                                    )}
                                    
                                </div>
                            </div>
                            
                            <p>Type a personal message
                                ▾
                            </p>
                            
                            <img
                            className='msn-envelope'
                            src='/Images/msn_envelope.png'
                            >
                            </img>
                        </div>

                    </div>
                    


                </nav>
                
            </div>
        </div>
    )
}