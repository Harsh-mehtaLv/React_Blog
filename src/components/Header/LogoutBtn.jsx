import React from 'react'
import {useDispatch} from 'react-redux'
import authService from '../../appwrite/auth_service'
import { logout } from '../../../store/authSlice'

const LogoutBtn = () => {
    const dispatch = useDispatch() // 1
    const logoutHandler = () => { // 2
        authService.logout().then(() => { // appwrite me most of the chize ek promise hoti hai to jisko handle krne k liye hume .then use krna hota hai or catch
            dispatch(logout())
        })
    }
  return (
    // ab classes add kro
    <button className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
    onClick={logoutHandler}
    >Logout</button>
  )
}

export default LogoutBtn