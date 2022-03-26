import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const location = useLocation();

  localStorage.setItem('lastPath', location.pathname + location.search);

  return (
    isAuthenticated ? children : <Navigate to='/login' />
  );
};

PrivateRoute.propTypes = {
  children: PropTypes.elementType.isRequired,
};

export default PrivateRoute;
