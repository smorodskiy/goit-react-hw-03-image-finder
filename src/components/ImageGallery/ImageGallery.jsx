import React from 'react';
import { Component } from 'react';

// Check types of props
import PropTypes from 'prop-types';
import { ImageList } from './ImageGallery.styled';
import { ImageGalleryItem } from 'components';

class ImageGallery extends Component {
  render() {
    const { images } = this.props;

    return (
      <ImageList>
        {images.map(image => {
          const { id, largeImageURL, webformatURL, tags } = image;
          return (
            <ImageGalleryItem
              key={id}
              largeImageURL={largeImageURL}
              webformatURL={webformatURL}
              tags={tags}
            />
          );
        })}
      </ImageList>
    );
  }
}

export { ImageGallery };

// Types
ImageGallery.propTypes = {};
