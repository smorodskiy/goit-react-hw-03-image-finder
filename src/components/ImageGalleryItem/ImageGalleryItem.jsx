import React from 'react';
import { Component } from 'react';

// Check types of props
import PropTypes from 'prop-types';

class ImageGalleryItem extends Component {
  render() {
    return(<></>)
  }
}

export { ImageGalleryItem };

// Types
ImageGalleryItem.propTypes = {
  ImageGalleryItem: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
  onDeleteUser: PropTypes.func.isRequired,
};
