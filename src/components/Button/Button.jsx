import React from 'react';
import { Component } from 'react';

// Check types of props
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    return(<></>)
  }
}

export { Button };

// Types
Button.propTypes = {
  Button: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
  onDeleteUser: PropTypes.func.isRequired,
};
