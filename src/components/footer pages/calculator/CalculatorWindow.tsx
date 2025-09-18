import React from 'react';
import "../calculator/CalculatorWindow.css";
import CalculatorBody from './calculator body/CalculatorBody';

type Props = {
    onClose: () => void;
};

export default function CalculatorWindow({ onClose }: Props) {
  return (
    <div className='calculator-window'>
        <div className='standard-title-bar'><div className='calc-title'><img className='little-calculator' src='Images/tiny_calculator.png'/><p>Calculator</p></div></div>
        <div className='calculator-nav'>
            <ul>
                <li><p><u>E</u>dit</p></li>
                <li><p><u>V</u>iew</p></li>
                <li><p><u>H</u>elp</p></li>
            </ul>
        </div>
        
        <div className='calculator-body'>
            <div>
                <CalculatorBody />
            </div>
        </div>
    </div>
  )
}
