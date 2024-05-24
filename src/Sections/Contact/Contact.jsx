import React from 'react'
import './Contact.css'
import fb from './icons/icons8-facebook.svg'
import insta from './icons/icons8-instagram.svg'
import ln from './icons/icons8-linkedin.svg'
import x from './icons/icons8-twitterx.svg'
import git from './icons/icons8-github.svg'

const Contact = () => {
  const handleClick = (e) =>{
     e.preventDefault();
  }
  return (
   <section id="Contact">
    <div className="contact-card">
     <div> <p className="contact-title">Contact Me <br /> </p><hr className='contact-line' /></div>
      <div className="about-container">
      <div className="contact-me-text">
        <p className="contact-heading">
          Want to Collab 
        </p>
        <p className="contact-msg">
        Thanks for stopping by, I'm currently looking for new opportunities. If you think we might be a good fit for one another, Send me a mail or Contact here..
        </p>
        <div className="contact-socials">
              <img src={fb} alt="" className='contact-icons'/>
              <img src={insta} alt="" className='contact-icons'/>
              <img src={ln} alt="" className='contact-icons'/>
              <img src={x} alt="" className='contact-icons'/>
              <img src={git} alt="" className='contact-icons'/>
          </div>
      </div>
       <div className="contct-form">
       <form action="" className="contact-me-form">
          <div className="form-name">
          <input type="text" name='name' placeholder='name'/>
          </div>
          <div className="form-email">
          <input type="email" name='email' placeholder='email'/>
          </div>
          <div className="form-topic">
          <input type="topic" name='topic' placeholder='topic'/>
          </div>
          <div className="form-textarea">
          <textarea></textarea>
          </div>
  
      <button type='submit' className='form-submit' name='submit btn' onClick={handleClick}>Hit Me Up</button>
       </form>
       </div>
         </div>
      </div>
    
   </section>
  )
}

export default Contact