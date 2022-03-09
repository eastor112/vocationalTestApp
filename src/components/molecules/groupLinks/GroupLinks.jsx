import React from 'react'
import Link from '../../atoms/link/Link'

const GroupLinks = ({ linksArray }) => {

  return (
    <div
      className='flex flex-col md:flex-row text-light-1'
    >
      {
        linksArray.map((link, index) => {
          return (
            <Link
              key={index}
              link={link.link}
              text={link.text}
              size={link.size}
            />
          )
        }
        )
      }
    </div>


  )
}

export default GroupLinks
