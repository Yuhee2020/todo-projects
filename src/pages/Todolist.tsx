import React from 'react'

import {AddTaskForm} from '../components/addTaskForm/AddTaskForm'
import {Task} from '../components/task/Task'
import {StateType, useAppDispatch, useAppSelector} from '../hooks'
import {selectTasks} from '../store/selectors'
import {ExportOutlined} from '@ant-design/icons';

import s from './Todolist.module.scss'
import {Button} from "antd";
import {saveData} from "../utils";

import {setImportedProject} from "../store/todolistReducer/todolistReducer";
import {FileUploader} from "../components/fileUploader/FileUploader";
import {EditableString} from "../components/editableString/EditableString";

const Todolist = () => {
    const dispatch=useAppDispatch()
    const tasks = useAppSelector(selectTasks)
    const state = useAppSelector(state => state)
    const handleExportProjectClick=()=>{
        saveData(state)
    }
    const handleImportProjectClick=(data:StateType)=>{
        console.log(data)
        dispatch(setImportedProject(data.todolist))
    }

    return (
        <div className={s.todolistContainer}>
            <h1><EditableString value={"Todolist"} onChange={() => {
            }}/></h1>
            <div>
                <Button icon={<ExportOutlined/>} onClick={handleExportProjectClick}>export
                    project</Button>
               <FileUploader onFileLoad={handleImportProjectClick}/>
            </div>
            <AddTaskForm/>
            <div className={s.tasksContainer}>
                {tasks.map(task => (
                    <Task key={task.id} task={task}/>
                ))}
            </div>
            <div>
                <Button>ALL</Button>
                <Button>ACTIVE</Button>
                <Button>COMPLETED</Button>
            </div>
        </div>
    )
}

export default Todolist
