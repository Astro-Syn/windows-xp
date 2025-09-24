import '../navbar/Navbar.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import InsertDisc from '../popups/disc/InsertDisc';
import Limewire from '../../pages/limewire/Limewire';
import MyComputer from '../../pages/my_computer/MyComputer';



export default function Navbar({ onOpenMyComputer }: {onOpenMyComputer: () => void}){
    const [selected, setSelected] = useState("");
    const [showInsertDisc, setShowInsertDisc] = useState(false);
    const [showLimewire, setShowLimewire] = useState(false);
    const [showMyComputer, setShowMyComputer] = useState(false);

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
                onClick = {() => {
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
                onClick={() => setSelected("my_documents")}
                >
                <img
                src='/Images/icon_my_documents.png'
                alt='My Documents'
                className='nav-icon'
                />
                <p className={`icon-name ${selected === "my_documents" ? "selected" : ""}`}>My Documents</p>
                </Link>

                {/*MSN */}
                <Link to='/msn'
                className='nav-item'
                onClick={() => setSelected(
                    "msn"
                )}
                >
                <img
                src='/Images/icon_msn.png'
                alt='Msn Messenger'
                className='nav-icon'
                />
                <p className={`icon-name ${selected=== "msn" ? "selected" : ""}`}>Msn Messenger</p>
                </Link>

                {/*Limewire */}
                <div 
                className='nav-item'
                onClick = {() => {
                    setSelected("limewire")
                    setShowLimewire(true);
                }}
                >
                <img
                src='/Images/icon_limewire.png'
                alt='Limewire'
                className='nav-icon'
                />
                <span className={`icon-name ${selected === 'limewire' ? "selected" : ""}`}>
                    <p>Limewire</p>
                </span>
                </div>
                {showLimewire && (
                    <Limewire  onClose={() => setShowLimewire(false)}/>
                )}

                {/*Sims 2 */}

                <div
                className='nav-item' 
                onDoubleClick = {() => {
                    setSelected("sims_2")
                    setShowInsertDisc(true);
                    
                }}
                >
                    <img src='Images/desktop_icon_sims_2.png'
                    className='nav-icon sims'
                    />
                    <span className={`icon-name ${selected === 'sims_2' ? "selected" : ""}`}>
                        <p>Sims 2</p>
                    </span>
                </div>

                {showInsertDisc && (
                    <InsertDisc onClose={() => setShowInsertDisc(false)} />
                )}
        </div>
        
    )
}