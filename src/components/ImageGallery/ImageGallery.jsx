import React from 'react';
import { Component } from 'react';

// Check types of props
import PropTypes from 'prop-types';
import { ImageList } from './ImageGallery.styled';

class ImageGallery extends Component {
  render() {
    return <ImageList class="gallery"></ImageList>;
  }
}

export { ImageGallery };

// Types
ImageGallery.propTypes = {};
