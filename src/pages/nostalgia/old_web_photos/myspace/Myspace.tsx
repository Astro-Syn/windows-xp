import React from 'react'
import { NostalgiaView } from '../../../my_computer/MyComputer';

type PageProps = {
  goTo: (view: NostalgiaView) => void;
  goBack: () => void;
};

export default function Myspace({ goTo, goBack }: PageProps) {
  return (
    <div>
      Myspace
      <button onClick={goBack}>⬅ Back to Old Web</button>
      <button onClick={() => goTo("myspace")}>Go to Myspace</button>
      </div>
  )
}
