import React, { createContext, useState } from "react"

export const TaskContext = createContext()

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([])

  function addTask(task) {
    const newTask = { id: Date.now(), title: task.title, done: false }
    setTasks(prev => [...prev, newTask])
  }

  function toggleTask(id) {
    setTasks(prev =>
      prev.map(t => (t.id === id ? { ...t, done: !t.done } : t))
    )
  }

  function deleteTask(id) {
    setTasks(prev => prev.filter(t => t.id !== id))
  }

  return (
    <TaskContext.Provider value={{ tasks, addTask, toggleTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  )
}
