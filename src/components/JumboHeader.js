import React, { Component } from 'react';
import SearchForm from './SearchForm';

class JumboHeader extends Component {
  render() {
    return (
      <div className="jumbotron">
        <h1 className="display-4">Star Wars Wiki</h1>
        <SearchForm />
      </div>
    );
  }
}

export default JumboHeader;