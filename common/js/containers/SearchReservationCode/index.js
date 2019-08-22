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
import SelectLanguage from '@components/common/SelectLanguage';
import { withNamespaces } from 'react-i18next';
import i18n from '@lib/i18n';

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
    const title = i18n.t('common:search_reservation_code.title');

    return (
      <Container>
        <SelectLanguage />
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
  todos: state.todos,
});

export default withNamespaces()(connect(mapStateToProps)(SearchReservationCodeContainer));
