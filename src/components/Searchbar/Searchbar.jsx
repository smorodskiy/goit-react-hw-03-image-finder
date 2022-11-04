import React from 'react';
import { Component } from 'react';

// Check types of props
import PropTypes from 'prop-types';
import {
  SearchHeader,
  SearchForm,
  SearchButton,
  SearchButtonLabel,
  SearchInput,
} from './Searchbar.styled';

class Searchbar extends Component {
  render() {
    return (
      <SearchHeader class="searchbar">
        <SearchForm class="form">
          <SearchButton type="submit" class="button">
            <SearchButtonLabel class="button-label">Search</SearchButtonLabel>
          </SearchButton>

          <SearchInput
            class="input"
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </SearchHeader>
    );
  }
}

export { Searchbar };

// Types
Searchbar.propTypes = {};
