import React, { Component } from 'react';
// import { fetchTodos } from '@actions/todos';
import SearchReservationCodeContainer from '@containers/SearchReservationCode';

class SearchReservationCodePage extends Component {
  // static fetchData = ({ store }) => {
  //   return store.dispatch(fetchTodos());
  // };

  render() {
    return <SearchReservationCodeContainer />;
  }
}

export default SearchReservationCodePage;
