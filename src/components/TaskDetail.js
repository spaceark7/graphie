import { Tab } from '@headlessui/react'
import { PencilIcon } from '@heroicons/react/24/outline'
import React from 'react'
import Comment from './Comment'

const TaskDetail = ({ task, editTask }) => {
  const [description, setDescription] = React.useState(task.description)

  return (
    <Tab.Panel className={'h-screen max-h-screen'}>
      <div className='min-h-screen lg:min-h-[75vh]'>
        <div className='bg-slate-200 h-16 flex justify-between px-4 items-center border-b border-opacity-25 border-b-gray-400'>
          <h1 className='text-gray-400'>Created: {task.created} </h1>
        </div>
        <div className='h-[85vh] lg:h-[75vh] lg:max-h-[75vh] -z-40'>
          <textarea
            onBlur={(e) => editTask(task.id, e.target.value)}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className='w-full form-textarea max-h-36 bg-gray-100 outline-none border border-gray-200'
          ></textarea>
          <div className='flex flex-col w-full h-full gap-y-2 -z-40 max-h-[60vh] overflow-y-auto '>
            {task.comments.map((comment) => (
              <Comment comment={comment} key={comment.id} />
            ))}
          </div>
        </div>

        {/* Add comments */}
        <div className='h-16 w-full bg-gray-300 z-50 flex  items-center px-4'>
          <div className='flex flex-row w-full'>
            <input
              className='w-11/12 outline-none border-none'
              type='text'
              placeholder='Add a comment'
            />
            <button className='bg-emerald-500 w-1/12 text-white flex items-center justify-center active:scale-95 transition-all ease-in-out'>
              <PencilIcon className='h-6 w-6  ' />
            </button>
          </div>
        </div>
      </div>
    </Tab.Panel>
  )
}

export default TaskDetail
