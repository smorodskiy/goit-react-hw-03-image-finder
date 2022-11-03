import React from 'react';
import { Component } from 'react';

// Check types of props
import PropTypes from 'prop-types';

class Loader extends Component {
  render() {
    return(<></>)
  }
}

export { Loader };

// Types
Loader.propTypes = {
  Loader: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
  onDeleteUser: PropTypes.func.isRequired,
};
