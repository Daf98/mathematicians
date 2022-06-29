import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.PureComponent {
  render() {
    const { props } = this.props;
    return (
      <div id="input">{props}</div>

    );
  }
}

Input.propTypes = {
  props: PropTypes.number.isRequired,
};
export default Input;
