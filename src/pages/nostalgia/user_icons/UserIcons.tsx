import React from "react";
import '../user_icons/UserIcons.css';

export default function UserIcons() {

        const images = [
        { src: 'Images/login_airplane.png', name: 'Airplane'},
        { src: 'Images/login_astronaut.png', name: 'Astronaut'},
        { src: 'Images/login_beach_chairs.png', name: 'Beach Chairs'},
        { src: 'Images/login_bike.png', name: 'Bike'},
        { src: 'Images/login_butterfly.png', name: 'Butterfly'},
        { src: 'Images/login_car.png', name: 'Car'},
        { src: 'Images/login_cat.png', name: 'Cat'},
        { src: 'Images/login_chess.png', name: 'Chess'},
        { src: 'Images/login_dog.png', name: 'Dog'},
        { src: 'Images/login_drip.png', name: 'Drip'},
        { src: 'Images/login_duck.png', name: 'Duck'},
        { src: 'Images/login_fish.png', name: 'Fish'},
        { src: 'Images/login_flower_orange.png', name: 'Orange Flower'},
        { src: 'Images/login_flower_pink.png', name: 'Pink Flower'},
        { src: 'Images/login_frog.png', name: 'Frog'},
        { src: 'Images/login_guitar.png', name: 'Guitar'},
        { src: 'Images/login_horses.png', name: 'Horses'},
        { src: 'Images/login_karate.png', name: 'Karate'},
        { src: 'Images/login_palm_trees.png', name: 'Palm Trees'},
        { src: 'Images/login_rocket.png', name: 'Rocket'},
        { src: 'Images/login_skateboard.png', name: 'Skateboard'},
        { src: 'Images/login_snowflake.png', name: 'Snowflake'},
        { src: 'Images/login_soccer_ball.png', name: 'Soccer Ball'}
        
    ];

    const sortedImages = images.sort((a, b) => a.name.localeCompare(b.name));

    return (
        <div className='user-icons-container'>
            {sortedImages.map((img, index) => (
                <div className='full-container' key={index}>
                    <div className='user-icons-image-container'>
                        <img src={img.src} alt={img.name}/>
                    </div>
                    <p>{img.name}</p>
                </div>
            ))}
            
        </div>
    )
}