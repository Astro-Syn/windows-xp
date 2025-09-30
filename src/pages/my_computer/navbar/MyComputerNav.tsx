import '../navbar/MyComputerNav.css';
import { useState, useRef, useEffect } from 'react';
import NostalgiaDocuments from '../../nostalgia/NostalgiaDocuments';
import DesktopBackgrounds from '../../nostalgia/desktop_backgrounds/DesktopBackgrounds';
import UserIcons from '../../nostalgia/user_icons/UserIcons';
import OldWeb from '../../nostalgia/old_web_photos/OldWeb';
import Neopets from '../../nostalgia/old_web_photos/neopets/Neopets';
import HabboHotel from '../../nostalgia/old_web_photos/habbo_hotel/HabboHotel';
import Myspace from '../../nostalgia/old_web_photos/myspace/Myspace';



type View = "root" | "nostalgia-docs" | "desktop-backgrounds" | "user-icons" | "old-web" | "neopets" | "myspace" | "habbo-hotel";

export default function MyComputerNav() {
  const [open, setOpen] = useState(false);
  const [history, setHistory] = useState<View[]>(["root"]);

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const navTo = (view: string) => {
    console.log("Navigating to:", view);
    setOpen(false);
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if(dropdownRef.current && !dropdownRef.current.contains(event.target as Node)){
         setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [])
 
  const currentView = history[history.length - 1];

  function goTo(view: View) {
    setHistory(prev => [...prev, view]);
  }

  function goBack() {
    setHistory(prev => (prev.length > 1 ? prev.slice(0, -1) : prev));
  }

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
          <button className='my-computer-nav-btn' onClick={goBack}>
            <img src={
              history.length > 1 ? 'Images/my_computer_back_btn_green.png' : 'Images/my_computer_back_btn.png'
            }
            alt="Back"
            />
            
            <p>Back</p><p className='little-arrow'>▼</p>
          </button>
          <button className='my-computer-nav-btn'>
            <img src='Images/my_computer_forward_btn.png'/>
            <p className='little-arrow'>▼</p>
          </button>
          <span><p></p></span>
          <button className='arrow-folder'><img src='/Images/my_computer_arrow_folder.png'/></button>
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
          <div className='dropdown' ref={dropdownRef}>
            
            <button 
              onClick={() => setOpen(!open)}
              className='my-comp-dropdown'
            >
            
              <div className='dropdown-pages-list'>
                <img className='mini-computer' src='/Images/my_computer_2.png'/>
                {{
                  "root": "My Computer",
                  "nostalgia-docs": "Nostalgia Documents",
                  "desktop-backgrounds": "Desktop Backgrounds",
                  "user-icons": "User Icons",
                  "old-web" : "Old Web Archive",
                  "neopets" : "Neopets",
                  "myspace" : "Myspace",
                  "habbo-hotel" : "Habbo Hotel"
                }[currentView]}
              </div>
              <span className='down-btn-container'>
                  <img
            src='Images/scrollbar-down-arrow.png'
            />
              </span>
                
            </button>
            {open && (
              <ul className='drop-menu'>
                <li onClick={() => goTo("root")}>My Computer</li>
                <li onClick={() => goTo("nostalgia-docs")}>Nostalgia Documents</li>
                <li onClick={() => goTo("desktop-backgrounds")}>Desktop Backgrounds</li>
                <li onClick={() => goTo("user-icons")}>User Icons</li>
                <li onClick={() => goTo("old-web")}>Old Web Archive</li>
                <li onClick={() => goTo("myspace")}>Myspace</li>
                <li onClick={() => goTo("neopets")}>Neopets</li>
                <li onClick={() => goTo("habbo-hotel")}>Habbo Hotel</li>
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
                    className='nostalgia-folder' 
                    onDoubleClick={() => goTo("nostalgia-docs")}
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
            <NostalgiaDocuments goTo={goTo} goBack={goBack} />
          )}

          {currentView === "desktop-backgrounds" && <DesktopBackgrounds />}
          {currentView === "user-icons" && <UserIcons />}
          {currentView === "old-web" && <OldWeb  goTo={goTo} 
    goBack={goBack} />}
          {currentView === "neopets" && <Neopets  goTo={goTo} 
    goBack={goBack} />}
          {currentView === "myspace" && <Myspace  goTo={goTo} 
    goBack={goBack} />}
          {currentView === "habbo-hotel" && <HabboHotel goTo={goTo} 
    goBack={goBack} />}
        </div>
      </div>
    </div>
  );
}
