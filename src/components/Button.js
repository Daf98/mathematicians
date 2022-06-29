import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.PureComponent {
  render() {
    const { id, name, changeState } = this.props;
    return (
      <button type="button" className="single-button" id={id} onClick={() => { changeState(name); }}><h3>{name}</h3></button>
    );
  }
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  changeState: PropTypes.func.isRequired,
};
export default Button;
