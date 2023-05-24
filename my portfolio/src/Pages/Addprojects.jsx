import React from 'react'
import { FaArrowCircleLeft,FaArrowCircleRight,FaGit,FaGithub,FaProjectDiagram,FaScroll } from 'react-icons/fa'
import { BiDownArrow } from 'react-icons/bi'
export default function Addprojects() {
  return (
	<>
	<div className="header">
	  <h2><skill>MY PROJECTS</skill></h2>

	  <div className="proj">
		<img src="projects/transport.jpg" alt="Rwanda Transport website" />
		<p>Rwanda Transport website <br /> <pj>View on <FaGithub/></pj> </p>
	  </div>

	 
	  <FaArrowCircleLeft className='next backs'/>
	  <BiDownArrow className='downicon  downicon3'/>

	</div>
  </>
  )
}
