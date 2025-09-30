import "../desktop_backgrounds/DesktopBackgrounds.css";
import { useRef, useState, useEffect } from 'react';

export default function DesktopBackgrounds() {
    const [isVisible, setIsVisible] = useState(true);
    const [isMinimized, setIsMinimized] = useState(false);
    const [isMaximized, setIsMaximized] = useState(false);
    const [position, setPosition] = useState({x: 2000, y: 100});
    const [isDragging, setIsDragging] = useState(false);

    const images = [
        { src: 'Images/bliss.jpg', name: 'Bliss.jpg'},
        { src: 'Images/tulips.jpg', name: 'Tulips.jpg'},
        { src: 'Images/wind.jpg', name: 'Wind.jpg'},
        { src: 'Images/peace.jpg', name: 'Peace.jpg'},
        { src: 'Images/power.jpg', name: 'Power.jpg'},
        { src: 'Images/stonehenge.jpg', name: 'Stonehenge.jpg'},
        { src: 'Images/red_moon_desert.jpg', name: 'Red Moon Desert.jpg'},
        { src: 'Images/ripples.jpg', name: 'Ripples.jpg'},
        { src: 'Images/radiance.jpg', name: 'Radiance.jpg'},
        { src: 'Images/purple_flower.jpg', name: 'Purple_Flower.jpg'},
        { src: 'Images/moon_flower.jpg', name: 'Moonflower.jpg'},
        { src: 'Images/azul.jpg', name: 'Azul.jpg'},
        { src: 'Images/crystal.jpg', name: 'Crystal.jpg'},
        { src: 'Images/ascent.jpg', name: 'Ascent.jpg'},
        { src: 'Images/autum.jpg', name: 'Autum.jpg'},
        { src: 'Images/friend.jpg', name: 'Friend.jpg'},
        { src: 'Images/follow.jpg', name: 'Follow.jpg'},
        { src: 'Images/home.jpg', name: 'Home.jpg'},
        { src: 'Images/vortec_space.jpg', name: 'Vortex.jpg'}
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
        <div className={`image-viewer ${isMaximized ? "maximized" : ""}`}>
          {/* Title Bar */}
          <div className="standard-title-bar" onMouseDown={onMouseDown}>
            <div className="header-logo-container">
              <img
                className="msn-little-pic"
                src="/Images/my_computer_shared_documents.png"
                alt="MSN"
              />
              <span className="desktop-bg-title">Desktop Backgrounds</span>
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
            <div className="image-viewer-content">
              <img
                src={sortedImages[currentIndex].src}
                alt={sortedImages[currentIndex].name}
              />
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