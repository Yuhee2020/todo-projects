import React from 'react'

import './App.scss'
import { AppHeader } from './components/appHeader/AppHeader'
import { ThemeProvider } from './components/themeProvider/ThemeProvider'
import Todolist from './pages/Todolist'

const App = () => {
  return (
    <ThemeProvider>
      <AppHeader />
      <Todolist />
    </ThemeProvider>
  )
}

export default App
