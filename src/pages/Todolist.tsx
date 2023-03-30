import React from 'react'

import { AddTaskForm } from '../components/addTaskForm/AddTaskForm'
import { Task } from '../components/task/Task'
import { useAppSelector } from '../hooks'
import { selectTasks } from '../store/selectors'

import s from './Todolist.module.scss'

const Todolist = () => {
  const tasks = useAppSelector(selectTasks)

  return (
    <div className={s.todolistContainer}>
      <AddTaskForm />
      <div className={s.tasksContainer}>
        {tasks.map(task => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </div>
  )
}

export default Todolist
