/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import calculate from '../logic/calculate';
import '../logic/operate';
import Events from './buttonEvents';

const Calculator = () => {
  const [calcObj, setState] = useState({ total: 0, next: null, operation: null });

  const click = (calcObj, text) => {
    setState({ calcObj: calculate(calcObj, text) });
  };

  let contentDisplay = '0';
  if (
    Object.keys(calcObj).length === 0
    || (calcObj.total === null
      && calcObj.next === null
      && calcObj.operation === null)
  ) {
    contentDisplay = '0';
  } else {
    contentDisplay = calcObj.next != null ? calcObj.next
      : calcObj.next != null ? calcObj.total
        : calcObj.operation;
  }

  return (
    <div className="calc-container">
      <div className="calc-firstDisplay">{contentDisplay}</div>
      <div className="calc-Btns">
        <div className="calc-greyBtns">
          <div className="calc-greyBtn1">
            <Events text="AC" Obj={calcObj} onClick={click} />
            <Events text="+/-" Obj={calcObj} onClick={click} />
            <Events text="%" Obj={calcObj} onClick={click} />
            <Events text="7" Obj={calcObj} onClick={click} />
            <Events text="8" Obj={calcObj} onClick={click} />
            <Events text="9" Obj={calcObj} onClick={click} />
            <Events text="4" Obj={calcObj} onClick={click} />
            <Events text="5" Obj={calcObj} onClick={click} />
            <Events text="6" Obj={calcObj} onClick={click} />
            <Events text="1" Obj={calcObj} onClick={click} />
            <Events text="2" Obj={calcObj} onClick={click} />
            <Events text="3" Obj={calcObj} onClick={click} />
          </div>
          <div className="calc-greyBtn2">
            <Events text="0" Obj={calcObj} onClick={click} />
            <Events text="." Obj={calcObj} onClick={click} />
          </div>
        </div>

        <div className="orange-btn">
          <Events text="/" Obj={calcObj} onClick={click} />
          <Events text="*" Obj={calcObj} onClick={click} />
          <Events text="-" Obj={calcObj} onClick={click} />
          <Events text="+" Obj={calcObj} onClick={click} />
          <Events text="=" Obj={calcObj} onClick={click} />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
