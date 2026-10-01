import React from 'react'

const Footer = () => {
  return (
    <div className='bg-dark-300 py-8'>
        <div className='container mx-auto px-6 text-center'>
            <p className='text-center text-gray-400'>
                &copy; {new Date().getFullYear()} Created By The Mohd Asif. All Rights Reserved.
            </p>
        </div>
    </div>
  )
}

export default Footer