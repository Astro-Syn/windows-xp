import '../navbar/Navbar.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar(){
    const [selected, setSelected] = useState("");

    return (
        <div className='navbar-container'>

            {/*My Computer */}
                <Link 
                to='/my_computer' className='nav-item'
                onClick={() => setSelected("my_computer")}
                >
                <img
                src='/Images/icon_my_computer.png'
                alt='My Computer'
                className='nav-icon'
                />
                <p className={`icon-name ${selected === "my_computer" ? "selected" : ""}`}>My Computer</p>
                </Link>

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
        </div>
        
    )
}