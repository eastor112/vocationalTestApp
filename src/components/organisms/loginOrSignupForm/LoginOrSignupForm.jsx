import React from 'react'
import { useNavigate } from 'react-router-dom'


const LoginOrSignupForm = ({ title }) => {

  const navigate = useNavigate();

  const handleLoginOrSignup = () => {
    navigate('/test')
  }

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // }

  return (
    <form
      className="mt-6 flex flex-col"
      action=""
    // method="post"
    // onSubmit={handleSubmit}
    >

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

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6  whitespace-nowrap"
        onClick={handleLoginOrSignup}
      >
        {title}
      </button>

    </form>
  )
}

export default LoginOrSignupForm
