import '../old_web_photos/OldWeb.css';
import Myspace from './myspace/Myspace';
import HabboHotel from './habbo_hotel/HabboHotel';
import Neopets from './neopets/Neopets';
import NostalgiaDocuments from '../NostalgiaDocuments';
import { NostalgiaView } from '../../my_computer/MyComputer';



type OldWebProps = {
  goTo: (view: NostalgiaView) => void;
  goBack: () => void;
};


export default function OldWeb({ goTo, goBack }: OldWebProps) {

  return (
    <div className='folders-container'>
        {/*Myspace */}
        <div className='myspace-folder'>
          <img src='Images/icon_my_pictures.png'/>
        <button onClick={() => goTo("myspace")}>
          MySpace
        </button>
        </div>
        {/*Neopets */}
      <div className='neopets-folder'>
        <img src='Images/icon_my_pictures.png'/>
        <button onClick={() => goTo("neopets")}>
          Neopets
        </button>
      </div>
      {/*Habbo Hotel */}
      <div className='habbo-folder'>
        <img src='Images/icon_my_pictures.png' alt='Habbo Hotel'/>
          <button onClick={() => goTo("habbo-hotel")}>Habbo Hotel</button>
      </div>
     
    </div>
  )
}
