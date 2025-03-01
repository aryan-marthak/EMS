import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

    const [userData, setUserData] = useContext(AuthContext)

    return (
        <div className='bg-[#1c1c1c] rounded mt-5 p-5'>

            <div className='text-center bg-red-400 mb-2 py-2 px-4 flex justify-between rounded'>
                <h2 className='text-lg font-bold w-1/5'>Employee Name</h2>
                <h3 className='text-lg font-bold w-1/5'>New Task</h3>
                <h5 className='text-lg font-bold w-1/5'>Active Task</h5>
                <h5 className='text-lg font-bold w-1/5'>Completed</h5>
                <h5 className='text-lg font-bold w-1/5'>Failed</h5>
            </div>

            <div className=''>
                {userData.map(function (elem, idx) {
                    return <div key={idx} className='border-emerald-500 border-2 mb-2 py-2 px-4 flex justify-between rounded'>
                        <h2 key={idx} className='text-lg font-normal w-1/5 text-center'>{elem.firstName}</h2>
                        <h3 key={idx} className='text-lg font-normal w-1/5 text-center text-blue-400'>{elem.taskCount.newTask}</h3>
                        <h5 key={idx} className='text-lg font-normal w-1/5 text-center text-yellow-400'>{elem.taskCount.active}</h5>
                        <h5 key={idx} className='text-lg font-normal w-1/5 text-center text-white'>{elem.taskCount.completed}</h5>
                        <h5 key={idx} className='text-lg font-normal w-1/5 text-center text-red-600'>{elem.taskCount.failed}</h5>
                    </div>
                })}
            </div>
        </div>
    )
}

export default AllTask