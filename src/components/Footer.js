import React from 'react'

const Footer = () => {
  return (
    <div className='border-t border-gray-400 min-h-[175px] max-w-[95%]  mx-auto flex flex-row justify-between pt-8 px-5'>
        <div>
            <div className='font-semibold text-lg'>Phone</div>
            <div>+91 7666033092</div>
        </div>
        <div>
            <div className='font-semibold text-lg'>Email</div>
            <div>piyushupwar@gmail.com</div>
        </div>
        <div>
            <div className='font-semibold text-lg'>Follow Me</div>
            <img/>
            <img/>
        </div>
        <div className='text-sm'>
            © 2024 By Piyush Upwar
        </div>
    </div>
  )
}

export default Footer