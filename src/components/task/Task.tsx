import React, { memo } from 'react'

import { DeleteOutlined, FolderAddOutlined } from '@ant-design/icons'
import { Button, Card, Checkbox, Tooltip } from 'antd'
import dayjs from 'dayjs'
import { v1 } from 'uuid'

import { DATE_FORMAT } from '../../constants'
import { useAppDispatch } from '../../hooks'
import {
  addSubTask,
  changeTask,
  deleteTask,
} from '../../store/todolistReducer/todolistReducer'
import { TaskType } from '../../store/todolistReducer/types'
import { EditableString } from '../editableString/EditableString'

import s from './Task.module.scss'

type PropsType = {
  task: TaskType
}

export const Task = memo(({ task }: PropsType) => {
  const dispatch = useAppDispatch()

  const handleDeleteClick = () => {
    dispatch(deleteTask(task))
  }
  const handleCheckboxClick = () => {
    dispatch(changeTask({ ...task, status: !task.status }))
  }
  const handleDescriptionsChange = (description: string) => {
    dispatch(changeTask({ ...task, description }))
  }
  const handleAddTaskClick = () => {
    const newTask = {
      description: 'New task',
      id: v1(),
      dateOfCreation: dayjs().format(DATE_FORMAT),
      status: false,
      parentId: task.id,
      subtasks: [],
    }

    dispatch(addSubTask({ subTask: newTask, parentId: task.id }))
  }

  return (
    <Card className={s.card}>
      <div className={s.taskContainer}>
        <div className={s.leftBox}>
          <Checkbox
            className={s.checkbox}
            checked={task.status}
            onClick={handleCheckboxClick}
          />
          <EditableString
            checked={task.status}
            value={task.description}
            onChange={handleDescriptionsChange}
          />
        </div>
        <div className={s.rightBox}>
          <Tooltip title="Add subtask">
            <Button
              shape="circle"
              type="text"
              icon={<FolderAddOutlined />}
              onClick={handleAddTaskClick}
            />
          </Tooltip>
          <div className={s.date}>{task.dateOfCreation}</div>
          <Button
            type="text"
            onClick={handleDeleteClick}
            icon={<DeleteOutlined />}
            shape="circle"
          />
        </div>
      </div>
      {task.subtasks &&
        task.subtasks.map(subtask => <Task task={subtask} key={subtask.id} />)}
    </Card>
  )
})
