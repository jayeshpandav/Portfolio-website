import React from 'react'
import './header.css'
import CTA from '../CTA'
import MAN from '../../assets/man2.png'
import Headersocials from '../HeaderSocioal'
const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>JAYESH PANDAV</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA/>
        <Headersocials/>

        <div className="me">
          <img src={MAN} alt="me"/>
        </div>

        <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
