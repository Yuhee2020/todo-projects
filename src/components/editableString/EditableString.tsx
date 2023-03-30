import React, { ChangeEvent, KeyboardEvent, memo, useState } from 'react'

import { EditOutlined } from '@ant-design/icons'
import { Button, Input, Tooltip } from 'antd'

import s from './EditableString.module.scss'

type PropsType = {
  value: string
  onChange: (newValue: string) => void
  checked?: boolean
}

export const EditableString = memo(({ value, onChange, checked }: PropsType) => {
  const [editMode, setEditMode] = useState(false)
  const [title, setTitle] = useState(value)

  const activateEditMode = () => {
    setEditMode(true)
    setTitle(value)
  }
  const activateViewMode = () => {
    setEditMode(false)
    onChange(title)
  }
  const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value)
  }
  const handleEnterPress = (e: KeyboardEvent<HTMLInputElement>) => {
    e.key === 'Enter' && activateViewMode()
  }

  return editMode ? (
    <Input
      className={s.input}
      value={title}
      onKeyPress={handleEnterPress}
      onChange={changeTitle}
      autoFocus
      onBlur={activateViewMode}
    />
  ) : (
    <div className={checked ? s.checked : s.string} onDoubleClick={activateEditMode}>
      <Tooltip title="double click to edit">{value}</Tooltip>
      <Button
        shape="circle"
        type="ghost"
        onClick={activateEditMode}
        icon={<EditOutlined className={s.icon} />}
      />
    </div>
  )
})
