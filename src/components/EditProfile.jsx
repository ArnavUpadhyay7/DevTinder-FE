import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import {BASE_URL} from '../utils/constants';
import { addUser } from '../utils/userSlice';
import ProfileCard from './ProfileCard';
import { toast } from 'sonner';

const EditProfile = () => {
    const user = useSelector((store)=>store.user);
    
    const dispatch = useDispatch();

    const [firstName, setFirstName] = useState(user?.firstName); 
    const [lastName, setLastName] = useState(user?.lastName);
    const [photoURL, setPhotoURL] = useState(user?.photoURL);
    const [about, setAbout] = useState(user?.about);
    const [gender, setGender] = useState(user?.gender);
    const [age, setAge] = useState(user?.age);

    useEffect(() => {
      if (user) {
          setFirstName(user.firstName || '');
          setLastName(user.lastName || '');
          setPhotoURL(user.photoURL || '');
          setAbout(user.about || '');
          setGender(user.gender || '');
          setAge(user.age || '');
      }
  }, [user]);


    const saveProfile = async () => {
        try {
          const res = await axios.patch(`${BASE_URL}/profile/edit`, 
            {firstName, lastName, photoURL, about, gender, age},
            {withCredentials: true}
          )
          dispatch(addUser(res?.data));
          toast.success("Profile Updated Successfully!");
        } catch (error) {
            console.error(error);
        }
    }

  if(!user) return null;

  return (
    <>
    <div className='flex gap-10'>
      <div className='flex justify-center pt-6 mb-24'>
        <div className="card bg-base-200 w-96 shadow-xl">
          <div className="card-body">
            <div className='flex justify-center'>
              <h2 className="card-title text-3xl">Update Profile</h2>  
            </div>
      <div className='flex flex-col gap-1 py-2'>
      <div>
        <div className='label'>
          <span className='text-base'>First Name : </span>
        </div>
        <label className="input input-bordered flex items-center gap-2">
          <input type="text" className="grow" placeholder={user && user.firstName || "Enter Your First Name..."} value={firstName} onChange={(e)=>{setFirstName(e.target.value)}}/>
        </label>
      </div>

      <div>
        <div className='label'>
          <span className='text-base'>Last Name : </span>
          </div>
        <label className="input input-bordered flex items-center gap-2">
          <input type="text" className="grow" placeholder={user && user.lastName || "Enter Your Last Name..."} value={lastName} onChange={(e)=>{setLastName(e.target.value)}}/>
        </label>
      </div>

      <div>
          <div className='label'>
              <span className='text-base'>Profile Picture (URL) : </span>
          </div>
          <label className="input input-bordered flex items-center gap-2">
              <input type="text" className="grow" placeholder={user && user.photoURL} onChange={(e)=>{setPhotoURL(e.target.value)}}/>
          </label>
      </div>

      <div>
        <div className='label'>
          <span className='text-base'>About : </span>
        </div>
        <label className="input input-bordered flex items-center gap-2">
          <input type="text" className="grow" placeholder={user && user.about} onChange={(e)=>{setAbout(e.target.value)}}/>
        </label>
      </div>

      <div>
        <div className='label'>
          <span className='text-base'>Gender : </span>
        </div>
        <label className="input input-bordered flex items-center gap-2">
          <input type="text" className="grow" placeholder={user && user.gender || "Enter Your Gender here..."} value={gender} onChange={(e)=>{setGender(e.target.value)}}/>
        </label>
      </div>

      <div>
        <div className='label'>
          <span className='text-base'>Age : </span>
        </div>
        <label className="input input-bordered flex items-center gap-2">
          <input type="text" className="grow" placeholder={user && user.age || "Enter Your Age here..."} value={age} onChange={(e)=>{setAge(e.target.value)}}/>
        </label>
      </div>

        <div className="card-actions justify-center pt-2">
          <button onClick={saveProfile} className="btn btn-primary">Save Profile</button>
        </div>
      </div>  
          </div>
        </div>
      </div>
      {user && <ProfileCard user={{firstName, lastName, photoURL, about, gender, age}} />}
    </div>
    </>
  )
}

export default EditProfile
