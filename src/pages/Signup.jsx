import React from 'react'
// isme hum sirf ek component import krayenge that's it
import { Signup as SignupComponent } from '../components'
// SignupComponent is easy to read and understand

const Signup = () => {
  return (
    <div className='py-8'>
        <SignupComponent />
    </div>
  )
}

export default Signup