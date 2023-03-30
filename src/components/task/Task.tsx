import React, { memo } from 'react'

import { DeleteOutlined } from '@ant-design/icons'
import { Button, Card, Checkbox } from 'antd'

import { useAppDispatch } from '../../hooks'
import {
  changeTaskDescription,
  changeTaskStatus,
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
    dispatch(deleteTask(task.id))
  }
  const handleCheckboxClick = () => {
    dispatch(changeTaskStatus(task.id))
  }
  const handleDescriptionsChange = (description: string) => {
    dispatch(changeTaskDescription({ id: task.id, description }))
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
          <div className={s.date}>{task.dateOfCreation}</div>
          <Button
            type="text"
            onClick={handleDeleteClick}
            icon={<DeleteOutlined />}
            shape="circle"
          />
        </div>
      </div>
    </Card>
  )
})
