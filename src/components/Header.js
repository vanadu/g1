import React from 'react'
import Branding from './Branding'
import NavBar from './NavBar'
import "../scss/styles.scss"


export default function Header() {
  return (
    <>
      <div className='header'>
        <div className='header_container'>
          <div className='header_content'>
            <Branding />
            <NavBar />
          </div>
        </div>
      </div>
    </>
  )
}

