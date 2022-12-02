import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {FiDribbble} from 'react-icons/fi'

function HeaderSocioal() {
  return (
    <>
    <div className="header_socials">
        <a href="http://linkedin.com" target='_blank'  rel="noreferrer"><BsLinkedin/></a>
        <a href="http://github.com" target='_blank'  rel="noreferrer"><BsGithub/></a>
        <a href="http://dribble.com" target='_blank'  rel="noreferrer"><FiDribbble/></a>
    </div>
    </>
  )
}

export default HeaderSocioal
