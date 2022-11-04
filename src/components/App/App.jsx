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
  };

  getImageByName = async (imageName, page) => {
    const pixabay = new Pixabay();
    console.log(pixabay);
    const images = await pixabay.fetchImageByName(imageName, page);
    console.log(images);
    this.setState({ images: images });
  };

  componentDidMount() {
    try {
      this.getImageByName('car',10);
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

  render() {
    return (
      <Container>
        {/* <Section title="Image gallery"></Section> */}
        <Searchbar />
        <ImageGallery />
      </Container>
    );
  }
}

export { App };
