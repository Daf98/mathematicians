import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.PureComponent {
  render() {
    const { buttonName, changeState, className } = this.props;
    return (
      <button type="button" onClick={() => { changeState(buttonName); }}><h3>{buttonName}</h3></button>
    );
  }
}

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  changeState: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
};
export default Button;
