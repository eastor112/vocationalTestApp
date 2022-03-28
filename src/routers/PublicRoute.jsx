import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const PublicRoute = ({ route, children }) => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    isAuthenticated ? <Navigate to={route} /> : (children)
  );
};

PublicRoute.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.elementType,
  ]).isRequired,
  route: PropTypes.string.isRequired,
};

export default PublicRoute;
