import React from 'react'
// import LplLogo from '../assets/img-lpl-logo.png'
import "../scss/styles.scss"

//prettier-ignore
function Branding() {
  return (
    <div className='branding'>
      <div className='branding_head'>
        <div className='branding_head--logo'>
          <img src="/img-lpl-logo.png" alt="LarParLife" className="branding_head--logo-img"/>
          {/* <img src="/img-lpl-logo.png" alt="site banner" style={{ maxWidth: '100%' }} /> */}
        </div>
        <div className='header_trademark'>
          <span>&trade;</span>
        </div>
      </div>
    </div>
  )
}

export default Branding
