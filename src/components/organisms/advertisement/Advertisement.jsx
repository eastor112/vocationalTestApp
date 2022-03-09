import React from 'react'
import Card from './Card'

const Advertisement = () => {
  return (
    <section className="cards mt-32 md:mt-36 lg:mt-40">

      <div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl leading-5 font-semibold mt-6 md:mt-0 md:text-center">
          Choose the best educational institution
        </h2>

        <p
          className="text-xl md:text-lg lg:text-xl leading-4 md:leading-4 lg:leading-5 mt-10 md:mt-5 lg:mt-10 md:text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ad reprehenderit nulla omnis optio, quo dolorem
        </p>
      </div>

      <div className="carousel z-0 mt-6 relative">
        <button className="left-arrow bg-blue-400 opacity-10 hover:opacity-60 absolute h-full">
          back
        </button>
        <button className="right-arrow absolute bg-blue-400 opacity-10 hover:opacity-60 right-0 h-full">
          next
        </button>

        <div className="card-container mx-9 overflow-hidden whitespace-nowrap">

          <Card />

          <Card />

          <Card />

          <Card />

        </div>

      </div>

    </section>
  )
}

export default Advertisement
