import React from 'react'

import { Switch } from 'antd'

import { useAppDispatch, useAppSelector } from '../../hooks'
import { selectTheme } from '../../store/selectors'
import { changeTheme } from '../../store/todolistReducer/todolistReducer'

import s from './AppHeader.module.scss'
import { Moon } from './icons/Moon'
import { Sun } from './icons/Sun'
import {SearchForm} from "../searchForm/SearchForm";

export const AppHeader = () => {
  const dispatch = useAppDispatch()

  const theme = useAppSelector(selectTheme)

  const handleSwitchChange = (e: boolean) => {
    dispatch(changeTheme(e ? 'dark' : 'light'))
  }

  return (
    <div className={s.headerContainer}>
        <SearchForm/>
      <div className={s.buttonsGroup}>
        <Switch
          onChange={handleSwitchChange}
          checked={theme === 'dark'}
          checkedChildren={<Sun />}
          unCheckedChildren={<Moon />}
          defaultChecked
        />
      </div>
    </div>
  )
}
