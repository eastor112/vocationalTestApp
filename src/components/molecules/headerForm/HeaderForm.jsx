import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function HeaderForm(props) {
  const { title, description, login = true } = props;

  return (
    <div className="mt-10 text-center">
      <h2 className="text-3xl">
        {title}
      </h2>
      <h3 className="flex justify-center gap-3 mt-3">
        <p>
          {description}
        </p>
        <Link
          className="text-blue-500 hover:text-blue-700 hover:underline"
          to={!login ? '/login' : '/signup'}
        >
          {login ? 'Sign up' : 'Login'}
        </Link>
      </h3>
    </div>
  );
}

export default HeaderForm;

HeaderForm.defaultProps = {
  login: true,
};

HeaderForm.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  login: PropTypes.bool,
};
