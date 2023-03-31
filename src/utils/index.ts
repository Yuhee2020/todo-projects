import { saveAs } from 'file-saver';
import {StateType} from "../hooks";
import {TaskType} from "../store/todolistReducer/types";

export function loadState() {
  const data = sessionStorage.getItem('myAppData')

  return data ? JSON.parse(data) : undefined
}


export const saveData = (data:StateType) => {
  const jsonData = JSON.stringify(data);
  const blob = new Blob([jsonData], { type: 'application/json' });
  saveAs(blob, 'project.json');
};


export function recursiveAddSubtask(taskId: string, subtask: TaskType, tasks: TaskType[]): TaskType[] {
  return tasks.map(task => {
    if (task.id === taskId) {
      return {
        ...task,
        subtasks: [...task.subtasks, subtask]
      }
    } else if (task.subtasks.length > 0) {
      return {
        ...task,
        subtasks: recursiveAddSubtask(taskId, subtask, task.subtasks)
      }
    } else {
      return task
    }
  })
}

export function recursiveUpdateSubtask(updatedSubtask: TaskType, tasks: TaskType[]): TaskType[] {
  return tasks.map(task => {
    if (task.id === updatedSubtask.parentId) {
      return {
        ...task,
        subtasks: task.subtasks.map(subtask => {
          if (subtask.id === updatedSubtask.id) {
            return updatedSubtask
          } else {
            return subtask
          }
        })
      }
    } else if (task.subtasks.length > 0) {
      return {
        ...task,
        subtasks: recursiveUpdateSubtask(updatedSubtask, task.subtasks)
      }
    } else {
      return task
    }
  })
}

export function removeSubtask(parentId: string | null, id: string, tasks: TaskType[]): TaskType[] {
  return tasks.map(task => {
    if (task.id === parentId) {
      return {
        ...task,
        subtasks: task.subtasks.filter(subtask => subtask.id !== id)
      }
    } else if (task.subtasks.length > 0) {
      return {
        ...task,
        subtasks: removeSubtask(parentId, id, task.subtasks)
      }
    } else {
      return task
    }
  })
}