import '../msn_nav/MsnNav.css';
import {useState, useEffect, useRef} from 'react';

export default function MsnNav() {
    const [open, setOpen] = useState(false);
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
    })

    return (
        <div>
            <div className='msn-nav-container'>
                <nav className='msn-first-nav'>
                    <ul>
                        <li>File</li>
                        <li>Contacts</li>
                        <li>Actions</li>
                        <li>Tools</li>
                        <li>Help</li>
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
                                    >(Online)
                                    <p>▾</p>
                                    </button>
                                    {open && (
                                        <div className='dropdown-content'>
                                        <a>Online</a>
                                        <a>Away</a>
                                        <a>Busy</a>
                                        <a>Appear Offline</a>
                                    </div>
                                    )}
                                    
                                </div>
                            </div>
                            
                            <p>Type a personal message
                                <p>▾</p>
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