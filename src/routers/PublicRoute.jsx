import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { refreshTokenApi } from '../services/authServices';
import { loginSimple } from '../context/actions/auth-actions';
import GlobalSpiner from '../components/organisms/spiner/GlobalSpiner';

const PublicRoute = ({ children }) => {
  const { isAuthenticated, user: { role } } = useSelector((state) => state.auth);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const route = role === 'ADMIN' ? '/dashboard' : '/dashboard/general';

  const token = localStorage.getItem('token');

  useEffect(() => {
    if (token && !isAuthenticated) {
      setIsLoading(true);

      refreshTokenApi(token)
        .then((user) => {
          localStorage.setItem('token', user.token);

          setTimeout(() => {
            setIsLoading(false);
          }, 1000);

          if (role === 'STUDENT' || role === 'INSTITUTION') {
            navigate(localStorage.getItem('lastPath') || '/dashboard/general');
          }
          if (role === 'ADMIN') {
            navigate(localStorage.getItem('lastPath') || '/dashboard');
          }

          dispatch(loginSimple(user));
        })
        .catch(() => {
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }

    return () => {

    };
  }, []);

  if (isLoading) {
    return (
      <GlobalSpiner />
    );
  }

  return (
    isAuthenticated ? <Navigate to={route} /> : (children)
  );
};

PublicRoute.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.elementType,
  ]).isRequired,
};

export default PublicRoute;
