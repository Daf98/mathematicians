import React from 'react';
import '../Styles/Calculate.css';
import Calculator from '../components/Calculator';

const Calculate = () => (
  <div>
    <h2>Let&apos;s do some math!</h2>
    <div className="actual-calculator"><Calculator /></div>
  </div>
);
export default Calculate;
