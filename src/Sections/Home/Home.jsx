import React from 'react'
import './Home.css'
import fb from './icons/icons8-facebook.svg'
import insta from './icons/icons8-instagram.svg'
import ln from './icons/icons8-linkedin.svg'
import x from './icons/icons8-twitterx.svg'
import git from './icons/icons8-github.svg'

const Home = ({ scrollToProjects }) => {
 

  return (
   <section id='Home'>
    <div className="home-container">
     <div className="title-card">
     <div className="section_picContainer">
         <img src="https://i.pinimg.com/564x/88/08/b8/8808b840ef5f755396e2b8f465e3d4bf.jpg" alt="Profile pic" />
          <hr className='home-line'/><br />
          <p className="home-title-text">WEB DEVELOPER</p>
          <div className="home-socials">
              <img src={fb} alt="" className='home-icons'/>
              <img src={insta} alt="" className='home-icons'/>
              <img src={ln} alt="" className='home-icons'/>
              <img src={x} alt="" className='home-icons'/>
              <img src={git} alt="" className='home-icons'/>
          </div>
      </div>
    <div className="detail-text">
      <p className='p1'>Hello , I am </p>
      <p className='p3'>Rashmiprakash Satapathy <br />
               Web Developer
       </p>  

       <div className="home-btns">
       <button className="resume-button"><b>RESUME</b></button>
       <button className="projects-button" onClick={scrollToProjects}><b>PROJECTS</b></button>
       </div>

      <p className="p2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique fugit, iure distinctio rerum voluptatibus, sunt molestiae voluptates possimus vel totam cum nesciunt soluta! Nisi quidem, facilis sint quos odio doloribus?</p>
      </div>
     </div>
    </div>
      
   </section>
  )
}

export default Home