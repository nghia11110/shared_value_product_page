import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Container, Message, Button } from 'semantic-ui-react';
import { withNamespaces } from 'react-i18next';
import i18n from '@lib/i18n';

class SearchReservationCodeResultContainer extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    reservationCode: PropTypes.string,
  };

  render() {
    const {
      reservationCode,
      history,
    } = this.props;
    const title = i18n.t('common:search_reservation_code.result');

    return (
      <Container textAlign='center'>
        <h3>{title}</h3>
        <Message>
          <h1>{reservationCode}</h1>
        </Message>
        <Button
          content={i18n.t('common:btnBackToHome')}
          onClick={() => history.push('/')}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  reservationCode: state.reservationCode.reservationCode,
});

export default withNamespaces()(connect(mapStateToProps)(withRouter(SearchReservationCodeResultContainer)));
