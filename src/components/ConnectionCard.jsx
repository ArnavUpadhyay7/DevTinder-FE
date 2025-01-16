import React from 'react'

const ConnectionCard = ({user}) => {
    const {firstName, lastName, gender, age, skills, about, photoURL} = user;
  return (
    // <div className="card bg-base-200 w-96 shadow-xl pt-6">
    //     <figure>
    //       <img className='rounded-lg h-[36vh] w-[18vw]'
    //         src={photoURL}
    //         alt="User Photo Icon" />
    //     </figure>
    //     <div className="card-body">
    //       <h2 className="card-title">{firstName + " "} {lastName || ""}</h2>
    //       <p>{age + ", " + gender}</p>
    //       <p>{about}</p>
    //       <div>
    //         {skills.length>0 && <p className='font-semibold'>Skills - </p>}
            
    //         {skills.map((skill, idx)=>{
    //           return (
    //             <span key={idx}>
    //               {skill}{idx < skills.length - 1 ? ', ' : ''}
    //             </span>
    //           )
    //         })}
    //       </div>
    //     </div>
    //   </div>

    <div className='flex justify-center'>
      <div className='mx-8 px-10 py-5 flex justify-between items-center w-2/3 bg-base-200 rounded-xl'>
        <div className='flex items-center gap-5'>
          <img className='size-12 rounded-full' src={photoURL} alt="User photo icon" />
          <p className='text-xl font-serif'>{firstName + " "} {lastName || ""}</p>
        </div>
        <div className="card-actions justify-center gap-2">
          <p className='text-xl'>{age + ", " + gender}</p>
          {/* <button onClick={()=> handleReview("accepted", requestID)} className="btn btn-secondary px-8">Interested</button>
          <button onClick={()=> handleReview("rejected", requestID)} className="btn btn-primary px-8">Ignore</button> */}
        </div>
      </div>
    </div>
  )
}

export default ConnectionCard
