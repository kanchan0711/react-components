import React from 'react'
import "./App.css"
import img1 from "./assets/img1.png"
import background from "./assets/background.jpg"
import intelLogo from "./assets/intelLogo.avif"
import amazoneLogo from "./assets/amazonLogo.avif"
import behanceLogo from "./assets/behanceLogo.png"
import facebookLogo from "./assets/facebookLogo.png"
import slackLogo from "./assets/slackLogo.png"
import ibmLogo from "./assets/ibmLogo.avif"
// import hexagone from "./assets/hexagone.avif"

const FirstPage = () => {
  return (
    
     
    <div className='Main'>
      <div className='background' style={{backgroundImage:`url(${background})`, backgroundSize:`cover`,backgroundRepeat:`no-repeat`}}>
       {/* <img src={background}/> */}
      <div className='top'>
        <div className='image'>
          <img src={img1}/>
        </div>
        <div className='
        '>
          <div className='top-content'>
            <div className='must-content'>
              <h2>100%</h2>
              <p>sans technology</p>
              </div>
              <div className='must-content'>
               <h2>100,000</h2>
              <p>Endpoint per tenant</p>
              </div>
              <div className='must-content'> 
              <h2>100+</h2>
              <p>Threat intel sources</p>
              </div>
            </div>
            <div className='bottom-content'>
              <div className='must-content'>
              <h2>124</h2>
              <p>Action project</p>
                
              </div>
              <div className='must-content'>
              <h2>1,400+</h2>
              <p>Buit in queries</p>
              </div>
              <div className='must-content'>
              <h2>200+</h2>
              <p>Costomer</p>
              </div>
            </div>
          </div>
        </div>



        <div className='logo'>
          <div>
          <img className='logo-svg' src={intelLogo}/>
          </div>
          <div>
          <img className='logo-svg' src={amazoneLogo}/>
          </div>
          <div>
          <img  className='logo-svg'src={behanceLogo}/>
          </div>
          <div>
          <img className='logo-svg' src={facebookLogo}/>
          </div>
          <div>
          <img className='logo-svg' src={slackLogo}/>
          </div>
          <div>
          <img className='logo-svg' src={ibmLogo}/>
          </div>
         
        </div>
      </div>
      </div>
    
  )
}

export default FirstPage
