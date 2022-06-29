import React from 'react';
import Button from './Button';
import Input from './Input';
import calculate from '../logic/calculate';

class Calculator extends React.PureComponent {
  constructor(props) {
    super(props);
    this.changeState = this.changeState.bind(this);
    this.state = {
      total: null,
      next: null,
    };
  }

  showOp(screen) {
    this.setState(() => ({ next: screen }));
  }

  changeState(button) {
    this.setState((state) => (calculate(state, button)));
  }

  render() {
    const { next, total } = this.state;
    return (
      <section className="container">
        <Input props={next || total || '0'} />
        <div className="calculator-container">
          <div className="normal">
            <Button name="AC" id="gray" changeState={this.changeState} />
            <Button name="+/-" id="gray" changeState={this.changeState} />
            <Button name="%" id="gray" changeState={this.changeState} />
            <Button name="÷" id="orange" changeState={this.changeState} />
            <Button name="7" id="gray" changeState={this.changeState} />
            <Button name="8" id="gray" changeState={this.changeState} />
            <Button name="9" id="gray" changeState={this.changeState} />
            <Button name="x" id="orange" changeState={this.changeState} />
            <Button name="4" id="gray" changeState={this.changeState} />
            <Button name="5" id="gray" changeState={this.changeState} />
            <Button name="6" id="gray" changeState={this.changeState} />
            <Button name="-" id="orange" changeState={this.changeState} />
            <Button name="1" id="gray" changeState={this.changeState} />
            <Button name="2" id="gray" changeState={this.changeState} />
            <Button name="3" id="gray" changeState={this.changeState} />
            <Button name="+" id="orange" changeState={this.changeState} />
          </div>
          <div className="unique">
            <Button name="0" id="gray" changeState={this.changeState} />
            <Button name="." id="gray" changeState={this.changeState} />
            <Button name="=" id="orange" changeState={this.changeState} />
          </div>

        </div>
      </section>
    );
  }
}
export default Calculator;
