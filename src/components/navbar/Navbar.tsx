import '../navbar/Navbar.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar({ onOpenMyComputer }: {onOpenMyComputer: () => void}){
    const [selected, setSelected] = useState("");

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
                    onOpenMyComputer();
                }}
                >
                <img
                src='/Images/icon_my_computer.png'
                alt='My Computer'
                className='nav-icon'
                />
                <p className={`icon-name ${selected === "my_computer" ? "selected" : ""}`}>My Computer</p>
                </div>

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
                <Link to='/limewire'
                className='nav-item'
                onClick = {() => setSelected(
                    "limewire"
                )}
                >
                <img
                src='/Images/icon_limewire.png'
                alt='Limewire'
                className='nav-icon'
                />
                <span className={`icon-name ${selected === 'limewire' ? "selected" : ""}`}>
                    <p>Limewire</p>
                </span>
                </Link>

                <Link 
                to='sims_2'
                className='nav-item' 
                onClick = {() => setSelected(
                    "sims_2"
                )}
                >
                    <img src='Images/desktop_icon_sims_2.png'
                    className='nav-icon'
                    />
                    <span className={`icon-name ${selected === 'sims_2' ? "selected" : ""}`}>
                        <p>Sims 2</p>
                    </span>
                </Link>
        </div>
        
    )
}