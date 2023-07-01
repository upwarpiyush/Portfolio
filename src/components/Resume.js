import React from 'react'
import Footer from './Footer'

const Resume = () => {
  return (
    <div>
      <div className='max-w-[78%] mx-auto my-32'>
        <div className='text-5xl font-semibold'>Resume</div>
        <div className='flex flex-row mt-24 gap-[550px]'>
          <div>Work Experience</div>
          <div>Fresher</div>
        </div>
        <div className='flex flex-row mt-24 gap-[450px]'>
          <div>Education</div>
          <div className='flex flex-col gap-5'>
            <div className='flex flex-row gap-5'>
              <div>2020-2024</div>
              <div>B-Tech (Artificial Intelligence And Data Science) </div>
            </div>
            <div className='flex flex-row gap-5'>
              <div>2020</div>
              <div>HSC </div>
            </div>
            <div className='flex flex-row gap-5'>
              <div>2018</div>
              <div>SSC </div>
            </div>
          </div>
        </div>
        <div className='flex flex-row mt-24'>
          <div>Skills & Expertise</div>
          <div>
            Skilled in C++ programming with expertise in data structures, algorithms, and object-oriented design. Proficient in developing efficient and reliable code to solve complex problems and deliver high-quality software solutions.
          </div>
        </div>
      </div>
      <Footer/>
    </div>

  )
}

export default Resume