import '../footer/Footer.css';
import { useState } from 'react';
import Time from '../time/Time';
import { IoIosArrowBack } from "react-icons/io";

export default function Footer(){
    const [menu, setMenu] = useState(false);
    const [programs, setPrograms] = useState(false);
    return (
        <div className='footer-container'>
            <div className='footer-gradient'></div>
            <div className='footer'>
                

                <div className='time-container'>
                    <div className='tiny-img-container'>
                        <img src='/Images/tiny_msn.png'/>
                        <img src='/Images/tiny_volume.png'/>
                    </div>
                    <Time />
                    <button className='footer-right-btn'>
                    <IoIosArrowBack />
                </button>
                </div>
                
                {
                    menu && (
                        <div className="start-menu">
                            <div className='row-top'>
                                <div className='top-row-gradient'></div>
                                <div className='userInfo'>
                                    <img
                                    className='login-pic'
                                    src='/Images/login_drip.png'
                                    /> 
                                    <p>Kelsey Synnpulse</p>
                                </div>
                                
                            </div>
                            <div className='yellow-underline'></div>
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
                                        src='/Images/icon_msn_3.png'
                                        />
                                        <p>Windows Messenger</p>

                                        </div>
                                        
                                    </li>
                                    <li>
                                        <div className='item-box'>
                                            <img
                                         className='menu-icons'
                                         src='/Images/icon_tour_windows.png'
                                        />
                                        <p>Tour Windows</p>
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


                                    {
                                        programs && (
                                            <div className='programs-menu'>
                                                <div className='programs-menu-top'>
                                                    <ul>
                                                        <li>
                                                            <img 
                                                            className='programs-images'
                                                            src='Images/tiny_windows_catalog.png'/>
                                                            Windows Catalog
                                                        </li>
                                                        <li>
                                                            <img 
                                                            className='programs-images'
                                                            src='Images/tiny_windows_update.png'/>
                                                            Windows Update
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className='programs-divide-line-container'>
                                                    <div className='programs-divide-line'>
                                                        
                                                    </div>
                                                </div>
                                                <div className='programs-menu-bottom'>
                                                    <ul>
                                                        <li>
                                                            <img 
                                                            className='programs-images'
                                                            src='Images/tiny_accessories.png'/>
                                                            <p>Accessories</p>
                                                        </li>
                                                        <li>
                                                            <img 
                                                            className='programs-images'
                                                            src='Images/tiny_accessories.png'/>
                                                            Games
                                                        </li>
                                                        <li>
                                                            <img 
                                                            className='programs-images'
                                                            src='Images/tiny_accessories.png'/>
                                                            Startup
                                                        </li>
                                                        <li>
                                                            <img 
                                                            className='programs-images'
                                                            src=''/>
                                                            Jasc Software
                                                        </li>
                                                        <li>
                                                            <img 
                                                            className='programs-images'
                                                            src=''/>
                                                            Microsoft Office
                                                        </li>
                                                        <li>
                                                            <img 
                                                            className='programs-images'
                                                            src=''/>
                                                            Internet Explorer
                                                        </li>
                                                        <li>
                                                            <img 
                                                            className='programs-images'
                                                            src=''/>
                                                            MSN Explorer
                                                        </li>
                                                        <li>
                                                            <img 
                                                            className='programs-images'
                                                            src='Images/tiny_outlook_express.png'/>
                                                            Outlook Express
                                                        </li>
                                                        <li>
                                                            <img 
                                                            className='programs-images'
                                                            src='Images/tiny_remote_assistance.png'/>
                                                            Remote Assistance
                                                        </li>
                                                        <li>
                                                            <img
                                                            className='programs-images'
                                                            src='Images/tiny_windows_media_player.png'
                                                            />
                                                            Windows Media Player
                                                        </li>
                                                        <li>
                                                            <img
                                                            className=''
                                                            src=''
                                                            />
                                                            Windows Messenger
                                                        </li>
                                                        <li>
                                                            <img 
                                                            className='programs-images'
                                                            src=''/>
                                                            Windows Movie Maker
                                                        </li>    
                                                    </ul>
                                                </div>

                                            </div>
                                        )
                                    }

                                    {/*All Programs Button */}
                                    <button className='all-programs'
                                    onClick={() => setPrograms(!programs)}
                                    >
                                        <p>All Programs</p>
                                    <img 
                                    className='green-arrow'
                                    src='/Images/green_arrow_all_programs.png'
                                    />
                                    </button>


                                <div >
                                    
                                </div>
                            </div>
                            <div className='col-two'>
                            <ul>
                                <div className='col-two-top'>
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
                                    src='/Images/icon_recent_documents.png'
                                    />
                                    My Recent Documents 
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
                            
                                </div>
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
                                            src='/Images/turn_off_computer_button.png'
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
                <div className='tiny-icons-container'>
                    <img src='/Images/tiny_explorer.png'/>
                </div>
            </div>
            
        </div>
    )
}