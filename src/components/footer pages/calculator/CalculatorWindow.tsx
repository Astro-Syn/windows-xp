import React from 'react';
import "../calculator/CalculatorWindow.css";

type Props = {
    onClose: () => void;
};

export default function CalculatorWindow({ onClose }: Props) {
  return (
    <div className='calculator-window'>
        Blue bar goes here
        <div className='calculator-nav'>
            <ul>
                <li><p><u>E</u>dit</p></li>
                <li><p><u>V</u>iew</p></li>
                <li><p><u>H</u>elp</p></li>
            </ul>
        </div>
        
        <div className='calculator-body'>
            <div>
                TextBox
            </div>
        </div>
    </div>
  )
}
