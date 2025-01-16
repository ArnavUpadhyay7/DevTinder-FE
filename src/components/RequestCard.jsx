import axios from 'axios';
import React from 'react'
import { BASE_URL } from '../utils/constants';
import { toast } from 'sonner';

const RequestCard = ({user, requestID}) => {

  const {firstName, lastName, photoURL} = user;

  const handleReview = async (status, _id) => {
    try {
      const res = await axios.post(BASE_URL + "/request/received/" + status + "/" + requestID,
        {}, {withCredentials: true}
      );
      status==="accepted" ?
      toast.success("Request Accepted!") : 
      toast.error("Request Rejected!");
    } catch (error) {
      console.error(error);
    }
  }
  
  return (
      <div className='flex justify-center pb-3'>
        <div className='mx-8 px-10 py-5 flex justify-between items-center w-2/3 bg-base-200 rounded-xl'>
          <div className='flex items-center gap-5'>
            <img className='size-10 rounded-full' src={photoURL} alt="User photo icon" />
            <p className='text-xl font-serif'>{firstName + " "} {lastName || ""}</p>
          </div>
          <div className="card-actions justify-center gap-2">
            <button onClick={()=> handleReview("accepted", requestID)} className="btn btn-secondary px-8">Accept</button>
            <button onClick={()=> handleReview("rejected", requestID)} className="btn btn-primary px-8">Reject</button>
          </div>
        </div>
      </div>
  )
}

export default RequestCard
