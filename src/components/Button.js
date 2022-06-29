import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.PureComponent {
  render() {
    const { id, name } = this.props;
    return (
      <div className="single-button" id={id}><h3>{name}</h3></div>
    );
  }
}

Button.propTypes = { name: PropTypes.string.isRequired, id: PropTypes.string.isRequired };
export default Button;
