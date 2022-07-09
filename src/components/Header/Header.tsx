import React from 'react'

const Header = () => {
  return (
    <div className='h-24 bg-red-400 text-gray-200 flex justify-center items-center gap-x-5 text-3xl font-bold '>
        <i className='fa fa-spotify'></i>
        <div className='text-3'>Spotify</div>
    </div>
  )
}

export default Header