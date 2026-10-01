// import React from 'react'

// const ProjectsCards = ({title, description, image, tech}) => {
//   return (
//     <div className='bg-dark-300 rounded-2xl overflow-hidden hover:-translate-y-2 transition duration-300 cursor-pointer'>

//         <img src={image} alt={title} className='w-full h-60 object-cover' />

//         <div className='p-6'>
//             <h3 className='text-xl font-semibold mb-2'>{title}</h3>
//             <p className='text-gray-400 mb-4'>{description}</p>
//             <div className='flex flex-wrap gap-2 mb-4'>
//                 {tech.map((item, index)=>(
//                     <span key={index} className='bg-dark-400 text-sm rounded-full px-3 py-1'>
//                         {item}
//                     </span>
//                 ))}
//             </div>
//             <div className='flex gap-2'>
//                 <a href="#" className='flex-1 text-center px-4 py-2 bg-purple-500 rounded-lg font-medium hover:bg-purple-700 transition duration-300'>
//                     View Demo
//                 </a>
//                 <a href="#" className='flex-1 text-center px-4 py-2 border border-purple-500  rounded-lg font-medium hover:bg-purple/20 transition duration-300'>
//                     View Code
//                 </a>
//             </div>
//         </div>

//     </div>
//   )
// }

// export default ProjectsCards

import React from 'react'

const ProjectsCards = ({
  title,
  description,
  image,
  tech,
  demo,
  code
}) => {
  return (
    <div className='bg-dark-300 rounded-2xl overflow-hidden hover:-translate-y-2 transition duration-300'>

      {/* Project Image */}
      <img
        src={image}
        alt={title}
        className='w-full h-60 object-cover'
      />

      {/* Project Content */}
      <div className='p-6'>

        {/* Project Title */}
        <h3 className='text-xl font-semibold mb-2'>
          {title}
        </h3>

        {/* Project Description */}
        <p className='text-gray-400 mb-4'>
          {description}
        </p>

        {/* Technologies */}
        <div className='flex flex-wrap gap-2 mb-4'>
          {tech.map((item, index) => (
            <span
              key={index}
              className='bg-dark-400 text-sm rounded-full px-3 py-1'
            >
              {item}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className='flex gap-2'>

          {/* View Demo Button */}
          <a
            href={demo && demo !== '#' ? demo : undefined}
            target={demo && demo !== '#' ? '_blank' : undefined}
            rel={demo && demo !== '#' ? 'noopener noreferrer' : undefined}
            onClick={(e) => {
              if (!demo || demo === '#') {
                e.preventDefault()
              }
            }}
            className='flex-1 text-center px-4 py-2 bg-purple-500 rounded-lg font-medium hover:bg-purple-700 transition duration-300'
          >
            View Demo
          </a>

          {/* View Code Button */}
          <a
            href={code && code !== '#' ? code : undefined}
            target={code && code !== '#' ? '_blank' : undefined}
            rel={code && code !== '#' ? 'noopener noreferrer' : undefined}
            onClick={(e) => {
              if (!code || code === '#') {
                e.preventDefault()
              }
            }}
            className='flex-1 text-center px-4 py-2 border border-purple-500 rounded-lg font-medium hover:bg-purple/20 transition duration-300'
          >
            View Code
          </a>

        </div>

      </div>
    </div>
  )
}

export default ProjectsCards