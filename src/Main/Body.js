import React from 'react'
import './body.css'
import About from '../Component/Body/About'
import AboutDT from '../Component/Body/AboutDT'
import Contact from '../Component/Body/Contact'
import Expriance from '../Component/Body/Expriance'
import Portfolio from '../Component/Body/Portfolio'
import Service from '../Component/Body/Service'
function Body({e}) {
  return (
    <div style={{backgroundColor: "aliceblue"}}>
      
      <About e={e}/>
      <AboutDT e={e}/>
      <Expriance e={e}/>
      <Portfolio/>
      <Service e={e}/>
      <Contact/>
    </div>
  )
}

export default Body
