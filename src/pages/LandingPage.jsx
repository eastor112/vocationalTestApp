import React from 'react';
import Advertisement from '../components/organisms/advertisement/Advertisement';
import Cta from '../components/organisms/cta/Cta';
import Footer from '../components/organisms/footer/Footer';
import HeroMain from '../components/organisms/hero/HeroMain';

function LandingPage() {
  return (
    <>
      <main className='px-6 md:px-20 lg:px-24 pb-3 pt-16'>

        <HeroMain />

        <Advertisement />

        <Cta />

      </main>

      <Footer />
    </>
  );
}

export default LandingPage;
