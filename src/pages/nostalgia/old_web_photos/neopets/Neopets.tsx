import React from 'react';
import { NostalgiaView } from '../../../my_computer/MyComputer';

type PageProps = {
  goTo: (view: NostalgiaView) => void;
  goBack: () => void;
};


export default function Neopets({ goTo, goBack }: PageProps) {
  return (
    <div>
      <button onClick={goBack}>⬅ Back</button>
      Neopets
    </div>
  )
}
