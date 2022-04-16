import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { refreshTokenApi } from '../services/authServices';
import { loginSimple } from '../context/actions/auth-actions';
import GlobalSpiner from '../components/organisms/spiner/GlobalSpiner';

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  localStorage.setItem('lastPath', location.pathname + location.search);

  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!isAuthenticated && token) {
      setIsLoading(true);

      refreshTokenApi(token)
        .then((user) => {
          localStorage.setItem('token', user.token);

          setTimeout(() => {
            setIsLoading(false);
          }, 1000);

          navigate(localStorage.getItem('lastPath') || '/dashboard');

          dispatch(loginSimple(user));
        }).catch(() => {
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
    <>
      {

        isAuthenticated && children
      }
      {

        !isLoading && !isAuthenticated && <Navigate to='/login' />
      }
    </>

  );
};

PrivateRoute.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.elementType,
  ]).isRequired,
};

export default PrivateRoute;
