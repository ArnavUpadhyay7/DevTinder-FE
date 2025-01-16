import axios from 'axios';
import React from 'react'
import { BASE_URL } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { removeFeed } from '../utils/feedSlice';
import { toast } from 'sonner';

const FeedCard = ({user}) => {

  const { _id, firstName, lastName, photoURL, about, gender, age, skills} = user;
  const dispatch = useDispatch();

  const handleReview = async (status, _id) => {
    try {
      const res = await axios.post(BASE_URL + "/request/send/" + status + "/" + _id,
        {}, {withCredentials: true}
      );
      status==="interested" ?
      toast.success("Connection Request Sent!") : 
      toast.error("Profile Ignored!");
      dispatch(removeFeed(_id));
    } catch (error) {
      console.error(error);
    }
  }
  
  return (
      <div className="card bg-base-200 w-96 shadow-xl pt-6">
        <figure>
          <img className='rounded-lg h-[36vh] w-[18vw]'
            src={photoURL}
            alt="User Photo Icon" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{firstName + " "} {lastName || ""}</h2>
          <p>{age + ", " + gender}</p>
          <p>{about}</p>

          <div className="card-actions justify-center gap-2 pt-6">
            <button onClick={()=> handleReview("interested", _id)} className="btn btn-secondary px-8">Interested</button>
            <button onClick={()=> handleReview("ignored", _id)} className="btn btn-primary px-8">Ignore</button>
          </div>
        </div>
      </div>
  )
}

export default FeedCard
