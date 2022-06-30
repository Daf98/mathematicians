import React from 'react';
import Button from './Button';
import Input from './Input';
import calculate from '../logic/calculate';

const butons = [{
  buttonName: 'AC',
  className: 'gray'
},
{
  buttonName: '+/-',
  className: 'gray'
},
{
  buttonName: '%',
  className: 'gray'
},
{
  buttonName: '÷',
  className: 'orange'
},
{
  buttonName: '7',
  className: 'gray'
},
{
  buttonName: '8',
  className: 'gray'
},
{
  buttonName: '9',
  className: 'gray'
},
{
  buttonName: 'x',
  className: 'orange'
},
{
  buttonName: '4',
  className: 'gray'
},
{
  buttonName: '5',
  className: 'gray'
},
{
  buttonName: '6',
  className: 'gray'
},
{
  buttonName: '-',
  className: 'orange'
},
{
  buttonName: '1',
  className: 'gray'
},
{
  buttonName: '2',
  className: 'gray'
},
{
  buttonName: '3',
  className: 'gray'
},
{
  buttonName: '+',
  className: 'orange'
},
{
  buttonName: '0',
  className: 'gray'
},
{
  buttonName: '.',
  className: 'gray'
},
{
  buttonName: '=',
  className: 'gray'
}
];

const uniqueBatch = ['0', '.', '='];
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
            {firstBatch.map((fuckyou, index, array) => <Button key={fuckyou} buttonName={fuckyou} className={`${index === array.length - 1 ? 'orange' : 'gray'}`} changeState={this.changeState} />)}
            {secondBatch.map((fuckyou, index, array) => <Button key={fuckyou} buttonName={fuckyou} className={`${index === array.length - 1 ? 'orange' : 'gray'}`} changeState={this.changeState} />)}
            {thirdBatch.map((fuckyou, index, array) => <Button key={fuckyou} buttonName={fuckyou} className={`${index === array.length - 1 ? 'orange' : 'gray'}`} changeState={this.changeState} />)}
            {fourthBatch.map((fuckyou, index, array) => <Button key={fuckyou} buttonName={fuckyou} className={`${index === array.length - 1 ? 'orange' : 'gray'}`} changeState={this.changeState} />)}
          </div>
          <div className="unique">
            {uniqueBatch.map((fuckyou) => <Button key={fuckyou} buttonName={fuckyou} className="gray" changeState={this.changeState} />)}
          </div>

        </div>
      </section>
    );
  }
}
export default Calculator;
