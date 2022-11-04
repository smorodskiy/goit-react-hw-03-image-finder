import React from 'react';
import { Component } from 'react';

// Check types of props
import PropTypes from 'prop-types';
import { Image, ImageItem } from './ImageGalleryItem.styled';

class ImageGalleryItem extends Component {
  render() {
    const { largeImageURL, webformatURL, tags } = this.props;
    
    return (
      <ImageItem>
        <Image src={webformatURL} alt={tags} />
      </ImageItem>
    );
  }
}

export { ImageGalleryItem };

// Types
ImageGalleryItem.propTypes = {};
