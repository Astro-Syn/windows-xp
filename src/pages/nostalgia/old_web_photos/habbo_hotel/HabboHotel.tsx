import React from 'react';
import { NostalgiaView } from '../../../my_computer/MyComputer';

type PageProps = {
  goTo: (view: NostalgiaView) => void;
  goBack: () => void;
};


export default function HabboHotel({ goTo, goBack }: PageProps) {
  return (
    
    <div>
      <button onClick={goBack}>⬅ Back to Old Web</button>
      <button onClick={() => goTo("myspace")}>Go to Myspace</button>
      HabboHotel
      </div>
  )
}
