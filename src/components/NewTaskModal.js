import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment } from 'react'

const NewTaskModal = ({ openModalTask, closeModalTask, addNewTask }) => {
  const [title, setTitle] = React.useState('')
  const [description, setDescription] = React.useState('')

  return (
    <Transition appear show={openModalTask} as={Fragment}>
      <Dialog as='div' className='relative z-10' onClose={closeModalTask}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black bg-opacity-25' />
        </Transition.Child>

        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-4 text-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                <Dialog.Title
                  as='h3'
                  className='text-lg font-medium leading-6 text-gray-900'
                >
                  Add New Task
                </Dialog.Title>
                <div className='mt-2 w-full'>
                  <label className='block'>
                    <span className='block text-sm font-medium text-slate-700'>
                      Title
                    </span>

                    <input
                      type='text'
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      className='mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    '
                    />
                  </label>
                  <label className='block'>
                    <span className='block text-sm font-medium text-slate-700'>
                      Description
                    </span>

                    <textarea
                      type='text'
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      className='mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                                    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                                    disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                                    invalid:border-pink-500 invalid:text-pink-600
                                    focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                                    '
                    />
                  </label>
                </div>

                <div className='mt-4 flex justify-end'>
                  <button
                    type='button'
                    className='inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
                    onClick={() => {
                      closeModalTask()
                      addNewTask({
                        id: title,
                        name: title,
                        description,
                        comments: [],
                        created: new Date().toLocaleDateString(),
                      })
                      setDescription('')
                      setTitle('')
                    }}
                  >
                    Save Task
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default NewTaskModal
