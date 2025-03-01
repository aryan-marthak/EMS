import React, { useState } from 'react'
import { setLocalStorage } from '../../utils/localStorage'

const Header = ({changeUser, data}) => {
    const username = data ? data.firstName : 'Admin'
    
    const logOutUser = () => {
        localStorage.removeItem('loggedInUser')
        changeUser(null)
    }    

    return (
        <div className='flex items-end justify-between'>
            <h1 className='text-2xl font-medium'>Hello <br /> 
                <span className='font-semibold text-3xl'>{username} 👋</span>
            </h1>
            <button onClick={logOutUser} className='bg-red-600 text-lg font-medium px-5 py-2 text-white rounded-sm'>
                Log Out
            </button>
        </div>
    )
}

export default Header
