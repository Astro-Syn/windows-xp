import React, { useState } from 'react';
import '../calculator body/CalculatorBody.css';

export default function CalculatorBody() {
    const [input, setInput] = useState("");
    const [memory, setMemory] = useState<number | null>(null);

        const handleClick = (value: string) => {
            setInput((prev) => prev + value);
        };

        const handleClear = () => {
            setInput("");
        };

        const handleEquals = () => {
            try {
           
            const result = Function(`return ${input}`)();
            setInput(result.toString());
            } catch {
            setInput("Error");
            }
        };

      
        const handleMC = () => setMemory(null);
        const handleMR = () => {
            if (memory !== null) setInput((prev) => prev + memory.toString());
        };
        const handleMS = () => {
            try {
            const result = Number(Function(`return ${input}`)());
            setMemory(result);
            } catch {
            setMemory(null);
            }
        };
        const handleMPlus = () => {
            try {
            const result = Number(Function(`return ${input}`)());
            setMemory((prev) => (prev !== null ? prev + result : result));
            } catch {
            // ignore
            }
        };
        
    
  return (
    <div className="calculator-body-container">
      <div className="calc-display">{input || "0"}</div>
      
        {/*Row 1 */}
        <div className='top-row'>
            <span></span>
            <button className="top-row-btn">Backspace</button>
            <button className='top-row-btn'>CE</button>
            <button className='top-row-btn'>C</button>

        </div>

    <div className="calc-buttons">
        {/* Row 2 */}
        <button className="mem-btn" onClick={handleMC}>MC</button>
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button className='arith-btn' onClick={() => handleClick("/")}>/</button>
        <button>sqrt</button>

        {/* Row 3 */}
        <button className="mem-btn" onClick={handleMR}>MR</button>
        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button className='arith-btn' onClick={() => handleClick("*")}>*</button>
        <button onClick={() => handleClick("%")}>%</button>

        {/* Row 4 */}
        <button className="mem-btn" onClick={handleMS}>MS</button>
        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button className='arith-btn' onClick={() => handleClick("-")}>-</button>
        <button>1/x</button>

        {/* Row 5 */}
        <button className="mem-btn" onClick={handleMPlus}>M+</button>
        <button onClick={() => handleClick("0")}>0</button>
        <button>+/-</button>
        <button onClick={() => handleClick(".")}>.</button>
        <button className='arith-btn' onClick={() => handleClick("+")}>+</button>
        <button className="equals" onClick={handleEquals}>=</button>
      </div>


    </div>
  )
}

