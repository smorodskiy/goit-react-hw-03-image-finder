import React from 'react';
import { Component } from 'react';

// Check types of props
import PropTypes from 'prop-types';
import { Button } from './LoadMoreButton.styled';

class LoadMoreButton extends Component {
  render() {
    return(<Button>Load More</Button>)
  }
}

export { LoadMoreButton };

// Types
LoadMoreButton.propTypes = {

};
