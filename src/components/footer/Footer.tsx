import '../footer/Footer.css';
import { useState, useRef, useEffect } from 'react';
import Time from '../time/Time';
import { IoIosArrowBack } from "react-icons/io";
import { RiArrowDropRightFill } from "react-icons/ri";
import StartMenu from './start menu/StartMenu';
import CalculatorWindow from '../footer pages/calculator/CalculatorWindow';


export default function Footer() {
    const [menu, setMenu] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const [openWindows, setOpenWindows] = useState<string[]>([]);

    const toggleWindow = (id: string) => {
        if (openWindows.includes(id)) {
            setOpenWindows(openWindows.filter(win => win !== id));
        } else {
            setOpenWindows([...openWindows, id]);
        }
    }

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(event.target as Node))
                setMenu(false);
        }
        if (menu) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        };

    }, [menu]);

    const apps = [
        {id: "Calculator", label: "Calculator", text: "calculator", img: "Images/tiny_calculator.png"}
    ];

  

    return (
        <>
        <div className="desktop">
 
  {openWindows.includes("Calculator") && (
    <CalculatorWindow onClose={() => toggleWindow("Calculator")} />
  )}
</div>
           
        <div className='footer-container'>
            <div className='footer-gradient'></div>
            <div className='footer'>
                <div className='time-container'>
                    <div className='tiny-img-container'>
                        <img src='/Images/tiny_msn.png' />
                        <img src='/Images/tiny_volume.png' />
                    </div>
                    <Time />
                    <button className='footer-right-btn'>
                        <IoIosArrowBack />
                    </button>
                </div>

                

                <button
                    className='start-btn'
                    onClick={() => setMenu(!menu)}
                >
                    <img
                        className='win-logo'
                        src='Images/windows_logo.png'
                    />
                    start
                </button>

                {menu && (
                    <div ref={menuRef}>
                        <StartMenu />
                    </div>
                )}

                <div className='tiny-icons-container'>
                    <img src='/Images/tiny_explorer.png' />
                    <img src='/Images/tiny_outlook_express.png'/>
                </div>

                <div className='footer-pages-container'>
                        
                            {apps.map(app => (
                            <div
                            key={app.id}
                            className={`footer-page ${openWindows.includes(app.id) ? "active" : ""}`}
                            onClick={() => toggleWindow(app.id)}
                            >
                            <img src={app.img} />
                            {app.label}
                            </div>
                        ))}
                                      
                            
                        
                </div>
            </div>
        </div>
    </>
    );
}
