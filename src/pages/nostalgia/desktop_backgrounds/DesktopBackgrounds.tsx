import React from 'react';
import "../desktop_backgrounds/DesktopBackgrounds.css";

export default function DesktopBackgrounds() {

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


    return (
        <div className='desktop-backgrounds-container'>
            {sortedImages.map((img, index) => (
            <div className='full-container' key={index}>
                <div className='desktop-backgrounds-image-container'>
                    <img src={img.src} alt={img.name}/>
                </div>
                <p>{img.name}</p>
            </div>

            ))}

            
        </div>
    )
}