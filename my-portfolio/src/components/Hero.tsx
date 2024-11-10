import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div id = "hero" className='min-h-screen bg-no-repeat bg-[url(/mypic.jpg)] bg-left lg:bg-[%] bg-cover bg-' 
    style={{ backgroundSize:"46%",
      backgroundPosition:"left -20px top 120px",
    }}
    >
      < Navbar />
      <div className='container grid lg:grid-cols-2 h-[calc(70vh-40px)] pt-16'>
       <div className='hidden lg:block'></div>
       <div className='text-[80px] sm:text-[100px] font-italic leading-tight flex justify-centre items-centre padding-[100px] '>
        <div>
          <p data-aos="zoom-in-up">I'm</p>
          <p data-aos="zoom-in-up">Zameer</p>
          <p data-aos="zoom-in-up">Solangi</p>
        </div>
       </div>
      </div>
    </div>
  )
}

export default Hero
