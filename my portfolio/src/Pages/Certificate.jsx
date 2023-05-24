import React from 'react'
import { AiFillSafetyCertificate } from 'react-icons/ai'
import {  } from 'react-icons/bi'

import { FaArrowCircleRight, FaLongArrowAltRight} from 'react-icons/fa'
export default function Certificate() {
  return (
    <>
      <div className="middle">

     
      <div className="header">
        <h2><skill>MY CERTIFICATE</skill></h2>

      </div>
      <div className="certficate">
        <div className="mycert">
          <img src="certificates/html.png" alt="" />
          <p><AiFillSafetyCertificate />HTML Certificate</p>
        </div>

        <div className="mycert">
          <img src="certificates/css.png" alt="" />
          <p><AiFillSafetyCertificate />CSS Certificate</p>
        </div>

        <div className="mycert">
          <img src="certificates/html_maketer.png" alt="" />
          <p><AiFillSafetyCertificate />HTML MARKETER Certificate</p>
        </div>

        <div className="mycert">
          <img src="certificates/webdev.jpg" alt="" />
          <p><AiFillSafetyCertificate />WEB DEVELOPMENT FOUNDAMENTAL Certificate</p>
        </div>
         <FaArrowCircleRight className='next'/>
        </div>
        
        </div>
    </>
  )
}
