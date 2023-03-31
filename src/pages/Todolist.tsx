import React from 'react'

import {AddTaskForm} from '../components/addTaskForm/AddTaskForm'
import {Task} from '../components/task/Task'
import {useAppDispatch, useAppSelector} from '../hooks'
import {selectTasks} from '../store/selectors'

import s from './Todolist.module.scss'
import {Typography} from "antd";

import {changeProjectName} from "../store/todolistReducer/todolistReducer";
import {EditableString} from "../components/editableString/EditableString";
import {FilterButtons} from "../components/filterButtons/FilterButtons";
import {ExportImportForm} from "../components/exportImportForm/ExportImportForm";

const Todolist = () => {
    const dispatch = useAppDispatch()
    const tasks = useAppSelector(selectTasks)
    const searchText = useAppSelector(state => state.todolist.searchText)
    const filter = useAppSelector(state => state.todolist.filter)
    let filteredTasks = searchText ? tasks.filter(el => el.description.includes(searchText)) : tasks
    if (filter === "active") {
        filteredTasks = filteredTasks.filter(el => !el.status)
    }
    if (filter === "completed") {
        filteredTasks = filteredTasks.filter(el => el.status)
    }
    const projectName = useAppSelector(state => state.todolist.projectName)

    const handleProjectNameChange = (projectName: string) => {
        dispatch(changeProjectName(projectName))
    }

    return (
        <div className={s.todolistContainer}>
            <ExportImportForm/>
            <Typography className={s.projectName}>
                <EditableString value={projectName}
                                onChange={handleProjectNameChange}/>
            </Typography>
            <AddTaskForm/>
            {!!tasks.length && <FilterButtons/>}
            <div className={s.tasksContainer}>
                {filteredTasks.map(task => (
                    <Task key={task.id} task={task}/>
                ))}
            </div>
        </div>
    )
}

export default Todolist
