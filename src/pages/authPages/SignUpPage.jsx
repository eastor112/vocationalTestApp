import React, { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HeaderForm from '../../components/molecules/headerForm/HeaderForm';
import Footer from '../../components/organisms/footer/Footer';
import LoginOrSignupForm from '../../components/organisms/loginOrSignupForm/LoginOrSignupForm';

const SignUpPage = () => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>

      <main className='px-6 md:px-20 lg:px-24 pb-3 pt-20 flex flex-col items-center'>

        <div className='signUp-container w-5/6 sm:w-4/6 md:w-3/6 lg:w-2/6 xl:1/6'>

          <HeaderForm
            title='Sign up'
            description='Already have an account?'
            login={false}
          />

          <LoginOrSignupForm title='Sign up' />

        </div>

      </main>

      <Footer />
    </>
  );
};

export default SignUpPage;
