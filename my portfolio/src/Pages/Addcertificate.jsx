import React from 'react'
import { AiFillSafetyCertificate } from 'react-icons/ai'
 import { FaArrowCircleLeft,FaArrowCircleRight,FaLongArrowAltRight } from 'react-icons/fa'
import {BiDownArrow} from 'react-icons/bi'


export default function Addcertificate() {
  return (
	<>
	<div className="header">
	  <h2><skill>MY CERTIFICATE</skill></h2>

	</div>
	<div className="certficate">
	  <div className="mycert">
		<img src="certificates/php.jpg" alt="" />
		<p><AiFillSafetyCertificate />PHP Certificate</p>
	  </div>
  
	  <div className="mycert">
		<img src="certificates/C.jpg" alt="" />
		<p><AiFillSafetyCertificate />C Certificate</p>
	  </div>
	  <FaArrowCircleLeft className='next back'/>
		  </div>
		  <BiDownArrow className='downicon  downicon2'/>
	  </>
  )
}
