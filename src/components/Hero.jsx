import React from 'react'
import { motion } from 'framer-motion'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
      id='home'
      className='min-h-screen flex items-center pt-30 pb-16 bg-gradient-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a]'
    >
      <div className='container mx-auto px-6 flex flex-col md:flex-row items-center justify-between'>
        {/* Left Side Content */}
        <div className='md:w-1/2 mb-10 md:mb-0'>
          <h3 className='text-4xl md:text-6xl font-bold  mb-4'>Hi, i'm <span className='text-purple-500'>MOHD ASIF</span> </h3>
          <h3 className='text-2xl md:text-4xl font-semibold mb-6 !ml-0 typewriter'>Full Stack Developer</h3>
          {/* <h2 className='text-2xl md:text-4xl font-semibold mb-6 ml-0 typewriter'>F</h2> */}
          <p className='text-lg text-gray-300 mb-8 pt-5'>
            I Create stunning web experiences with modern technologies and innovative design.
          </p>


          <div className='flex space-x-4'>
            <a href='#projects' className='px-6 py-3 bg-purple-500 rounded-lg font-medium hover:bg-purple-700 transition duration-300'>
              View Work
            </a>
            <a href='https://drive.google.com/file/d/11-YWpr9n4yPOnFmHM_jBuzSmvxxX9cnZ/view?usp=drivesdk' className='px-6 py-3 border border-purple-500 rounded-lg font-medium hover:bg-purple-500/20 transition duration-300'>
              Download Resume
            </a>
          </div>



        </div>

        {/* Right Side Image */}
        <div className='md:w-1/2 flex justify-center '>
          <div className='relative w-64 h-64 md:w-80 md:h-80'>
            <div className='absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500  opacity-70'>
              <motion.img
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut' }}
              className='relative rounded-full w-64 h-64 md:w-80 md:h-80 object-cover z-10'
               src={assets.profileImg} alt='Profile' />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}


export default Hero