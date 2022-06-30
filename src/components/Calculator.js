import React from 'react';
import Button from './Button';
import Input from './Input';
import calculate from '../logic/calculate';

const buttons = [{
  buttonName: 'AC',
  className: 'gray',
},
{
  buttonName: '+/-',
  className: 'gray',
},
{
  buttonName: '%',
  className: 'gray',
},
{
  buttonName: '÷',
  className: 'orange',
},
{
  buttonName: '7',
  className: 'gray',
},
{
  buttonName: '8',
  className: 'gray',
},
{
  buttonName: '9',
  className: 'gray',
},
{
  buttonName: 'x',
  className: 'orange',
},
{
  buttonName: '4',
  className: 'gray',
},
{
  buttonName: '5',
  className: 'gray',
},
{
  buttonName: '6',
  className: 'gray',
},
{
  buttonName: '-',
  className: 'orange',
},
{
  buttonName: '1',
  className: 'gray',
},
{
  buttonName: '2',
  className: 'gray',
},
{
  buttonName: '3',
  className: 'gray',
},
{
  buttonName: '+',
  className: 'orange',
},
{
  buttonName: '0',
  className: 'gray unique',
},
{
  buttonName: '.',
  className: 'gray',
},
{
  buttonName: '=',
  className: 'orange',
},
];
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
          {buttons.map((button) => (
            <Button
              key={button.key}
              buttonName={button.buttonName}
              className={button.className}
              changeState={this.changeState}
            />
          ))}
        </div>
      </section>
    );
  }
}
export default Calculator;
