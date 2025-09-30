import React, { useRef, useState, useEffect } from "react";
import "../user_icons/UserIcons.css";

export default function UserIcons() {
  const [isVisible, setIsVisible] = useState(true);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [position, setPosition] = useState({ x: 200, y: 100 });
  const [isDragging, setIsDragging] = useState(false);

  const images = [
    { src: "Images/login_airplane.png", name: "Airplane" },
    { src: "Images/login_astronaut.png", name: "Astronaut" },
    { src: "Images/login_beach_chairs.png", name: "Beach Chairs" },
    { src: "Images/login_bike.png", name: "Bike" },
    { src: "Images/login_butterfly.png", name: "Butterfly" },
    { src: "Images/login_car.png", name: "Car" },
    { src: "Images/login_cat.png", name: "Cat" },
    { src: "Images/login_chess.png", name: "Chess" },
    { src: "Images/login_dog.png", name: "Dog" },
    { src: "Images/login_drip.png", name: "Drip" },
    { src: "Images/login_duck.png", name: "Duck" },
    { src: "Images/login_fish.png", name: "Fish" },
    { src: "Images/login_flower_orange.png", name: "Orange Flower" },
    { src: "Images/login_flower_pink.png", name: "Pink Flower" },
    { src: "Images/login_frog.png", name: "Frog" },
    { src: "Images/login_guitar.png", name: "Guitar" },
    { src: "Images/login_horses.png", name: "Horses" },
    { src: "Images/login_karate.png", name: "Karate" },
    { src: "Images/login_palm_trees.png", name: "Palm Trees" },
    { src: "Images/login_rocket.png", name: "Rocket" },
    { src: "Images/login_skateboard.png", name: "Skateboard" },
    { src: "Images/login_snowflake.png", name: "Snowflake" },
    { src: "Images/login_soccer_ball.png", name: "Soccer Ball" },
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
              <span className="desktop-bg-title">User Icons</span>
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