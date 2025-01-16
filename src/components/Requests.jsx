import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../utils/constants';
import RequestCard from './RequestCard';

const Requests = () => {
  const [data, setData] = useState(null);
  
  const fetchRequest = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/user/requests/received`, {withCredentials: true});
      setData(res?.data?.data);
    } catch (error) {
        console.error(error);
    }
  }
  useEffect(()=>{
    fetchRequest();
  }, []);

  if(!data || data.length === 0) return <h1 className='flex justify-center pt-6 text-4xl font-semibold'>No requests yet.</h1>;

  return (
    <div>
      <h1 className='flex justify-center py-6 text-4xl font-semibold'>Requests</h1>
      <div>
        {data && data.map((connection, idx)=>{
          return (
            <div className='flex flex-col gap-5' key={idx}>
              <RequestCard user={connection.fromUserId} requestID={connection._id}/>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Requests
