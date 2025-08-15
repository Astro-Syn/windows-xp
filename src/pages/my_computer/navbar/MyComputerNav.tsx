import '../navbar/MyComputerNav.css';
import { useState } from 'react';


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
                
                    {/*Left Side */}
                <div className='left-category'>

                        {/*Sysyem Tasks*/}
                    <div className='left-boxes'>
                        <p>System Tasks</p>
                    <div className='sub-cat system-tasks'>
                        
                        <ul>
                            <li>View system information</li>
                            <li>Add or remove programs</li>
                            <li>Change a setting</li>
                        </ul>
                    </div>

                    </div>
                    

                    <div className='left-boxes'>
                        <p>Other Places</p>
                    <div className='sub-cat other-places'>
                        
                        <ul>
                            <li>My Network Places</li>
                            <li>My Documents</li>
                            <li>Shared Documents</li>
                            <li>Control Panel</li>
                        </ul>
                    </div>

                    </div>
                    
                    <div className='left-boxes'>
                        <p>Details</p>

                    <div className='sub-cat details'>
                        
                        <ul>
                            <li>My Computer</li>
                            <li>System Folder</li>
                        </ul>
                    </div>
                        
                    </div>
                    
                </div>

                {/*Right Category */}
                <div className='right-category'>
                    <div className='files-stored'>

                            {/*Files Stored on This Computer */}
                        <p>Files Stored on This Computer</p>
                         <div className='deco-line'></div>
                        <a>Shared Documents</a>
                        <a>Admin Documents</a>
                    </div>

                        {/*Hard Disk Drives */}
                    <div className='hard-disk-drives'>
                        <p>Hard Disk Drives</p>
                         <div className='deco-line'></div>
        
                        <a>WDC6400(C:)</a>
                    </div>

                        {/*Devices with Removable Storage */}
                    <div className='removable-storage'>
                        
                        <p>Devices with Removable Storage</p>
                        <div className='deco-line'></div>
                        <a>Floppy</a>
                        <a>WXPVOL_EN(D:)</a>
                        <a>CD Drive(E:)</a>
                    </div>
                </div>
            </div>
            
        </div>
    )
}