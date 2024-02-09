import React from 'react'
import { users } from '../data/users'
import UserCard from './UserCard'

function Users() {
  return (
    <div className='mx-auto flex flex-col items-center justify-center pt-3 overflow-hidden'>
      <div className='w-[80%] lg:w-[800px] mx-auto border-t-2 border-gray-200'></div>
      <div  className='flex flex-col flex-wrap items-center justify-center gap-4 p-4 '>
      {users.map((user) => (
       <UserCard user={user}/>
      ))}
      </div>
    </div>
  )
}

export default Users