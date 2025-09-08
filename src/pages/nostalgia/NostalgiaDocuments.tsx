import React, { useState } from 'react';
import '../nostalgia/NostalgiaDocuments.css';
import DesktopBackgrounds from './desktop_backgrounds/DesktopBackgrounds';

export default function NostalgiaDocuments() {

    const [currentView, setCurrentView] = useState<"root" | "desktop-backgrounds"> ("root");

  return (
    <div>
      {currentView === "root" && (
          <div className='folders-container'>
        <div className='desktop-folder'>
            <img src='Images/folder_large.png' alt="Folder"/>
            <div className='folder-images-thumbnail'>
              <img src='Images/moon_flower.jpg' alt="Moon Flower"/>
              <img src='Images/ascent.jpg' alt="Ascent"/>
              <img src='Images/bliss.jpg' alt="Bliss"/>
              <img src='Images/crystal.jpg' alt="Crystal"/>
            </div>
            <button className='desktop-backgrounds-link'
            onClick={() => setCurrentView("desktop-backgrounds")}
            >
              Desktop Backgrounds
            </button>
          </div>

        <div className='desktop-folder'>
          <img src='Images/folder_large.png' alt="Folder"/>
          <div className='folder-images-thumbnail'>
            <img src='Images/login_car.png'/>
            <img src='Images/login_chess.png'/>
            <img src='Images/login_fish.png'/>
            <img src='Images/login_snowflake.png'/>
          </div>
          <button>User Icons</button>
        </div>
      </div>
      )}

      {currentView === "desktop-backgrounds" && (
        <div className='desktop-backgrounds-container'>
            <DesktopBackgrounds />
        </div>
      )}
      

    </div>
  )
}
