import { Dialog, Tab, Transition } from '@headlessui/react'
import { PlusIcon } from '@heroicons/react/24/outline'
import { Fragment, useEffect, useState } from 'react'
import dummy from './dummyData'
import TaskDetail from './components/TaskDetail'
import CheckPerTask from './components/CheckPerTask'
import NewTaskModal from './components/NewTaskModal'

function App() {
  // Helper
  const [tasks, setTasks] = useState([])
  const [openModalTask, setOpenModalTask] = useState(false)
  const [openModalDelete, setOpenModalDelete] = useState(false)

  // Helper functions
  const closeModalTask = () => {
    setOpenModalTask(false)
  }
  const handleMarkComplete = () => {
    const allCompleted = tasks.every((task) => task.status === true)

    if (allCompleted === true) {
      setTasks(tasks.map((task) => ({ ...task, status: false })))
    } else {
      setTasks(tasks.map((task) => ({ ...task, status: true })))
    }
  }
  const handleCheck = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, status: !task.status } : task
      )
    )
  }

  const addNewTask = (newTask) => {
    setTasks([...tasks, newTask])
  }
  const editTask = (id, newTask) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, description: newTask } : task
      )
    )
  }

  useEffect(() => {
    setTasks(dummy)
  }, [])

  return (
    <>
      <NewTaskModal
        openModalTask={openModalTask}
        closeModalTask={closeModalTask}
        addNewTask={addNewTask}
      />
      <section className='max-w-screen-lg mx-auto max-h-screen lg:overflow-hidden'>
        <Tab.Group as={'div'} className='grid grid-cols-1 md:grid-cols-2'>
          <div>
            <div className='bg-gray-100 h-16 flex justify-between px-4 items-center border-b border-opacity-25 border-b-gray-400'>
              <h1 className='font-semibold text-gray-700'>Tasks</h1>
              <button
                onClick={() => setOpenModalTask(true)}
                className='bg-emerald-500 text-white px-2 py-1 rounded active:scale-95 transition-all ease-in-out'
              >
                <PlusIcon className='h-6 w-6 font-bold' />
              </button>
            </div>
            <Tab.List
              className={
                'flex flex-col space-y-2 bg-gray-50 px-2 py-4 h-[85vh] md:h-[75vh] overflow-y-auto md:max-h-[75vh]'
              }
            >
              {tasks.map((task) => (
                <Tab key={task.id} as={Fragment}>
                  {({ selected }) => (
                    <div
                      className={
                        selected
                          ? 'flex items-center rounded-md px-4 min-h-[60px]  bg-blue-400 text-white '
                          : 'flex items-center rounded-md px-4 min-h-[60px] border border-gray-100 bg-white'
                      }
                    >
                      <input
                        className='hover:cursor-pointer mr-3 text-green-700'
                        type='checkbox'
                        checked={task.status}
                        onChange={() => {
                          handleCheck(task.id)
                        }}
                      />

                      <div className='flex group justify-between w-full'>
                        <h1>{task.name}</h1>
                        <h2 className='hidden active:scale-95 transition-all ease-in-out cursor-pointer rounded-full text-sm font-semibold px-4 py-1 bg-red-100 text-red-700 group-hover:block'>
                          Delete
                        </h2>
                      </div>
                    </div>
                  )}
                </Tab>
              ))}
            </Tab.List>

            {/* Mark all */}
            <div className='h-16 w-full flex items-center px-4'>
              <input
                onChange={handleMarkComplete}
                className='hover:cursor-pointer mr-3 text-green-700'
                type='checkbox'
              />{' '}
              <p className='text-gray-700'>Mark all as complete</p>
            </div>
          </div>
          <Tab.Panels>
            {tasks.map((task) => (
              <TaskDetail editTask={editTask} task={task} key={task.id} />
            ))}
          </Tab.Panels>
        </Tab.Group>
      </section>
    </>
  )
}

export default App
