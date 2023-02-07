import React from 'react'

const Footer = () => {
  return (
    <div style={{backgroundColor:"rgb(33, 37, 41)", marginTop:"141px"}}>
        <div style={{display:"flex", flexDirection:"row",justifyContent:"center"}}>
                <a href="https://www.facebook.com/lautaroxs/" target="_blank"><img src="../../src/assets/icono_facebook.svg"
                        alt="Link a Facebook"/></a>
                <a href="https://www.instagram.com/lautaro__95/?hl=es" target="_blank"><img
                        src="../../src/assets/icono_instagram.svg" alt="Link a Instagram"/></a>
                <a href="https://twitter.com/fordiger" target="_blank"><img src="../../src/assets/icono_twitter.svg"
                        alt="Link a Twitter"/></a>
        </div>
        <span style={{color:"white"}}>Página para uso no comercial.</span>
    </div>
  )
}

export default Footer