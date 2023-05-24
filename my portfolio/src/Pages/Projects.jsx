import React from 'react'
import { FaArrowCircleRight,FaGit,FaGithub,FaProjectDiagram,FaScroll } from 'react-icons/fa'
export default function Projects() {
  return (
    <>
      <div className="middle">

      <div className="header">
        <h2><skill>MY PROJECTS</skill></h2>

        <div className="proj">
          <img src="projects/football.jpg" alt="Football News website" />
          <p>Football News website <br /> <pj>View on <FaGithub/></pj> </p>
        </div>

        <div className="proj">
          <img src="projects/estg.jpg" alt="School website" />
          <p>School website <br /> <pj>View on <FaGithub/></pj> </p>
        </div>

        <div className="proj">
          <img src="projects/havana.jpg" alt="Hotel managment system website"/>
          <p>Hotel managment system website<br /> <pj>View on <FaGithub/></pj> </p>
        </div>

        <div className="proj">
          <img src="projects/attendance.jpg" alt="Student Attendance website"/>
          <p>Student Attendance website<br /> <pj>View on <FaGithub/></pj> </p>
        </div>
        <FaArrowCircleRight className='next'/>

        </div>
        </div>
    </>
  )
}
