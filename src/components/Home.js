import React from 'react'
import mohit from '../assets/mohit.jpg'
import {MdKeyboardArrowRight} from 'react-icons/md'

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black  to-gray-800 via-black'>
        <div className='max-w-screen-lg mx-auto flex-col flex items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white'>
                    I'm a Full Stack Developer
                </h2>
                <p className='text-gray-500 py-4 max-w-md'>
                    I have 5 year of experience building and designing software.
                    Currently, I love to work on web application using technologies like React, Tailwind and Next JS.
                </p>
                <div>
                    <button className='text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer group'>
                        Portfolio
                        <span className='group-hover:rotate-90 duration-300'>
                            <MdKeyboardArrowRight size={25} className='ml-1' />
                        </span>
                    </button>
                </div>
            </div>
            <div>
                <img src={mohit} alt="my profile" className='rounded-2xl mx-auto w-2/3 md:w-full ' />
            </div>
        </div>
    </div>
  )
}

export default Home
