import React, { memo } from 'react'

import { Typography } from 'antd'
import { DragDropContext, Draggable, Droppable, DropResult } from 'react-beautiful-dnd'

import { AddTaskForm } from '../../components/addTaskForm/AddTaskForm'
import { EditableString } from '../../components/editableString/EditableString'
import { ExportImportForm } from '../../components/exportImportForm/ExportImportForm'
import { FilterButtons } from '../../components/filterButtons/FilterButtons'
import { Task } from '../../components/task/Task'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { selectState } from '../../store/selectors'
import {
  changeProjectName,
  changeTaskPosition,
} from '../../store/todolistReducer/todolistReducer'

import s from './Todolist.module.scss'

const Todolist = memo(() => {
  const dispatch = useAppDispatch()
  const { filter, searchText, tasks, projectName } = useAppSelector(selectState)
  let filteredTasks = searchText
    ? tasks.filter(el => el.description.includes(searchText))
    : tasks

  if (filter === 'active') {
    filteredTasks = filteredTasks.filter(el => !el.status)
  }
  if (filter === 'completed') {
    filteredTasks = filteredTasks.filter(el => el.status)
  }

  const handleProjectNameChange = (projectName: string) => {
    dispatch(changeProjectName(projectName))
  }
  const onDragEnd = (result: DropResult) => {
    if (!result.destination) {
      return
    }
    dispatch(
      changeTaskPosition({
        id: result.source.droppableId,
        destinationIndex: result.destination.index,
        sourceIndex: result.source.index,
      }),
    )
  }

  return (
    <div className={s.todolistContainer}>
      <ExportImportForm />
      <Typography className={s.projectName}>
        <EditableString value={projectName} onChange={handleProjectNameChange} />
      </Typography>
      <AddTaskForm />
      <DragDropContext onDragEnd={onDragEnd}>
        {!!tasks.length && <FilterButtons />}
        <Droppable droppableId="task-list">
          {provided => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className={s.tasksContainer}
            >
              {filteredTasks.map((task, index) => (
                <Draggable key={task.id} draggableId={task.id} index={index}>
                  {provided => (
                    <div
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                    >
                      <Task key={task.id} task={task} />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
})

export default Todolist
