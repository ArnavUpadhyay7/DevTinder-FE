import React from 'react'

const ProfileCard = ({user}) => {

  const { firstName, lastName, photoURL, about, gender, age} = user;

  return (
    <div className='pt-6'>
        <div className="card bg-base-200 w-96 shadow-xl">
          <figure>
            <img className='rounded-lg h-[50vh] w-[25vw]'
              src={photoURL}
              alt="User Photo Icon" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{firstName + " "} {lastName || ""}</h2>
            <p>{age + ", " + gender}</p>
            <p>{about}</p>
          </div>
        </div>
    </div>
  )
}

export default ProfileCard
