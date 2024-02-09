import React from 'react'
import GitScore from './../assets/GitScore.svg'

function Cover() {
  return (
    <div className='mt-[5rem] p-3 w-full flex flex-col gap-3 items-center justify-center'>
       <figure className='w-[22rem]'>
        <img src={GitScore} alt="GitScore" className='w-full'/>
      </figure>
      <div className='flex flex-col items-center justify-center gap-2'>
        <h2 className='text-3xl font-bold text-gray-600'>Top Public Contributors</h2>
        <p>30 jan - 5 Feb</p>
      </div>
    </div>
  )
}

export default Cover