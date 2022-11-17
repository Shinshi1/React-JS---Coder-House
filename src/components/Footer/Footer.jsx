import React from 'react'
import './footer.css'
import FacebookWidget from './FacebookWidget'
import InstagramWidget from './InstagramWidget'
import Logo from '../NavBar/Logo/Logo'
import MailWidget from './MailWidget'
import PhoneWidget from './PhoneWidget'


const Footer = () => {
  return (
    <footer className='flex items-center justify-around w-full p-7 footer-container'>
        <div className='flex flex-col gap-3'>
            <h5 className='text-xl font-bold font-philosopher'>Redes</h5>
            <a href="/"><FacebookWidget /></a> 
            <a href="/"><InstagramWidget /></a>
        </div>
        <Logo />
        <div className='flex flex-col gap-3'>
          <h5 className='text-xl font-bold font-philosopher'>Contacto</h5>
          <span className='flex flex-row gap-1 text-sm font-poppins'><MailWidget />info@PLaCreme </span>
          <span className='flex flex-row gap-1 text-sm font-poppins'><PhoneWidget /> +54 011 0000-0000</span>
        </div>
    </footer>
  )
}

export default Footer