import React from 'react';
import { Component } from 'react';

// Check types of props
import PropTypes from 'prop-types';
import { Button } from './LoadMoreButton.styled';

class LoadMoreButton extends Component {
  render() {
    const { handleNextPage } = this.props;
    return (
      <Button type="button" onClick={handleNextPage}>
        Load More
      </Button>
    );
  }
}

export { LoadMoreButton };

// Types
LoadMoreButton.propTypes = {
  handleNextPage: PropTypes.func,
};
