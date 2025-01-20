import React from 'react'

const Premium = () => {
  return (
    <div className='w-full h-screen'>
      <h1 className='text-center text-4xl font-semibold text-zinc-300 pt-4'>Try our Premium</h1>
      <div className='flex justify-center items-center'>
        <div className='px-10 pt-4 rounded-lg mt-10 bg-[#191E24] w-[30vw] h-[60vh]'>
          <h1 className='text-center text-2xl font-semibold text-zinc-300'>Show your rizz</h1>
          <p className='pt-4 text-lg'> Unlimited access to all our content</p>
          <p className='text-lg'>Unlimited likes</p>
          <p className='text-lg'>Superlike feature</p>
          <p className='text-lg'>Some more random features</p>
          <p className='text-lg'>Some more random features</p>
          <p className='text-lg'>Some more random features</p>
          <div className='flex justify-center'>
            <button className='mt-10 px-4 py-2 text-black font-semibold bg-sky-500 hover:bg-sky-700 rounded-lg'>Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Premium
