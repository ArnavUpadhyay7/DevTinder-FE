import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux';
import {addFeed} from '../utils/feedSlice'
import FeedCard from './FeedCard';

const Feed = () => {
  const feed = useSelector((store) => store.feed);
  
  const dispatch = useDispatch();

  const fetchData = async () => {
    if(feed) return;
    try {
      const res = await axios.get(`${BASE_URL}/feed`, {withCredentials: true});
      dispatch(addFeed(res?.data?.data));
    } catch (error) {
      console.error(error)
    } 
  }

  useEffect(()=>{
    fetchData();
  }, [])

  if(!feed || feed.length === 0) return <h1 className='flex justify-center pt-6 text-4xl font-semibold'>No New Users Available.</h1>

  return (
    <div className='flex justify-center mt-12'>
      {<FeedCard user={feed[0]}/>}
    </div>
  )
}

export default Feed
