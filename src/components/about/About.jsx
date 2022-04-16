import React from 'react'
import './about.css'
import ME from '../../assets/pic.png'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'
function About() {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__card">
            <article className="about__cards">
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>2+ Year Experience </small>
            </article>
            <article className="about__cards">
              <FiUsers className='about__icon' />
              <h5>clients</h5>
              <small>200 Worldwide </small>
            </article>
            <article className="about__cards">
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ducimus quae nulla unde? Perferendis sint nisi ad, rerum repellat perspiciatis ut magni eius, inventore sunt eaque voluptate, tenetur deleniti id.</p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About