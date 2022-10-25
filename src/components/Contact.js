import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='w-full h-screen bg-gradient-to-b from-black to-gray-800 p-1 text-white'>
      <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
        <div className='pb-auto'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
            <p className='py-6'>Submit the form below to get in touch with me</p>
        </div>
        <div className='flex justify-center items-center'>
            <form action="https://getform.io/f/b22b1de1-6e1f-46db-9431-3d327708ff59" className='flex flex-col w-full md:w-1/2' method='POST'>
                <input type="text" name='name' placeholder='Enter Your Name' className='p-2 bg-transparent border-2 text-white focus:outline-none rounded-md' />
                <input type="text" name='name' placeholder='Enter Your Email' className='p-2 bg-transparent border-2 text-white focus:outline-none rounded-md my-4' />
                <textarea placeholder='Enter your Message' name="message" rows="10" className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' ></textarea>
                <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 flex items-center mx-auto rounded-md hover:scale-110 duration-300'>Let's Talk</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
