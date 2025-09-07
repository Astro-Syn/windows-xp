import '../navbar/MyComputerNav.css';
import { useState } from 'react';

export default function MyComputerNav() {
  const [open, setOpen] = useState(false);
  const [currentView, setCurrentView] = useState<"root" | "nostalgia-docs">("root");

  return (
    <div>
      <div className='my-computer-nav-container'>
        {/* Top Nav */}
        <nav className='my-computer-first-nav'>
          <div className='first-nav-items'>
            <a><u>F</u>ile</a>
            <a><u>E</u>dit</a>
            <a><u>V</u>iew</a>
            <a><u>F</u>avorites</a>
            <a><u>T</u>ools</a>
            <a><u>H</u>elp</a>
          </div>
          <span>
            <img src='/Images/my_computer_windows_logo.png' />
          </span>
        </nav>

        {/* Second Nav */}
        <div className='my-computer-second-nav'>
          <button onClick={() => setCurrentView("root")}>
            <img src='Images/my_computer_back_btn.png'/>
            <p>Back</p>
          </button>
          <button>
            <img src='Images/my_computer_forward_btn.png'/>
          </button>
          <span><p>▼</p></span>
          <button><img src='/Images/my_computer_arrow_folder.png'/></button>
          <button>
            <img src='/Images/icon_search.png'/>
            <p>Search</p>
          </button>
          <button>
            <img src='/Images/my_computer_folders.png'/>
            <p>Folders</p>
          </button>
          <button><img src='/Images/my_computer_grid.png'/></button>
        </div>

        {/* Dropdown */}
        <div className='dropdown-container'>
          <p>A<u>d</u>dress</p>
          <div className='dropdown'>
            <button 
              onClick={() => setOpen(!open)}
              className='my-comp-dropdown'
            >
              <div>
                <img className='mini-computer' src='/Images/my_computer_2.png'/>
                {currentView === "root" ? "My Computer" : "Nostalgia Documents"}
              </div>
            </button>
            {open && (
              <ul className='drop-menu'>
                <li onClick={() => setCurrentView("root")}>My Computer</li>
                <li onClick={() => setCurrentView("nostalgia-docs")}>Nostalgia Documents</li>
              </ul>
            )}
          </div>
          <div className='go-btn-container'>
            <button className='go'>
              <img src='/Images/my_computer_green_go_arrow.png'/>
              <p>Go</p>
            </button>
          </div>
        </div>
      </div>

      {/* Page Content */}
      <div className='page-content'>
        {/* Left Sidebar */}
        <div className='left-category'>
          <div className='left-boxes'>
            <p>System Tasks 
                <img src='/Images/my_computer_arrow_double.png'/></p>
                <div className='sub-cat system-tasks'>
            <ul>
              <li><img src='/Images/my_computer_red_check.png'/> View system information</li>
              <li><img src='/Images/my_computer_add_or_remove.png'/> Add or remove programs</li>
              <li><img className='mini-control-panel' src='/Images/icon_control_panel.png'/> Change a setting</li>
            </ul>
          </div>
          </div>

          <div className='left-boxes'>
            <p>Other Places <img src='/Images/my_computer_arrow_double.png'/></p>
            <div className='sub-cat other-places'>
            <ul>
              <li><img src='/Images/my_computer_my_network.png'/> My Network Places</li>
              <li><img src='/Images/my_computer_my_documents.png'/> My Documents</li>
              <li><img src='/Images/my_computer_shared_documents.png'/> Shared Documents</li>
              <li><img className='mini-control-panel' src='/Images/icon_control_panel.png'/> Control Panel</li>
            </ul>
            </div>
          </div>

          <div className='left-boxes'>
            <p>Details <img src='/Images/my_computer_arrow_double.png'/></p>
            <div className='sub-cat details'>
            <ul>
              <li>My Computer</li>
              <li>System Folder</li>
            </ul>
            </div>
          </div>
        </div>

        {/* Right Content Area */}
        <div className='right-category'>
          {currentView === "root" && (
            <>
              <div className='files-stored'>
                <p>Files Stored on This Computer</p>
                <div className='deco-line'></div>
                <div className='files-stored-container'>
                  <a><img src='/Images/my_computer_folder.png'/> Shared Documents</a>
                  <button 
                    className='folder' 
                    onClick={() => setCurrentView("nostalgia-docs")}
                  >
                    <img src='/Images/my_computer_folder.png'/>
                    Nostalgia Documents
                  </button>
                </div>
              </div>

              <div className='hard-disk-drives'>
                <p>Hard Disk Drives</p>
                <div className='deco-line'></div>
                <a><img src='/Images/my_computer_hard_disk.png'/> WDC6400(C:)</a>
              </div>

              <div className='removable-storage'>
                <p>Devices with Removable Storage</p>
                <div className='deco-line'></div>
                <div className='removable-storage-container'>
                  <a><img src='/Images/my_computer_floppy.png'/> Floppy</a>
                  <a><img src='/Images/my_computer_disk_box.png'/> WXPVOL_EN(D:)</a>
                  <a><img src='/Images/my_computer_cd.png'/> CD Drive(E:)</a>
                </div>
              </div>
            </>
          )}

          {currentView === "nostalgia-docs" && (
            <div className='folder-content'>
              <h3>Nostalgia Documents</h3>
              <ul>
                <li>Wallpapers</li>
                <li>Display Pictures</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
