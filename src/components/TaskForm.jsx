import React, { useState, useContext } from "react"
import { TaskContext } from "../context/TaskContext"

export default function TaskForm() {
  const [title, setTitle] = useState("")
  const { addTask } = useContext(TaskContext)

  function handleSubmit(e) {
    e.preventDefault()
    if (!title.trim()) return
    addTask({ title })
    setTitle("")
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Add a new task"
        className="flex-1 border p-2 rounded-lg"
      />
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
        Add
      </button>
    </form>
  )
}
