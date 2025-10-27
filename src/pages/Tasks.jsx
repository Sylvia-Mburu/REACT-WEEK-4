import React, { useContext } from "react"
import { TaskContext } from "../context/TaskContext"
import TaskForm from "../components/TaskForm"
import TaskCard from "../components/TaskCard"

export default function Tasks() {
  const { tasks } = useContext(TaskContext)

  return (
    <section>
      <TaskForm />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {tasks.map(task => (
          <TaskCard key={task.id} task={task} />
        ))}
        {tasks.length === 0 && <p>No tasks yet. Add one above.</p>}
      </div>
    </section>
  )
}
