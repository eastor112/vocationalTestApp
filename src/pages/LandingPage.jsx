import Advertisement from '../components/organisms/advertisement/Advertisement'
import Cta from '../components/organisms/cta/Cta'
import Footer from '../components/organisms/footer/Footer'
import Hero from '../components/organisms/Hero/Hero'
import NavBar from '../components/organisms/navBar/NavBar'

const LandingPage = () => {
  return (
    <>
      <NavBar />

      <main className="px-6 md:px-20 lg:px-24 pb-3 pt-20">

        <Hero />

        <Advertisement />

        <Cta />

      </main>

      <Footer />
    </>
  )
}

export default LandingPage
