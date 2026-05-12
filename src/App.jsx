import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Background from './components/background/Background';
import Footer from './components/footer/Footer';
import '../src/App.css';
import Limewire from './pages/limewire/Limewire';
import MyComputer from './pages/my_computer/MyComputer';
import Msn from './pages/msn/Msn';
import MsnCornerConvo from './pages/msn/msn_corner_convo/MsnCornerConvo';
import MsnChatWindow from './pages/msn/msn_chat_window/MsnChatWindow';
import MsnCornerConvo2 from './pages/msn/msn_corner_convo/novie_message_popup/MsnCornerConvo2';

function App() {
  const [showMyComputer, setShowMyComputer] = useState(true);
  const [showMSNMessenger, setShowMSNMessenger] = useState(true);

  
  const [showConvo1, setShowConvo1] = useState(false);
  const [showConvo2, setShowConvo2] = useState(false);

  const [chatOpened, setChatOpened] = useState(false);

  const startUpSound = () => {
    const sound = new Audio('/sounds/Microsoft Windows XP Startup Sound.mp3');
    sound.play().catch((err) => {
      console.warn("Autoplay blocked, waiting for user interaction:", err)
    });
  };



  useEffect(() => {
    startUpSound();

    const handleClick = () => {
      startUpSound();
      window.removeEventListener('click', handleClick);
    };
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('click', handleClick);
    }
  }, []);

  
  useEffect(() => {
    
    const timer1 = setTimeout(() => {
      setShowConvo1(true);
    }, 2000);

    
    const timer2 = setTimeout(() => {
      setShowConvo2(true);
    }, 4000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  

  return (
    <div className='application'>
      <BrowserRouter>

        <Navbar
          onOpenMyComputer={() => setShowMyComputer(true)}
          onOpenMSNMessenger={() => setShowMSNMessenger(true)}
        />

        {showMyComputer && (
          <MyComputer onClose={() => setShowMyComputer(false)} />
        )}

        {showMSNMessenger && (
          <Msn onClose={() => setShowMSNMessenger(false)} />
        )}

        <Background />

        
        
        {showConvo2 && <MsnCornerConvo2 />}

        <Footer 
         className={`footer-page ${chatOpened ? "" : "flash"}`}
        windows={[]} onTabClick={() => {}} />


        {showConvo1 && (
  <MsnCornerConvo onOpenChat={() => setChatOpened(true)} />
)}
      </BrowserRouter>
    </div>
  );
}

export default App;
