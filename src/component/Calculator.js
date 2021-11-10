/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import calculate from '../logic/calculate';
import '../logic/operate';
import Buttons from './buttonEvents';

const Calculator = () => {
  const [calcObj, setState] = useState({ total: 0, next: null, operation: null });

  const handleClick = (calcObj, text) => {
    setState(calculate(calcObj, text));
  };

  let calculations = '0';
  if (
    Object.keys(calcObj).length === 0
    || (calcObj.total === null
      && calcObj.next === null
      && calcObj.operation === null)
  ) {
    calculations = '0';
  } else {
    calculations = calcObj.next != null ? calcObj.next
      : calcObj.total != null ? calcObj.total
        : calcObj.operation;
  }
  return (
    <div className="calc-page">
      <div className="calc-header">
        <h1>Lets do some math</h1>
      </div>
      <div className="calc-container">
        <div className="calc-firstDisplay">{calculations}</div>
        <div className="calc-Btns">
          <div className="calc-greyBtns">
            <div className="calc-greyBtn1">
              <Buttons text="AC" Obj={calcObj} onClick={handleClick} />
              <Buttons text="+/-" Obj={calcObj} onClick={handleClick} />
              <Buttons text="%" Obj={calcObj} onClick={handleClick} />
              <Buttons text="7" Obj={calcObj} onClick={handleClick} />
              <Buttons text="8" Obj={calcObj} onClick={handleClick} />
              <Buttons text="9" Obj={calcObj} onClick={handleClick} />
              <Buttons text="4" Obj={calcObj} onClick={handleClick} />
              <Buttons text="5" Obj={calcObj} onClick={handleClick} />
              <Buttons text="6" Obj={calcObj} onClick={handleClick} />
              <Buttons text="1" Obj={calcObj} onClick={handleClick} />
              <Buttons text="2" Obj={calcObj} onClick={handleClick} />
              <Buttons text="3" Obj={calcObj} onClick={handleClick} />
            </div>
            <div className="calc-greyBtn2">
              <Buttons text="0" Obj={calcObj} onClick={handleClick} />
              <Buttons text="." Obj={calcObj} onClick={handleClick} />
            </div>
          </div>

          <div className="orange-btn">
            <Buttons text="/" Obj={calcObj} onClick={handleClick} />
            <Buttons text="*" Obj={calcObj} onClick={handleClick} />
            <Buttons text="-" Obj={calcObj} onClick={handleClick} />
            <Buttons text="+" Obj={calcObj} onClick={handleClick} />
            <Buttons text="=" Obj={calcObj} onClick={handleClick} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
