import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../utils/constants';
import ConnectionCard from './ConnectionCard';

const Connections = () => {
  const [data, setData] = useState(null);
  const fetchConnections = async () => {
    try {
        const res = await axios.get(`${BASE_URL}/user/connections`, {withCredentials:true});
        setData(res?.data?.data);
    } catch (error) {
        console.error(error);
    }
  }

  useEffect(()=>{
    fetchConnections();
  }, [])

  if(!data || data.length === 0) return <h1 className='flex justify-center pt-6 text-4xl font-semibold'>No connections yet.</h1>;

  return (
    <div>
      <h1 className='flex justify-center py-6 text-4xl font-semibold'>Connections</h1>
      {/* <div className='justify-center flex flex-wrap gap-10'> */}
      <div className='flex flex-col gap-3 pb-10'>
        {data.map((connection, idx)=>{
          return (
            <div key={idx}>
              <ConnectionCard user={connection}/>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Connections
