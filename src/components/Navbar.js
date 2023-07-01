import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="flex flex-row p-8 justify-between max-w-[95%] mx-auto">
        <div className="flex flex-row justify-center items-center gap-3">
            <Link to='/'>
            <button>
                <div className="flex flex-row justify-center items-center gap-3">
                <div className="bg-yellow-500 rounded-full w-6 h-6"></div>
                <div className="text-2xl font-semibold">Piyush Upwar</div>
                </div>
            </button>
            </Link>
            <div className="mt-2">Software Developer</div>
        </div>
        <div className="flex flex-row">
          <Link to = '/resume'>
            <button className="px-4">Resume</button>
          </Link>
            
          <Link to = '/projects'>
            <button className="border-x border-gray-500 px-4">Projects</button>
          </Link>
          
          <Link to = '/contact'>
          <button className="px-4">Contact</button>
          </Link>
            
        </div>
    </div>
  )
}

export default Navbar