import React, { useState } from 'react'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../utils/constants';
import { toast } from 'sonner';

const Textinput = () => {
    const [emailID, setEmailID] = useState();
    const [password, setPassword] = useState();
    const [errorMessage, setErrorMessage] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const navigateToHome = () => {
      navigate("/")
    } 

    const handleLogIn = async (e) => {
      e.preventDefault();
      try {
        const res = await axios.post(`${BASE_URL}/logIn`, {emailID, password}, {
          withCredentials:true,
          headers: {
              'Content-Type': 'application/json',
          }
        });
        toast.success("Logged In Successfully!")
        dispatch(addUser(res.data));
        navigateToHome();
      } catch (error) {
        setErrorMessage("Invalid credentials");        
      }
    } 

  return (
    <div className='flex flex-col gap-3 py-3'>
      <label className="input input-bordered flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70">
          <path
            d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
          <path
            d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
        </svg>
        <input type="text" className="grow" placeholder="Email ID" value={emailID} onChange={(e)=>{setEmailID(e.target.value)}}/>
      </label>

      <label className="input input-bordered flex items-center gap-2">
        <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      fillRule="evenodd"
      d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
      clipRule="evenodd" />
        </svg>
        <input type="password" placeholder='Password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
      </label>
      {errorMessage && 
        <p className='text-red-500 text-center font-semibold'>ERROR : {errorMessage}</p>
      }
      {/* <div className="card-actions justify-center">
        <button onClick={handleLogIn} className="btn btn-primary">Submit</button>
      </div> */}
      <div className='flex justify-center rounded-lg bg-blue-600 hover:bg-blue-800 text-white font-semibold'>
        <button onClick={handleLogIn} className='text-base px-6 py-2'> Submit </button>
      </div>
    </div>
  )
}

export default Textinput
