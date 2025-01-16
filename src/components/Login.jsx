import React, { useState } from 'react'
import Textinput from './Textinput'
import { Link } from 'react-router-dom'
import TextInputSignUp from './TextInputSignUp';

const Login = () => {
  const [login, setLogin] = useState(false);

  const handleClick = () => {
    setLogin(!login);
  }

  return (
    <div>
      {login &&   
      <div className='flex justify-center pt-10'>
        <div className="card bg-base-100 w-96 shadow-xl">
          <div className="card-body">
            <div className='flex justify-center'>
              <h2 className="card-title text-3xl">Log In</h2>  
            </div>
            <Textinput />    
            <p className='text-center pt-2'>Don't have an account?</p>
            <Link onClick={handleClick} className='mt-[-5px] text-center text-lg font-semibold text-blue-500 hover:text-blue-600'>Sign Up now!</Link>
          </div>
        </div>
      </div>
      }
      {!login &&   
      <div className='flex justify-center pt-10'>
        <div className="card bg-base-100 w-96 shadow-xl">
          <div className="card-body">
            <div className='flex justify-center'>
              <h2 className="card-title text-3xl">Sign Up</h2>  
            </div>
            <TextInputSignUp />    
            <p className='text-center pt-2'>Already have an account?</p>
            <Link onClick={handleClick} className='mt-[-5px] text-center text-lg font-semibold text-blue-500 hover:text-blue-600'>Log In</Link>
          </div>
        </div>
      </div>
      }
  
    </div>
  )
}

export default Login
