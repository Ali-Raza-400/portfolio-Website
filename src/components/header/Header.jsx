import React from 'react'
import CTA from './CTA'
import Me from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'
import ('./header.css')
function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm </h5>
        <h1> Ali Raza</h1>
        <h5 className="text-light">Full Stack Developer</h5>
        <CTA/>
        <HeaderSocials/>
        <div className="me">
          <img src={Me} alt="" />
        </div>
          <a href="#contact" className='scroll__down'>Scroll down</a>
      </div>
    </header>
  )
}

export default Header