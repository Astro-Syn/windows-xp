import { BrowserRouter} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Background from './components/background/Background';
import Footer from './components/footer/Footer';
import '../src/App.css';
import Limewire from './pages/limewire/Limewire';
import MyComputer from './pages/my_computer/MyComputer';


function App() {
  

  return (
    <BrowserRouter>
      <Navbar 
      className='navbar-master'
      />
      <Background />
      <MyComputer />
      <Limewire />
      
      <Footer />
    </BrowserRouter>
  )
}

export default App
