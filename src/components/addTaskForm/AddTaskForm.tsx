import React, { ChangeEvent, KeyboardEvent, memo, useState } from 'react'

import { PlusOutlined } from '@ant-design/icons'
import { Button, Input } from 'antd'
import dayjs from 'dayjs'
import { v1 } from 'uuid'

import { DATE_FORMAT } from '../../constants'
import { useAppDispatch } from '../../hooks'
import { addTask } from '../../store/todolistReducer/todolistReducer'

import s from './AddTaskForm.module.scss'

export const AddTaskForm = memo(() => {
  const dispatch = useAppDispatch()
  const [description, setDescription] = useState('')
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDescription(e.currentTarget.value)
  }
  const handleButtonClick = () => {
    dispatch(
      addTask({
        description,
        id: v1(),
        dateOfCreation: dayjs().format(DATE_FORMAT),
        status: false,
      }),
    )
    setDescription('')
  }
  const handleEnterPress = (e: KeyboardEvent<HTMLInputElement>) => {
    e.key === 'Enter' && description && handleButtonClick()
  }

  return (
    <div className={s.formContainer}>
      <Input
        placeholder="Enter task description..."
        size="large"
        onKeyPress={handleEnterPress}
        onChange={handleInputChange}
        value={description}
      />
      <Button
        className={s.button}
        shape="circle"
        size="large"
        disabled={!description.trim()}
        type="primary"
        icon={<PlusOutlined />}
        onClick={handleButtonClick}
      />
    </div>
  )
})
