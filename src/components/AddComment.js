import { PencilIcon } from '@heroicons/react/24/outline'
import React from 'react'

const AddComment = () => {
  return (
    <div className='h-16 w-full bg-gray-300 z-50 flex  items-center px-4'>
      <div className='flex flex-row w-full'>
        <input
          className='w-11/12 outline-none border-none'
          type='text'
          placeholder='Add a comment'
        />
        <div className='bg-emerald-500 w-1/12 text-white flex items-center justify-center'>
          <PencilIcon className='h-6 w-6  ' />
        </div>
      </div>
    </div>
  )
}

export default AddComment
