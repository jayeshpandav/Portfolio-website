import React from 'react'
import './about.css'
import ME from '../../assets/man3.png'
import {FaAward} from 'react-icons/fa'
import {FaUsers} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About-img" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>3+ years Experience</small>
            </article>
            <article className="about_card">
              <FaUsers className='about_icon'/>
              <h5>Clients</h5>
              <small>300+ clients Worldwide</small>
            </article>
            <article className="about_card">
              <VscFolderLibrary className='about_icon'/>
              <h5>Projects</h5>
              <small>100+ completed</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam incidunt tempora aliquid amet repudiandae tempore magni corrupti. Eveniet facilis perspiciatis veritatis odit, incidunt, doloremque necessitatibus velit qui suscipit ratione hic.
          </p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
