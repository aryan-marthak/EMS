import React from 'react'

const AcceptTask = ({data}) => {
    return (
        <div className=' flex-shrink-0 h-full p-7 w-[334px] bg-red-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>{data.category}</h3>
                <h4 className='text-sm font-semibold'>{data.date}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{data.title}</h2>
            <p className='text-base mt-2'>{data.description}</p>
            <div className='flex justify-between mt-4'>
                <button className='bg-green-500 py-1 px-2 text-sm'>Mark as Completed</button>
                <button className='bg-red-500 py-1 px-2 text-sm'>Mark as Failed</button>
            </div>
        </div>
    )
}

export default AcceptTask