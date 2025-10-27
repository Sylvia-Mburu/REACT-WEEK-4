import { useState } from "react";
import TaskCard from "../components/TaskCard";
import TaskForm from "../components/TaskForm";

export default function Home() {
  const [tasks, setTasks] = useState([]); // start empty
  const [error, setError] = useState("");

  function handleAdd(task) {
    const newTask = { id: Date.now(), title: task.title, done: false };
    setTasks(prev => [newTask, ...prev]);
  }

  function handleEdit(updatedTask) {
    setTasks(prev =>
      prev.map(t => (t.id === updatedTask.id ? updatedTask : t))
    );
  }

  function handleDelete(id) {
    setTasks(prev => prev.filter(t => t.id !== id));
  }

  return (
    <main>
      <TaskForm onSubmit={handleAdd} />
      {error && <p className="text-red-600">{error}</p>}
      {tasks.map(t => (
        <TaskCard
          key={t.id}
          task={t}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      ))}
    </main>
  );
}
