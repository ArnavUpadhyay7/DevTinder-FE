import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import {BASE_URL} from '../utils/constants';
import { removeUser } from '../utils/userSlice';

const Navbar = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post(`${BASE_URL}/logout`, {}, {
        withCredentials: true
      });
      dispatch(removeUser());
      return navigate("/login");
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className="navbar bg-base-200 px-6 py-2">
  <div className="flex-1">
    <img className='size-8' src="https://cdn-icons-png.flaticon.com/128/2504/2504943.png" alt="Logo" />
    <Link to="/" className="btn btn-ghost text-xl">DevTinder</Link>
  </div>
    
  {user && <div className="flex-none gap-2">
    <p className='font-semibold'>Welcome, {user.firstName}</p>
    <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img
              alt="user photo"
              src={user.photoURL} />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
          <li>
            <Link to="/profile" className="justify-between py-2">
              Profile
              <span className="badge">New</span>
            </Link>
          </li>
          <li><Link to="/connections" className='py-2'>Connections</Link></li>
          <li><Link to="/requests" className='py-2'>Requests</Link></li>
          <li><a onClick={handleLogout} className='py-2'>Logout</a></li>
        </ul>
      </div>
  </div>}
</div>
  )
}

export default Navbar
