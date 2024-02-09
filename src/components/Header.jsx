import React from 'react'
import logo from './../assets/logo.svg'

function Header() {
  return (
    <header className='flex items-center justify-center w-full h-[80px] bg-white fixed top-0 left-0 shadow-[0px_0px_4px_rgba(0,0,0,0.1)]'>
      <figure className='w-[12rem]'>
        <img src={logo} alt="GitScore" className='w-full'/>
      </figure>
    </header>
  )
}

export default Header