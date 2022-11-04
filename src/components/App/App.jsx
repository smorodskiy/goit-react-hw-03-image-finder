import React from 'react';
import { Component } from 'react';

import {
  Button,
  ImageGallery,
  ImageGalleryItem,
  Loader,
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

  getImages = async (imageName, page) => {
    await this.pixabay.fetchImagesByName(imageName, page);
    this.setState({
      images: this.pixabay.images,
      hits: this.pixabay.hits,
      numPages: this.pixabay.numPages,
    });
  };

  render() {
    return (
      <Container>
        <Searchbar handleGetImages={this.getImages} />
        <ImageGallery images={this.state.images} />
      </Container>
    );
  }
}

export { App };
