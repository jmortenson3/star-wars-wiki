import React, { Component } from 'react';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchVal: ''
    };
  }
  render() {
    return (
      <form>
        <input
          type='text'
          className='form-control'
          placeholder='Obi-Wan...'
          value={ this.state.searchVal }
          onChange={ e => this.setState({ searchVal: e.target.value }) } />
        <button type='submit' className='btn btn-success pull-right'>Search</button>
      </form>
    );
  };
}

export default SearchForm;