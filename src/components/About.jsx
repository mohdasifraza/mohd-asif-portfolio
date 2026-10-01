import React from 'react'
import { motion } from 'framer-motion'
import { assets } from '../assets/assets'
import { aboutInfo } from '../assets/assets';

const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            id='about'
            className='py-20 bg-dark-200'
        >
            <div className='container mx-0 px-6'>
                {/*About Content heading */}
                <h2 className='text-3xl text-center font-bold mb-4'>About
                    <span className='text-purple-500'>Me</span>
                </h2>
                <p className='text-center text-gray-400 max-w-2xl mx-auto mb-16'>Get to know more about my background and passion</p>


                {/* Image + my journey */}
                <div className='flex flex-col md:flex-row items-center  gap-12'>

                    {/* Image */}
                    <div className='md:w-1/2 rounded-2xl overflow-hidden'>
                        <motion.img
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9, ease: 'easeOut' }}
                            viewport={{ once: false, amount: 0.2 }}
                            className='w-full h-full object-cover'
                            src={assets.profileImg}
                            alt='Profile'
                        />
                    </div>

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, ease: 'easeOut' }}
                        viewport={{ once: false, amount: 0.2 }}
                        className='md:w-1/2'
                    >
                        <div className='rounded-2xl p-8'>
                            <h3 className='text-2xl font-semibold mb-6'>My Journey</h3>
                            <p className='text-gray-400 mb-6'>
                                I am a passionate Full Stack Developer with a strong interest in building modern, responsive, and user-friendly web applications. I enjoy turning ideas into functional digital experiences using technologies like React, JavaScript, Node.js, Express, MongoDB, and Laravel. I focus on writing clean, maintainable code and creating applications that are both visually appealing and efficient.
                            </p>
                            <p className='text-gray-400 mb-12'>
                                I am always eager to learn new technologies and improve my development skills through real-world projects. I enjoy solving problems, exploring new tools, and continuously improving my understanding of frontend and backend development. My goal is to grow as a professional developer while creating high-quality web solutions that provide a great user experience.
                            </p>

                            {/* Cards */}

                            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>

                                {
                                    aboutInfo.map((data, index) => (
                                        <div key={index} className='bg-dark-300 p-6 rounded-2xl   transition-transform  duration-300
                                        hover:translate-y-2
                                        cursor-pointer'>

                                            <div
                                            className='text-purple-500 text-4xl'>
                                                <data.icon />
                                            </div>

                                            <h3 className='text-xl font-semibold mb-3'>{data.title}</h3>
                                            <p className='text-gray-400'>{data.description}</p>
                                        

                                        </div>
                                    ))
                                }

                            </div>




                        </div>

                    </motion.div>

                </div>
            </div>

        </motion.div>
    )
}

export default About