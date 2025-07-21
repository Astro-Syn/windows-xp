import '../footer/Footer.css';
import { useState } from 'react';

export default function Footer(){
    const [menu, setMenu] = useState(false);
    return (
        <div className='footer-container'>
            <div className='footer'>
                {
                    menu && (
                        <div className="start-menu">
                            <div className='row-top'>
                                <div className='userInfo'>
                                    display pic and username
                                </div>
                            </div>
                            <div className='both-cols'>
                                <div className='col-one'>
                                <ul>
                                    <li>
                                        <img
                                        className='menu-icons'
                                        src='/Images/icon_internet_explorer.png'
                                        />
                                        Internet Exolorer</li>
                                    <li>
                                        <img
                                         className='menu-icons'
                                        src='/Images/icon_email.png'
                                        />
                                        E-mail
                                        
                                        </li>
                                </ul>
                                <span>----</span>
                                <ul>
                                    <li>
                                        <img
                                         className='menu-icons'
                                        src='/Images/icon_msn2.png'
                                        />
                                        MSN
                                    </li>
                                    <li>
                                        <img
                                         className='menu-icons'
                                         src='/Images/icon_limewire.png'
                                        />
                                        Limewire
                                    </li>
                                    <li>
                                        <img
                                         className='menu-icons'
                                         src='/Images/icon_notepad.png'
                                        />
                                        Notepad
                                    </li>
                                    <li>
                                        <img
                                         className='menu-icons'
                                         src='/Images/icon_command.png'
                                        />
                                        Command Prompt
                                    </li>
                                </ul>
                                <span>----</span>
                                <div className='all-programs'>
                                    <p>All Programs</p>
                                </div>
                            </div>
                            <div className='col-two'>
                            <ul>
                                <li>
                                    <img
                                    className='menu-icons-two'
                                    src='/Images/icon_my_documents.png'
                                    />
                                    My Documents
                                </li>
                                <li>
                                    <img
                                    className='menu-icons-two'
                                    src='/Images/icon_my_pictures.png'
                                    />
                                    My Pictures
                                </li>
                                <li>My Music</li>
                                <li>
                                    <img
                                    className='menu-icons'
                                    src='/Images/icon_my_computer.png'
                                    />
                                    My Computer
                                </li>
                            </ul>
                            <span>------</span>
                            <ul>
                                <li>Control Panel</li>
                                <li>Set Program Access and Defaults</li>
                                <li>Printers and Faxes</li>
                            </ul>
                            <span>-------</span>
                            <ul>
                                <li>
                                    <img
                                    className='menu-icons-two'
                                    src='/Images/icon_help.png'
                                    />
                                    Help and Support
                                </li>
                                <li>Search</li>
                                <li>Run...</li>
                            </ul>
                            </div>

                            </div>
                            
                            <div className='row-bottom'>
                                <div>
                                    <div className='off-buttons-container'>
                                        <div className='log-off'>
                                            <img
                                            className='log-icons'
                                            src='/Images/icon_log_off.png'
                                            />
                                             <p>Log Off</p>
                                        </div>
                                        <div className='shut-down'>
                                            <img
                                            className='log-icons'
                                            src='/Images/icon_turn_off.png'
                                            />
                                        <p>Turn Off Computer</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
                <button 
                className='start-btn'
                onClick={() => setMenu(!menu)}
                >
                <img
                className='win-logo'
                src='Images/windows_logo.png'
                >
                </img>    
                start
                </button>
            </div>
            
        </div>
    )
}