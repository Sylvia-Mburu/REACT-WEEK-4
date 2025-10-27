import { useState, useEffect } from "react";
import TaskCard from "../components/TaskCard";
import TaskForm from "../components/TaskForm";
import { fetchTasks, createTask, updateTask, deleteTask } from "../lib/api";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const data = await fetchTasks();
        setTasks(data);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  async function handleAdd(task) {
    const created = await createTask(task);
    setTasks(prev => [created, ...prev]);
  }

  async function handleEdit(st) {
    const updated = await updateTask(st._id, st);
    setTasks(prev => prev.map(x => (x._id === st._id ? updated : x)));
  }

  async function handleDelete(id) {
    await deleteTask(id);
    setTasks(prev => prev.filter(x => x._id !== id));
  }

  return (
    <main>
      <TaskForm onSubmit={handleAdd} />
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-600">{error}</p>}
      {tasks.map(s => (
        <TaskCard
          key={s._id}
          task={s}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      ))}
    </main>
  );
}
