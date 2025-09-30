import React, { useState, useEffect, useRef} from 'react';
import { NostalgiaView } from '../../../my_computer/MyComputer';
import '../../old_web_photos/OldWebPhotos.css';

type PageProps = {
  goTo: (view: NostalgiaView) => void;
  goBack: () => void;
};

export default function Myspace({ goTo, goBack }: PageProps) {

  const [isVisible, setIsVisible] = useState(true);
        const [isMinimized, setIsMinimized] = useState(false);
        const [isMaximized, setIsMaximized] = useState(false);
        const [position, setPosition] = useState({ x: 200, y: 100 });
        const [isDragging, setIsDragging] = useState(false);
      
            const images = [
        { src: "Images/myspace_1.png", name: "1" },
        { src: "Images/myspace_2.png", name: "2" },
        { src: "Images/myspace_3.png", name: "3" },
      
      ];

      const sortedImages = images.sort((a, b) => a.name.localeCompare(b.name));
              
                  const [isViewerOpen, setIsViewerOpen] = useState(false);
                  const [currentIndex, setCurrentIndex] = useState(0);
              
                  const openViewer = (index: number) => {
                      setCurrentIndex(index);
                      setIsViewerOpen(true);
                  };
              
                  const closeViewer = () => setIsViewerOpen(false);
              
                  const showPrev = () => {
                      setCurrentIndex((prev) => (prev === 0 ? sortedImages.length - 1 : prev  - 1));
                  }
              
              
                      const picRef = useRef<HTMLDivElement>(null);
              
              
              
                  const showNext = () => {
                      setCurrentIndex((prev) => (prev === 0 ? sortedImages.length - 1 : prev - 1));
                  }
              
                   const offsetRef = useRef({ x: 0, y: 0});
              
              
                      const onMouseMove = (e: MouseEvent) => {
                      if (isDragging) {
                          setPosition({
                              x: e.clientX - offsetRef.current.x,
                              y: e.clientY - offsetRef.current.y, 
                          })
                      }
                  };
              
                   const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
                      if (isMaximized) return;
                      setIsDragging(true);
                      const rect = picRef.current?.getBoundingClientRect();
                      offsetRef.current = {
                          x: e.clientX - (rect?.left || 0),
                          y: e.clientY - (rect?.top || 0),
                      };
                  };
              
              
                      const onMouseUp = () => {
                      setIsDragging(false);
                  };
              
              
                      useEffect(() => {
                      document.addEventListener('mousemove', onMouseMove);
                      document. addEventListener('mouseup', onMouseUp);
                      return () => {
                          document.removeEventListener('mousemove', onMouseMove);
                          document.removeEventListener
                          ('mouseup', onMouseUp);
                      };
                  });
              
                  if (!isVisible) return null;
  return (
    <div className="desktop-backgrounds-container">
      {sortedImages.map((img, index) => (
        <div
          className="full-container"
          key={index}
          onDoubleClick={() => openViewer(index)}
        >
          <div className="desktop-backgrounds-image-container">
            <img src={img.src} alt={img.name} />
          </div>
          <p>{img.name}</p>
        </div>
      ))}

      {isViewerOpen && (
        <div className={`image-viewer habbo ${isMaximized ? "maximized" : ""}`}>
          {/* Title Bar */}
          <div className="standard-title-bar" onMouseDown={onMouseDown}>
            <div className="header-logo-container">
              <img
                className="msn-little-pic"
                src="/Images/my_computer_shared_documents.png"
                alt="Myspace"
              />
              <span className="desktop-bg-title">Myspace</span>
            </div>
            <div className="nav-buttons">
              <button
                className="standard-nav-btn-min"
                onClick={() => setIsMinimized(!isMinimized)}
              >
                -
              </button>
              <button
                className="standard-nav-btn-max"
                onClick={() => setIsMaximized(!isMaximized)}
              >
                🗖
              </button>
              <button
                className="standard-nav-btn-close"
                onClick={closeViewer}
              >
                ×
              </button>
            </div>
          </div>

          {/* Window Content */}
          {!isMinimized && (
            <div className="image-viewer-content neopets">
              <div className='habbo-pics-container'>
                <img
              className='habbo-pictures'
                src={sortedImages[currentIndex].src}
                alt={sortedImages[currentIndex].name}
              />
              </div>
              
              <p className='pic-title'>{sortedImages[currentIndex].name}</p>

              <div className="btn-container">
                <button className="prev-btn" onClick={showPrev}>
                  <img src="Images/pic_back.png" alt="Prev" />
                </button>
                <button className="next-btn" onClick={showNext}>
                  <img src="Images/pic_forward.png" alt="Next" />
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
    );
}

