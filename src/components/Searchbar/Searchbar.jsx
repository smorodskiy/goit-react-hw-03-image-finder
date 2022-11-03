import React from 'react';
import { Component } from 'react';

// Check types of props
import PropTypes from 'prop-types';

class Searchbar extends Component {
  render() {
    return(<></>)
  }
}

export { Searchbar };

// Types
Searchbar.propTypes = {
  Searchbar: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
  onDeleteUser: PropTypes.func.isRequired,
};
