import React from 'react'
import './Projects.css'
import Project from './Project'

const Projects = React.forwardRef((props, ref) => {
  return (
   <section id="Projects" ref={ref}  className='Projects'>
    <div  className="project-card">
     <div><p className="project-title">Projects <br /> </p><hr className='project-line'/></div>
         <Project/>
         <Project/>
         <Project/>
    </div>
   </section>
  )
});

export default Projects