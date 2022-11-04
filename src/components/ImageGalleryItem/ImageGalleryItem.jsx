import React from 'react';
import { Component } from 'react';

// Check types of props
import PropTypes from 'prop-types';
import { Image, ImageItem } from './ImageGalleryItem.styled';

class ImageGalleryItem extends Component {
  render() {
    return (
      <ImageItem class="gallery-item">
        <Image src="" alt="" />
      </ImageItem>
    );
  }
}

export { ImageGalleryItem };

// Types
ImageGalleryItem.propTypes = {};
