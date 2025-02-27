import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

    const authData = useContext(AuthContext)

    return (
        <div className='bg-[#1c1c1c] rounded mt-5 p-5 overflow-auto h-48'>
            
            <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded'>
                    <h2>{elem.firstName}</h2>
                    <h3 className='w-1/5 bg-red-600'>Task</h3>
                    <h5 className='w-1/5 bg-red-600'>Status</h5>
                    <h5 className='w-1/5 bg-red-600'>Status</h5>
                </div>

            {authData.employees.map(function (elem) {
                return <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded'>
                    <h2>{elem.firstName}</h2>
                    <h3 className='w-1/5 bg-red-600'>Task</h3>
                    <h5 className='w-1/5 bg-red-600'>Status</h5>
                    <h5 className='w-1/5 bg-red-600'>Status</h5>
                </div>
            })}
        </div>
    )
}

export default AllTask