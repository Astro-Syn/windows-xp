import { BrowserRouter} from 'react-router-dom';
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
  

  return (
    <BrowserRouter>
      <Navbar 
      className='navbar-master'
      />
      <Background />
      <MyComputer />
      <Msn />
      <MsnCornerConvo/>
      <MsnCornerConvo2/>
      <Footer windows={[]} onTabClick={() => {}}/>
    </BrowserRouter>
  )
}

export default App
