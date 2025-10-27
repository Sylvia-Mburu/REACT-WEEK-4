import React, { useContext } from "react"
import { TaskContext } from "../context/TaskContext"

export default function TaskCard({ task }) {
  const { toggleTask, deleteTask } = useContext(TaskContext)

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className={`font-semibold ${task.done ? "line-through text-gray-400" : ""}`}>
        {task.title}
      </h3>
      <div className="flex justify-between mt-3">
        <button
          onClick={() => toggleTask(task.id)}
          className="text-sm text-green-600 hover:underline"
        >
          {task.done ? "Undo" : "Complete"}
        </button>
        <button
          onClick={() => deleteTask(task.id)}
          className="text-sm text-red-600 hover:underline"
        >
          Delete
        </button>
      </div>
    </div>
  )
}
