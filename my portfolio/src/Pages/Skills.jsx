import React from 'react'
import { FaCircle, FaCss3, FaFigma, FaNetworkWired, FaPhotoVideo, FaPhp, FaPython, FaReact, FaVideo } from 'react-icons/fa'
import {  } from 'react-icons/ai'
import {  } from 'react-icons/fc'
import { CgLaptop, CgWebsite } from 'react-icons/cg'
import { } from 'react-icons/cg'
import { BsBootstrap, BsCircle, BsFiletypeSql, BsHddNetwork, BsLaptop, BsPc, BsPcDisplayHorizontal, BsPciCard, BsPCircle, BsPCircleFill } from 'react-icons/bs'

import { BsFiletypeHtml } from 'react-icons/bs'
 import {BiDownArrow} from 'react-icons/bi'
import { IoIosLaptop, IoLogoHtml5, IoLogoJavascript, IoMdPhotos } from 'react-icons/io'

export default function Skills() {
  return (
    <>
            <div className="middle">

      <div className="skills">
          <h2><skill>MY SKILLS</skill></h2>
      </div>
      <div className="myskills">
        <h2><skill>WEB DEVELOPMENT</skill></h2>
        <ol>
           <li><IoLogoHtml5 className='icons'/> HTML</li>
          <li><FaCss3  className='icons'/> CSS</li>
          <li><BsBootstrap  className='icons'/> BOOSTRAP</li>
          <li><BsCircle  className='icons'/> TAILWIND CSS</li>
          <li><IoLogoJavascript  className='icons'/>JAVASCRIPT</li>
          <li><BsCircle  className='icons'/> JQUERY</li>
          <li><FaReact  className='icons'/> REACT JS</li>
          <li><FaPhp  className='icons'/> PHP</li>
          <li><BsCircle  className='icons'/> MYSQL</li>
          <li><BsFiletypeSql  className='icons'/> SQL</li>
        </ol>
      </div>
      <div className="myskills">
        <h2><skill>PROGRAMMING</skill></h2>
        <ol>
           <li><BsCircle className='icons'/> C</li>
          <li><BsCircle  className='icons'/> C++</li>
          <li><FaPython  className='icons'/> PYTHON</li>
         </ol>
        <h2><skill>DESIGN</skill></h2>
        <ol>
          <li><FaFigma className='icons' />FIGMA</li>
          <li><CgWebsite className='icons' />ADOBE XD</li>
          <li><IoMdPhotos className='icons'/> PHOTOSHOP</li>
          <li><FaVideo  className='icons'/>PRIMEAR PRO</li>
        </ol>
      </div>
      <div className="myskills newskill">
        <h2><skill>ATHER</skill></h2>
        <ol>
           <li><BsLaptop className='icons new_icon'/>PC HEARDWARE MENTAINANCE</li>
           <li><BsLaptop className='icons new_icon'/>PC SOFTWARE MENTAINANCEL</li>
           <li><BsHddNetwork className='icons new_icon'/>NETWARKING (LAN INSTALLATION)</li>
          
        </ol>
      </div>
         </div>
    </>

  )
}
