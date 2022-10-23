import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className='text-xl mt-20'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id earum cumque tempora placeat ut velit, saepe beatae impedit culpa maxime ea consectetur sequi, enim illum voluptatibus doloribus. Nihil molestiae mollitia, maiores illo veniam voluptates delectus quam fugit tempora perferendis, consequuntur sed sequi culpa corporis error ad quia quod, voluptatum placeat?</p>
            <br />
            <p className='text-xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam, suscipit? Facilis praesentium numquam voluptatem error magnam perferendis aut, quae aspernatur magni aliquam cum quaerat molestias excepturi exercitationem. Corrupti labore laborum, explicabo repellendus, voluptate alias minus quos incidunt autem, nisi vero?</p>
        </div>
    </div>
  )
}

export default About
