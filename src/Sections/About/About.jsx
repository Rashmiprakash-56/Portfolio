import React from 'react'
import './About.css'
import html from './svgs/icons8-html.svg'
import css from './svgs/icons8-css.svg'
import javascript from './svgs/icons8-javascript.svg'
import node from './svgs/icons8-node-js.svg'
import vs from './svgs/icons8-vs-code.svg'
import express from './svgs/icons8-express-js.svg'


const About = () => {
  return (
   <section id="About">
    <div className="about-card">
    <div><p className='about-heading'>About Me <br /> </p><hr className='about-line'/></div>
     <div className="about-container">
      <div className="about-text" ><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quod alias rem suscipit unde vero eveniet eum veritatis ut sunt, facilis ab sequi voluptatem id non tempora eaque perferendis possimus?</p></div>
       <div className="about-pic">
        <img src="https://i.pinimg.com/564x/47/b2/d5/47b2d5ca2f1bd2b8df3f04b2d66ce2c0.jpg" alt="about pic" className='about-pic' />
       </div>
     </div>
     <div className="tech-stack">
      <p className='stack-txt'> Skills : </p>
       <img src= {html} alt="" className='icons'/>
       <img src= {css} alt=""className='icons'/>
       <img src= {javascript} alt=""className='icons' />
       <img src= {node} alt="" className='icons'/>
       <img src= {express} alt="" className='icons'/>
       <img src= {vs} alt="" className='icons'/>
     </div>
    </div>
    
   </section>
  )
}

export default About