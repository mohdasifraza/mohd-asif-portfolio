import React from 'react'
import { motion } from 'framer-motion'
import {
  FaDribbble,
  FaEnvelope,
  FaGithub,
  FaMapMarkerAlt,
  FaPhone,
  FaLinkedin,
  FaTwitter
} from 'react-icons/fa'
// import { contactInfo } from '../assets/assets'

const Contacts = () => {
  return (
     <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease:'easeOut' }}
        viewport={{ once: false, amount: 0.2 }}
        id='contact'
        className='py-20 bg-dark-200'
        >

        <div className='container mx-auto px-6'>
            <h2 className='text-3xl font-bold text-center mb-4'>
                Get in
                <span className='text-purple-500'>Touch</span>
            </h2>
            <p className='text-center text-gray-400 max-w-2xl mx-auto mb-16'>Have a project in mind or want to collaborate? Let's talk!</p>


            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto'>
                {/* Contact Form */}
                <div>
                    <form className='space-y-6'>
                        <div>
                            <label htmlForn="name" className='block mb-2  text-gray-300'>YourName</label>
                           <input 
                           className='w-full px-4 py-3 rounded-lg bg-dark-300 outline-none'
                           type="text" 
                           placeholder='Enter your name'  />
                        </div>


                        <div>
                            <label htmlForn="email" className='block mb-2  text-gray-300'>Email Address</label>
                           <input 
                           className='w-full px-4 py-3 rounded-lg bg-dark-300 outline-none'
                           type="email" 
                           placeholder='Enter your email'  />
                        </div>

                        <div>
                            <label htmlForn="message" className='block mb-2  text-gray-300'>Your Message</label>
                           <textarea 
                           className='w-full h-40 px-4 py-3 rounded-lg bg-dark-300
                           border border-dark-400
                            outline-none'
                           placeholder='Enter your message' 
                           type="text" />
                        </div>

                        <button type='submit'
                         className='w-full px-6 py-3 bg-purple-500 font-medium rounded-lg hover:bg-purple-700 transition duration-300'>Send Message</button>

                    </form>
                </div>

                {/* Contact Information */}
                <div className='space-y-8'>
                    <div className='flex items-start'>
                        <div className='text-purple-500 text-2xl mr-4'>
                            <FaMapMarkerAlt />
                        </div>
                        <div>
                            <h3 className='text-lg font-semibold mb-2'>Location</h3>
                            <p className='text-gray-400'>New Delhi, Okhla abul Faazal</p>
                        </div>
                    </div>

                    <div className='flex items-start'>
                        <div className='text-purple-500 text-2xl mr-4'>
                            <FaEnvelope />
                        </div>
                        <div>
                            <h3 className='text-lg font-semibold mb-2'>Email</h3>
                            <p className='text-gray-400'>rmohdasif541@gmail.com</p>
                        </div>
                    </div>

                    <div className='flex items-start'>
                        <div className='text-purple-500 text-2xl mr-4'>
                            <FaPhone />
                        </div>
                        <div>
                            <h3 className='text-lg font-semibold mb-2'>Phone</h3>
                            <p className='text-gray-400'>+91 91517 85069</p>
                        </div>
                    </div>

                    <div className='pt-4'>
                        <h3 className='text=lg font-semibold mb-4'>Follow Me</h3>
                        <div className='flex space-x-4'>
                            <a href="https://github.com/mohdasifraza" className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-purple-500 hover:bg-purple-500 hover:text-white transition duration-300'>
                                <FaGithub />
                            </a>

                             <a href="linkedin.com/in/asifraza01" className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition duration-300'>
                                <FaLinkedin />
                            </a>

                             <a href="#" className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-blue-400 hover:bg-blue-500 hover:text-white transition duration-300'>
                                <FaTwitter />
                            </a>

                             <a href="#" className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-pink-500 hover:bg-pink-500 hover:text-white transition duration-300'>
                                <FaDribbble />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </motion.div>
  )
}

export default Contacts