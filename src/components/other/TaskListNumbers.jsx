import React from 'react'

const TaskListNumbers = () => {
    return (
        <div className='flex mt-10 justify-between gap-10 '>
            <div className='py-6 px-9 rounded-xl bg-red-400 w-[30%]'>
                <h2 className=' text-4xl font-bold'>0</h2>
                <h3 className='text-2xl mt-1 font-semibold'>New Task</h3>
            </div>
            <div className='py-6 px-9 rounded-xl bg-blue-400 w-[30%]'>
                <h2 className=' text-4xl font-bold'>0</h2>
                <h3 className='text-2xl mt-1 font-semibold'>Completed Task</h3>
            </div>
            <div className='py-6 px-9 rounded-xl bg-green-400 w-[30%]'>
                <h2 className=' text-4xl font-bold'>0</h2>
                <h3 className='text-2xl mt-1 font-semibold'>Accepted Task</h3>
            </div>
            <div className='py-6 px-9 rounded-xl bg-yellow-400 w-[30%]'>
                <h2 className=' text-4xl font-bold'>0</h2>
                <h3 className='text-2xl mt-1 font-semibold'>Failed Task</h3>
            </div>
        </div>
    )
}

export default TaskListNumbers