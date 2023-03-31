export type TaskType = {
  id: string
  description: string
  status: boolean
  dateOfCreation: string
  parentId:string | null
  subtasks:TaskType[]
}

export type FilterType="all" | "active" | "completed"

export type ThemeType = 'light' | 'dark'
