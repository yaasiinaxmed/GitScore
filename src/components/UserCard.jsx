import React from 'react'
import one from './../assets/1.svg'
import two from './../assets/2.svg'
import three from './../assets/3.svg'

function UserCard({ user }) {
  return (
    <div className='flex items-center justify-between w-full lg:w-[800px] p2 p-4 rounded-xl shadow-[0px_0px_4px_rgba(0,0,0,0.1)]'>
      {/* user info */}
      <div className='flex items-center justify-center gapTwo gap-4 '>
        {/* rank number */}
        <div>
          {user.rank === 1 && (
            <figure className='w-[2rem]'>
              <img src={one} alt="GitScore" className='w-full' />
            </figure>
          )}
          {user.rank === 2 && (
            <figure className='w-[2rem]'>
              <img src={two} alt="GitScore" className='w-full' />
            </figure>
          )}
          {user.rank === 3 && (
            <figure className='w-[2rem]'>
              <img src={three} alt="GitScore" className='w-full' />
            </figure>
          )}
          {user.rank > 3 && (
            <div className='p-3'>
              <h2 className='font-bold text-xl'>{user.rank}</h2>
            </div>
          )}
        </div>
        {/* user */}
        <div className='flex items-center gapTwo2 gap-3'>
          <figure className='avatar w-[50px] rounded-full '>
            <img src={user.avatarUrl} alt="GitScore" className='w-full rounded-full' />
          </figure>
          <div>
            <h2 className='font-medium'>{user.name}</h2>
            <p className='text-gray-500'>{user.login}</p>
          </div>
        </div>
      </div>
      <div>
        <h3 className='font-medium text-sm'>CTS {user.contributions}</h3>
      </div>
    </div>
  )
}

export default UserCard