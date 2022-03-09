import React from 'react'

const HeaderLogin = (props) => {

  const { title, description } = props;

  return (
    <div className="mt-10 text-center">
      <h2 className="text-3xl">
        {title}
      </h2>
      <h3 className="flex justify-center gap-3 mt-3">
        <p>
          {/* You don't have an account yet? */}
          {description}
        </p>
        <a className="text-blue-500 hover:text-blue-700 hover:underline" href="../signup.html">Sign Up</a>
      </h3>
    </div>
  )
}

export default HeaderLogin
