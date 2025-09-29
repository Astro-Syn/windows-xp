import React from 'react';
import '../nostalgia/NostalgiaDocuments.css';

type NostalgiaDocumentsProps = {
  goTo: (view: "desktop-backgrounds" | "user-icons" | "old-web") => void;
  goBack: () => void;
};

export default function NostalgiaDocuments({ goTo, goBack }: NostalgiaDocumentsProps) {
  return (
    <div className='folders-container'>
      {/* Desktop Backgrounds Folder */}
      <div className='desktop-folder'>
        <img src='Images/folder_large.png' alt="Folder"/>
        <div className='folder-images-thumbnail'>
          <img src='Images/moon_flower.jpg' alt="Moon Flower"/>
          <img src='Images/ascent.jpg' alt="Ascent"/>
          <img src='Images/bliss.jpg' alt="Bliss"/>
          <img src='Images/crystal.jpg' alt="Crystal"/>
        </div>
        <button 
          className='desktop-backgrounds-link'
          onDoubleClick={() => goTo("desktop-backgrounds")}
        >
          Desktop Backgrounds
        </button>
      </div>

      {/* User Icons Folder */}
      <div className='desktop-folder'>
        <img src='Images/folder_large.png' alt="Folder"/>
        <div className='folder-images-thumbnail'>
          <img src='Images/login_car.png' alt="Car"/>
          <img src='Images/login_chess.png' alt="Chess"/>
          <img src='Images/login_fish.png' alt="Fish"/>
          <img src='Images/login_snowflake.png' alt="Snowflake"/>
        </div>
        <button 
          className='user-icons-link' 
          onDoubleClick={() => goTo("user-icons")}
        >
          User Icons
        </button>
      </div>
      {/*Old Web Folder*/}
        <div className='desktop-folder old-web'>
            <img src='/Images/icon_my_pictures.png'/>
            <button
            onDoubleClick={() => goTo("old-web")}
            >Old Web Archive</button>
        </div>
    </div>
  );
}
