import React from 'react'
import git from './icons/icons8-github.svg'
import './Projects.css'

const Project = () => {
  return (
   <div className="project">
       <div className="project-pic">
        <img src="https://i.pinimg.com/564x/d1/5b/01/d15b01641bb7f0d51ff3cb9e3f64e986.jpg" alt="" className='project-pic'/>
       </div>
       <div className="project-desc">
        <p className="project-heading"><b>Project Name</b></p>
        <p className="project-detail">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa quas praesentium quod, eius assumenda debitis quam modi vero, at temporibus eligendi ad sunt recusandae dolores impedit mollitia unde nam alias!</p>
       <div className="techs">
       <p><b>React</b></p>
       <p><b> Mongodb</b></p>
       <p><b> tailwind </b></p>
       <img src={git} alt="" className='project-link-git'/>
       </div>
       </div>
   </div>
  )
}

export default Project