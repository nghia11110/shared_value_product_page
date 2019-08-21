import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import {
  charge,
} from '@actions/gmo-payment';
import { Container } from 'semantic-ui-react';
import {
  SearchReservationCodeForm
} from '@components/search-reservation-code';

class SearchReservationCodeContainer extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  };

  charge = params => {
    const { dispatch } = this.props;

    if (params) {
      dispatch(charge(params));
    }
  };

  render() {
    const title = 'Search Reservation Code';

    return (
      <Container>
        <Helmet>
          <title>{title}</title>
        </Helmet>
        <h1>{title}</h1>
        <SearchReservationCodeForm
          charge={this.charge}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  gmoPayments: state.gmoPayments,
  todos: state.todos
});

export default connect(mapStateToProps)(SearchReservationCodeContainer);
