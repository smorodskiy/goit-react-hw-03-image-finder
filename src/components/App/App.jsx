import React from 'react';
import { Component } from 'react';

import {
  Button,
  ImageGallery,
  ImageGalleryItem,
  Loader,
  LoadMoreButton,
  Modal,
  Searchbar,
  Section,
} from 'components';

import { Container } from './App.styled';

// Generator ids
// import { nanoid } from 'nanoid';
import { Pixabay } from 'components/http/fetchImages';

class App extends Component {
  static defaultContacts = [];

  // Global states
  state = {
    images: [],
    hits: 0,
    numPages: 0,
    searchValue: '',
  };

  componentDidMount() {
    try {
      this.pixabay = new Pixabay();
      this.getImages();
    } catch (error) {
      console.log(error);
    }
  }

  componentDidUpdate(prevProp, prevState) {
    if (prevState !== this.state) {
      try {
        console.log(this.state);
      } catch (error) {
        console.log(error);
      }
    }
  }

  updateSearchValue = newValue => {
    console.log(newValue);
    this.setState({ searchValue: newValue });
  };

  getImages = async (imageName, page) => {
    await this.pixabay.fetchImagesByName(imageName, page);
    this.setState({
      images: this.pixabay.images,
      hits: this.pixabay.hits,
      numPages: this.pixabay.numPages,
    });
  };

  render() {
    const { numPages } = this.state;
    return (
      <Container>
        <Searchbar
          handleGetImages={this.getImages}
          handleUpdateSearchValue={this.updateSearchValue}
        />
        <ImageGallery images={this.state.images} />
        {numPages > 1 && <LoadMoreButton handleGetImages={this.getImages} />}
      </Container>
    );
  }
}

export { App };
