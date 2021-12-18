import { useState } from 'react'
import './App.css'
import TodoItem from './components/TodoItem/TodoItem'

function App() {

  return (
    <div className="App">
      <h2 className="todoTitle">list</h2>
      <TodoItem />
    </div>
  )
}

export default App
