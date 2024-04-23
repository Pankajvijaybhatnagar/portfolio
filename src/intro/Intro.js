import React from 'react'
import './intro.css'
import { Link } from 'react-scroll';
const Intro = () => {
  return (
    <section id="intro">
        <div className="introcontent">
        <span className="hello">Hello,</span>
        <span className="inrotext">I'm <span className="introName">Pankaj Bhatnagar</span> <br /> React Developer</span>
        <p className="intropara">  I am a skilled react developer have experience in single page web-application</p>
      <Link><button className='btn'> <img src="" alt="" /> Hire me</button></Link>
        </div>
        <img src='ukpcsphoto-removebg-preview.png' alt="profile" className="introImg"/>
        </section>
  )
}

export default Intro;