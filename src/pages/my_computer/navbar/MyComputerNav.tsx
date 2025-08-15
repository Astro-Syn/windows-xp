import '../navbar/MyComputerNav.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function MyComputerNav(){
    const [open, setOpen] = useState(false);
    return (
        <div>
            <div className='my-computer-nav-container'>
                <nav className='my-computer-first-nav'>
                <a><u>F</u>ile</a>
                <a><u>E</u>dit</a>
                <a><u>V</u>iew</a>
                <a><u>F</u>avorites</a>
                <a><u>T</u>ools</a>
                <a><u>H</u>elp</a>
                <span>Windows pic at the end</span>
            </nav>
            
            <div className='my-computer-second-nav'>
                <button>Back</button>
                <button>Forward</button>
                <span>Buttom Arrow</span>
                <button>Arrow Folder</button>
                <button>Search</button>
                <button>Folders</button>
                <button>Grid pic</button>
                
            </div>
            <div className='dropdown-container'>
                
                    <p>A<u>d</u>dress</p>
                    <div className='dropdown'>
                        <button>
                            <a>My Computer</a>
                            <a>My Documents</a>
                        </button>
                        <button>Go</button>
                </div>
            </div>
            </div>
             {/*Bottom Part of Page */}
            <div className='page-content'>
                
                <div className='left-category'>
                    <div className='sub-cat system-tasks'>
                        <p>System Tasks</p>
                        <ul>
                            <li>View system information</li>
                            <li>Add or remove programs</li>
                            <li>Change a setting</li>
                        </ul>
                    </div>
                    <div className='sub-cat other-places'>
                        <p>Other Places</p>
                        <ul>
                            <li>My Network Places</li>
                            <li>My Documents</li>
                            <li>Shared Documents</li>
                            <li>Control Panel</li>
                        </ul>
                    </div>
                    <div className='sub-cat details'>
                        <p>Details</p>
                        <h3>My Computer</h3>
                        <p>System Folder</p>
                    </div>
                </div>
                <div className='right-category'>
                    <div className='files-stored'>
                        <div className='right-category-line'></div>
                        <a>Shared Documents</a>
                        <a>Admin Documents</a>
                    </div>
                    <div className='hard-disk-drives'>
                        <div className='right-category-line'></div>
                        <a>WDC6400(C:)</a>
                    </div>
                    <div className='removable-storage'>
                        <div className='right-category-line'></div>
                        <a>Floppy</a>
                        <a>WXPVOL_EN(D:)</a>
                        <a>CD Drive(E:)</a>
                    </div>
                </div>
            </div>
            
        </div>
    )
}