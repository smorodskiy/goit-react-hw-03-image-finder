import React from 'react';
import { Component } from 'react';

// Check types of props
import PropTypes from 'prop-types';

class ImageGallery extends Component {
  render() {
    return(<></>)
  }
}

export { ImageGallery };

// Types
ImageGallery.propTypes = {
  ImageGallery: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
  onDeleteUser: PropTypes.func.isRequired,
};
