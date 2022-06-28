/* eslint-disable react/prefer-stateless-function */

import React from 'react';
import Button from './Button';
import Input from './Input';

class Calculator extends React.Component {
  render() {
    return (
      <section className="container">
        <Input />
        <div className="calculator-container">
          <div className="normal">
            <Button name="AC" />
            <Button name="+/-" />
            <Button name="%" />
            <Button name="÷" id="orange" />
            <Button name="7" />
            <Button name="8" />
            <Button name="9" />
            <Button name="X" id="orange" />
            <Button name="4" />
            <Button name="5" />
            <Button name="6" />
            <Button name="-" id="orange" />
            <Button name="1" />
            <Button name="2" />
            <Button name="3" />
            <Button name="+" id="orange" />
          </div>
          <div className="unique">
            <Button name="0" />
            <Button name="." />
            <Button name="=" id="orange" />
          </div>

        </div>
      </section>
    );
  }
}
export default Calculator;
