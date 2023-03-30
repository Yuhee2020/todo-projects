export type TaskType = {
  id: string
  description: string
  status: boolean
  dateOfCreation: string
}

export type FilterType="all" | "active" | "completed"

export type ThemeType = 'light' | 'dark'
