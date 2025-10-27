const STORAGE_KEY = "tasks";

export async function fetchTasks() {
  const saved = localStorage.getItem(STORAGE_KEY);
  return saved ? JSON.parse(saved) : [];
}

export async function createTask(task) {
  const tasks = await fetchTasks();
  const newTask = { ...task, _id: Date.now().toString() };
  const updated = [newTask, ...tasks];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  return newTask;
}

export async function updateTask(id, updatedTask) {
  const tasks = await fetchTasks();
  const updated = tasks.map(t => (t._id === id ? updatedTask : t));
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  return updatedTask;
}

export async function deleteTask(id) {
  const tasks = await fetchTasks();
  const updated = tasks.filter(t => t._id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  return { success: true };
}
