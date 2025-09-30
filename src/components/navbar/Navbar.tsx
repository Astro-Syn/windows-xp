import '../navbar/Navbar.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import InsertDisc from '../popups/disc/InsertDisc';
import Limewire from '../../pages/limewire/Limewire';
import MyComputer from '../../pages/my_computer/MyComputer';
import Msn from '../../pages/msn/Msn';



export default function Navbar({ onOpenMyComputer, onOpenMSNMessenger }: {onOpenMyComputer: () => void; onOpenMSNMessenger: () => void;}){
    const [selected, setSelected] = useState("");
    const [showInsertDisc, setShowInsertDisc] = useState(false);
    const [showLimewire, setShowLimewire] = useState(false);
    const [showMyComputer, setShowMyComputer] = useState(false);
   


    const playErrorSound = () => {
        const audio = new Audio('/sounds/Windows XP Error Sound.mp3');
        audio.play().catch((err) => {
            console.warn('Sound playback prevented:', err);
        })
    }


    return (
        <div className='navbar-container'>

            {/*Recycle Bin */}
            <Link
            to={'/recycle_bin'}
            className='nav-item'
            onClick={() => setSelected ('recycle_bin')}
            >
            
            <img
            src='/Images/recycle_bin_icon.png'
            className='nav-icon recycle'
            alt='recycle bin'
            />
            <p className={`icon-name ${selected === "recycle_bin" ? "selected" : ""}`}>Recycle Bin</p>
            </Link>



            {/*My Computer */}
                <div 
                className='nav-item'
                onDoubleClick = {() => {
                    setSelected("my_computer");
                    setShowMyComputer(true);
                }}
                >
                <img
                src='/Images/icon_my_computer.png'
                alt='My Computer'
                className='nav-icon'
                />
                <p className={`icon-name ${selected === "my_computer" ? "selected" : ""}`}>My Computer</p>
                </div>
                {showMyComputer && (
                    <MyComputer onClose={() => setShowMyComputer(false)}/>
                )}

                {/*My Documents */}
                <Link to='/my_documents'
                className='nav-item'
                onDoubleClick={() => setSelected("my_documents")}
                >
                <img
                src='/Images/icon_my_documents.png'
                alt='My Documents'
                className='nav-icon'
                />
                <p className={`icon-name ${selected === "my_documents" ? "selected" : ""}`}>My Documents</p>
                </Link>

                {/*MSN */}
                <div
                className='nav-item'
                onDoubleClick={() => {
                    setSelected("msn");
                    onOpenMSNMessenger();
                }}
                >
                <img
                src='/Images/icon_msn.png'
                alt='Msn Messenger'
                className='nav-icon'
                />
                <p className={`icon-name ${selected=== "msn" ? "selected" : ""}`}>Msn Messenger</p>

                </div>
                

                {/*Limewire */}
                <div 
                className='nav-item'
                onDoubleClick = {() => {
                    setSelected("limewire")
                    setShowLimewire(true);
                }}
                >
                <img
                src='/Images/icon_limewire.png'
                alt='Limewire'
                className='nav-icon'
                />
                <p className={`icon-name ${selected === 'limewire' ? "selected" : ""}`}>
                    Limewire</p>
                
                </div>
                {showLimewire && (
                    <Limewire  onClose={() => setShowLimewire(false)}/>
                )}

                {/*Sims 2 */}

                <div
                className='nav-item' 
                onDoubleClick = {() => {
                    playErrorSound();
                    setSelected("sims_2")
                    setShowInsertDisc(true);
                    
                }}
                >
                    <img src='Images/desktop_icon_sims_2.png'
                    className='nav-icon sims'
                    />
                    <p className={`icon-name ${selected === 'sims_2' ? "selected" : ""}`}>
                        Sims 2</p>
                    
                </div>

                {showInsertDisc && (
                    <InsertDisc onClose={() => setShowInsertDisc(false)} />
                )}

                {/*Github */}
                <div
                className='nav-item'
                onDoubleClick = {() => {
                    setSelected("github");
                    window.open("https://github.com/Astro-Syn", "_blank", "noopener, noreferrer")
                }}
                >
                    
                        <img 
                className='nav-icon github'
                src='Images/github_icon.png'/>
                <p className={`icon-name ${selected === 'github' ? "selected" : ""}`}>Github</p>
                    
                    

                </div>
                
        </div>
        
    )
}