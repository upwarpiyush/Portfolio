import React from 'react'
import hero from "../assets/hero.jpg"
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div>
      <div className='flex flex-row gap-12 max-w-[80%] mx-auto my-36'>
        {/* //left part */}
        <div className='max-w-md rounded-full'>
          <img src={hero} className='w-full rounded-full' loading='lazy'></img>
        </div>

        {/* //right part */}
        <div className='relative flex flex-col max-w-lg gap-9 mt-8'>
          <div className='flex flex-col'>
            <div className='text-8xl'>Hello</div>
            <div className='text-2xl mt-8 mb-1'>A Bit About Me</div>
            <div className='max-w-sm'>
              I'm a Passionate and dedicated computer science graduate with a strong foundation in programming and problem-solving. Committed to continuous learning and eager to contribute innovative solutions in the field of software development.
            </div>
          </div>
          <div className=' absolute flex flex-row gap-4 -bottom-10 -left-5'>
            <Link to="/resume">
              <button className='w-[140px] h-[140px] bg-yellow-500 rounded-full font-bold text-xl border border-black hover:bg-gray-200 ease-out duration-300' >Resume</button>
            </Link>

            <Link to="/projects">
              <button className='w-[140px] h-[140px] bg-red-500 rounded-full font-bold text-xl border border-black hover:bg-gray-200 ease-out duration-300'>Projects</button>
            </Link>
            
            <Link to="/contact">
              <button className='w-[140px] h-[140px] bg-blue-300 rounded-full font-bold text-xl border border-black hover:bg-gray-200 ease-out duration-300'>Contact</button>
            </Link>

          </div>
        </div>
      </div>

      <Footer/>
    </div>
    
  )
}

export default Landing;