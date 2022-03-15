import React from 'react'
import Button from '../components/atoms/Button/Button'
import { Link } from 'react-router-dom'

const NotFound404 = () => {
  return (
    <>
      <section className='bg-slate-100 w-screen h-screen place-content-center'>
        <div className='w-full flex items-center flex-col'>
          <figure className=' w-3/4 pt-52' >
            <img src={require('./../assets/404.png')} alt="" />
          </figure>
          <div className='place-content-center md: w-full'>
            <h2 className='text-2xl font-bold text-center md:text-4xl'>Page not found.</h2>
            <br />
            <p className=' text-gray-500 text-center'>The page you are looking for might have been removed.</p>
            <div className="w-full flex justify-center pt-">
              <Button><Link to='/' className="flex items-center"> Return to home</Link></Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default NotFound404
