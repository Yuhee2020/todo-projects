import React, {ChangeEvent, KeyboardEvent, memo, useState} from 'react'

import {SearchOutlined} from '@ant-design/icons'
import {Button, Input} from 'antd'

import {useAppDispatch} from '../../hooks'


import s from './SearchForm.module.scss'
import {setSearchText} from "../../store/todolistReducer/todolistReducer";

export const SearchForm = memo(() => {
    const dispatch = useAppDispatch()

    const [text, setText] = useState('')
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.currentTarget.value)
    }
    const handleButtonClick = () => {
        dispatch(setSearchText(text))
    }
    const handleEnterPress = (e: KeyboardEvent<HTMLInputElement>) => {
        e.key === 'Enter' && text && handleButtonClick()
    }

    return (
        <div className={s.formContainer}>
            <Input
                placeholder="Task search"
                size="large"
                onKeyPress={handleEnterPress}
                onChange={handleInputChange}
                value={text}
            />
            <Button
                className={s.button}
                size="large"
                type="default"
                icon={<SearchOutlined/>}
                onClick={handleButtonClick}
            />
        </div>
    )
})
