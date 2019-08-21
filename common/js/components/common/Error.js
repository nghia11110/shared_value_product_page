import React from 'react';
import PropTypes from 'prop-types';

const Error = (props) => {
  const {
    error,
    balloon,
  } = props;

  return (
    <div>
      {error &&
        <div className="ui negative message">
          <i className="close icon"></i>
          <div className="header">
            {error}
          </div>
        </div>
      }
    </div>
  );
};

Error.propTypes = {
  error: PropTypes.string,
  balloon: PropTypes.bool,
};
Error.defaultProps = {
  balloon: true,
};

export default Error;

