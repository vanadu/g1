import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
// import LplLogo from '../assets/img-lpl-logo.png'
import "../scss/styles.scss"

//prettier-ignore
function Branding() {

  const data = useStaticQuery(graphql`
    {
      file(relativePath: {eq: "img-lpl-logo.png"}) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  console.log(data);

  return (
    <div className='branding'>
      <div className='branding_head'>
        <div className='branding_head--logo'>
          <img src="/img-lpl-logo.png" alt="LarParLife" className="branding_head--logo-img"/>
          {/* <img src="/img-lpl-logo.png" alt="site banner" style={{ maxWidth: '100%' }} /> */}
          {/* <Img fluid={data.file.childImageSharp.fluid} /> */}
        </div>
        <div className='header_trademark'>
          <span>&trade;</span>
        </div>
      </div>
    </div>
  )
}

export default Branding

