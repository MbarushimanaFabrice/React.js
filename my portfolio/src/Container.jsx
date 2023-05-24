import React from 'react'
import { } from 'react-icons/fa'
import { IoIosHeartDislike } from 'react-icons/io'
import { } from 'react-icons/ai'
import { } from 'react-icons/bi'
import { } from 'react-icons/bs'
import { } from 'react-icons/cg'
import { } from 'react-icons/fc'
import { } from 'react-icons/fi'
import Me from './Pages/Me'
import Skills from './Pages/Skills'
import Certificate from './Pages/Certificate'
import Addcertificate from './Pages/Addcertificate'
import Projects from './Pages/Projects'
import Addprojects from './Pages/Addprojects'
import About from './Pages/About'
import { Link,useMatch,useResolvedPath } from 'react-router-dom';
import { Route, Routes } from "react-router-dom"


export default function Container() {
	return (
		<>
			<div className="container">
				<div className="sidebar">
					{/* cover profiles */}
					<div className="image_cover">
						<img src="certificates/new.png" alt="my profiles" />
					</div>
					{/* navigations */}
					<div className="navbar">
						<nav>
							<ul>
								<Link to="/"><li><a href="#"><span>Me</span></a></li></Link>
								<Myconnection to="skills"><li> <a href="#">MY SKILLS</a></li></Myconnection>
								<Myconnection to="certificate"><li> <a href="#">MY CERTIFICATE</a></li></Myconnection>
								<Myconnection to="projects"><li> <a href="#">MY PROJECTS</a></li></Myconnection>
								<Myconnection to="about"><li><a href="#">ABOUT ME</a></li></Myconnection>
								
							</ul>
						</nav>
					</div>
				</div>
				{/* ather pages */}
         <Routes>
          <Route path="/" element={<Me />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/certificate" element={<Certificate/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
        		
			</div>
		</>
	) 
}




function Myconnection({ to,children,...props }) {
	const navigationPath = useResolvedPath(to)
	const isActive = useMatch({ path: navigationPath.pathname, end: true })

return (
	<li className={isActive ? "active" : ""}>
		<Link to={to}{...props}>
			{children}
		</Link>
	</li>
)
}
