import { ClockIcon } from '@heroicons/react/24/outline'
import React from 'react'

const Comment = ({ comment }) => {
  return (
    <div className='border-b border-b-2 pb-4 h-fit -z-10'>
      <div className='px-4'>
        <h1 className='font-medium text-gray-600'>{comment.comment}</h1>
        <div className='flex items-center text-gray-400 '>
          <ClockIcon className='h-4 w-4  mr-1' />
          <p className='text-sm'>{comment.created}</p>
        </div>
      </div>
    </div>
  )
}

export default Comment
