import React from 'react';
import { Component } from 'react';

// Check types of props
import PropTypes from 'prop-types';

class Modal extends Component {
  render() {
    return(<></>)
  }
}

export { Modal };

// Types
Modal.propTypes = {
  Modal: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
  onDeleteUser: PropTypes.func.isRequired,
};
