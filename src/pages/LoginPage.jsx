import HeaderLogin from '../components/molecules/headerLogin/HeaderLogin'
import Footer from '../components/organisms/footer/Footer'
import NavBar from '../components/organisms/navBar/NavBar'

const LoginPage = () => {

  return (
    <>

      <NavBar />

      <main className="px-6 md:px-20 lg:px-24 pb-3 pt-20 flex flex-col items-center">

        <div className="signUp-container w-5/6 sm:w-4/6 md:w-3/6 lg:w-2/6 xl:1/6">

          <HeaderLogin
            title='Log In'
            description="You don't have an account yet?"
          />


          <form className="mt-6 flex flex-col" action="" method="post">

            <div className="mb-5 flex flex-col gap-2">
              <label for="email" className=""></label>
              <input id="email" type="email" placeholder="Email"
                className="border-b hover:border-b-2 focus:border-b-2 border-primary-1 w-full py-1 outline-none" />
            </div>

            <div className="mb-8 flex flex-col gap-2">
              <label for="pass" className=""></label>
              <input id="pass" type="password" placeholder="Password"
                className="border-b hover:border-b-2 focus:border-b-2 border-primary-1  w-full py-1 outline-none" />
            </div>

            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6  whitespace-nowrap">
              Log In
            </button>

          </form>


          <div className="flex flex-col gap-2 mt-10 mb-20">

            <div className="flex justify-between items-center w-full">
              <hr className="w-1/4  border-primary-1" />
              <p className="text-center text-primary-1 px-3">or Log in with:</p>
              <hr className="w-1/4  border-primary-1" />
            </div>

            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 mt-5 whitespace-nowrap">
              <i className="fa fa-google" aria-hidden="true"></i>
              Log In with Google
            </button>
          </div>

        </div>

      </main>

      <Footer />


    </>
  )
}

export default LoginPage
