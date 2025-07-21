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
                                        <div className='item-box'>
                                            <img
                                        className='menu-icons'
                                        src='/Images/icon_internet_explorer.png'
                                        />
                                        <div className='top-icon-text'>
                                            <p>
                                                Internet
                                            </p>
                                            <p>
                                                Internet Explorer
                                            </p>
                                        </div>
                                       
                                        </div>
                                         
                                    </li>
                                    <li>
                                        <div className='item-box'>
                                            <img
                                         className='menu-icons'
                                        src='/Images/icon_email.png'
                                        />
                                        <div className='top-icon-text'>
                                            <p>E-mail</p>
                                            <p>Outlook Express</p>
                                        </div>
                                        
                                        </div>
                                        
                                        
                                        </li>
                                </ul>
                                <span className='divider'></span>
                                <ul>
                                    <li>
                                        <div className='item-box'>
                                            <img
                                         className='menu-icons'
                                        src='/Images/icon_msn2.png'
                                        />
                                        <p>MSN</p>

                                        </div>
                                        
                                    </li>
                                    <li>
                                        <div className='item-box'>
                                            <img
                                         className='menu-icons'
                                         src='/Images/icon_limewire.png'
                                        />
                                        <p>Limewire</p>
                                        </div>
                                        
                                    </li>
                                    <li>
                                        <div className='item-box'>
                                             <img
                                         className='menu-icons'
                                         src='/Images/icon_notepad.png'
                                        />
                                        <p>Notepad</p>
                                        </div>
                                       
                                    </li>
                                    <li>
                                        <div className='item-box'>
                                            <img
                                         className='menu-icons'
                                         src='/Images/icon_command.png'
                                        />
                                        <p>Command Prompt</p>
                                        </div>
                                        
                                        
                                    </li>
                                </ul>
                                <span className='divider'></span>

                                <div className='all-programs'>
                                    <p>All Programs</p>
                                    <img 
                                    className='green-arrow'
                                    src='/Images/icon_green_arrow.png'
                                    />
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
                                <li>
                                    <img 
                                    className='menu-icons-two'
                                    src='/Images/icon_folder_music.png'/>
                                    My Music
                                </li>
                                <li>
                                    <img
                                    className='menu-icons-two'
                                    src='/Images/icon_my_computer.png'
                                    />
                                    My Computer
                                </li>
                            </ul>
                            <span className='divider'></span>
                            <ul>
                                <li>
                                    <img
                                    className='menu-icons-two'
                                    src='/Images/icon_control_panel.png'
                                    />
                                    Control Panel
                                </li>
                                <li>
                                    <img
                                    className='menu-icons-two'
                                    src='/Images/icon_default.png'
                                    />
                                    Set Program Access and Defaults
                                </li>
                                <li>
                                    <img
                                    className='menu-icons-two'
                                    src='/Images/icon_printers_and_faxes.png'
                                    />
                                    Printers and Faxes
                                </li>
                            </ul>
                            <span className='divider'></span>
                            <ul>
                                <li>
                                    <img
                                    className='menu-icons-two'
                                    src='/Images/icon_help.png'
                                    />
                                    Help and Support
                                </li>
                                <li>
                                    <img
                                    className='menu-icons-two'
                                    src='/Images/icon_search.png'
                                    />
                                    Search
                                </li>
                                <li>
                                    <img
                                    className='menu-icons-two'
                                    src='/Images/icon_run.png'
                                    />
                                    Run...
                                </li>
                            </ul>
                            </div>

                            </div>
                            
                            <div className='row-bottom'>
                                <div>
                                    <div className='off-buttons-container'>
                                        <div className='log-off'>
                                            <img
                                            className='log-icons'
                                            src='/Images/icon_log_off_2.png'
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