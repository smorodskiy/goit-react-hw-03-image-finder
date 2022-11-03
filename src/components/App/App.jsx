import React from 'react';
import { Component } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

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
import { nanoid } from 'nanoid';
import { Pixabay } from 'components/http/fetchImages';


class App extends Component {
  static defaultContacts = [];

  // Global states
  state = {};

  getImageByName = async imageName => {
console.log(Pixabay);
    const images = await Pixabay.getImageByName(imageName);
    return images
  };

  componentDidMount() {
    try {
      console.log(this.getImageByName('car'));
    } catch (error) {
      console.log(error);
    }
  }

  componentDidUpdate(prevProp, prevState) {
    if (prevState !== this.state) {
      try {
      } catch (error) {
        console.log(error);
      }
    }
  }

  render() {
    
    return (
      <Container>
        <Section title="Phonebook"></Section>
      </Container>
    );
  }
}

export { App };
