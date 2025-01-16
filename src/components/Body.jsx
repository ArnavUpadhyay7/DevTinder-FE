import React, { useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet, useNavigate } from 'react-router-dom'
import axios from 'axios'
import {BASE_URL} from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../utils/userSlice'

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((store) => store.user);
  
  const fetchUser = async () => {
    if(userData) return;
    try {
      const res = await axios.get(`${BASE_URL}/profile/view`, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        }
      });
      dispatch(addUser(res.data));
    } catch (error) {
      if(error.status === 401){
        navigate("/login")
      }
      console.error(error); 
    }
  }
  useEffect(()=>{
    fetchUser();
  }, []);

  return (
    <div className='min-h-screen flex flex-col'>
      <Navbar />
      <div className='flex-grow'>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Body
