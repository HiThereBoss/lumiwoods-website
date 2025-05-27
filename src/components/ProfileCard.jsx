import React from 'react'

function ProfileCard({ name, bio, image }) {
  return (
    <div className='flex flex-row p-8 lg:mx-55 md:mx-20 sm:mx-10 items-center'>
        <img 
            src='./src/assets/images/logo.png' 
            alt='Profile Image' 
            className='min-w-[200px] h-[200px] object-cover'
        />
        <div className='h-full ml-8'>
            <h3 className='text-custom-blue font-extrabold text-[30px] font-main-bold'>
                {name}
            </h3>
            <p className='text-custom-blue text-[15px] font-main'>
                {bio}
            </p>
        </div>
    </div>
  )
}

export default ProfileCard