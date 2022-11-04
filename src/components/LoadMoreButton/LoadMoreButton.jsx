import React from 'react';
import { Component } from 'react';

// Check types of props
import PropTypes from 'prop-types';
import { Button } from './LoadMoreButton.styled';

class LoadMoreButton extends Component {
  handleOnClickButton = () => {};

  render() {
    // const {  } = this.state;
    return (
      <Button type="button" onClick={() => this.handleGetImages()}>
        Load More
      </Button>
    );
  }
}

export { LoadMoreButton };

// Types
LoadMoreButton.propTypes = {};
