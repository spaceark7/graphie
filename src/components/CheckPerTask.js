import React, { useState } from 'react'

const CheckPerTask = ({ task, handleChecked }) => {
  const [isChecked, setIsChecked] = useState(task.status)
  return (
    <input
      className='hover:cursor-pointer mr-3 text-green-700'
      type='checkbox'
      checked={task.status}
      onChange={async () => {
        await handleChecked(task.id)
        setIsChecked(task.status)
      }}
    />
  )
}

export default CheckPerTask
