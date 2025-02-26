import React from 'react'

const NewTask = () => {
  return (
    <div className=' flex-shrink-0 h-full p-7 w-[334px] bg-blue-400 rounded-xl'>
                <div className='flex justify-between items-center'>
                    <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>High</h3>
                    <h4 className='text-sm font-semibold'>20 Feb 2024</h4>
                </div>
                <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
                <p className='text-base mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, magni laborum. Incidunt aliquam nobis illum.</p>
                <div className='mt-4'>
                    <button>Accept Task</button>
                </div>
            </div>
  )
}

export default NewTask