import React from 'react'
import HeroSection from '../components/HeroSection'

const About = () => {
  const data={
    name:"About"
  }
  return (
    <div>
        <HeroSection mydata={data}/>
    </div>
  )
}

export default About
