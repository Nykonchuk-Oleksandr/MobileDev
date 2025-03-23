import { useEffect } from 'react';
import { TaskProvider } from './TaskContext';
import TaskForm from './TaskForm';
import TaskFilter from './TaskFilter';
import TaskList from './TaskList';

function App() {
  const { tasks, setTasks } = useTasks();

  // Синхронізація з localStorage (Вимога 4)
  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, [setTasks]);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    console.log('Tasks updated:', tasks); // Логування змін (Вимога 4)
  }, [tasks]);

  return (
    <TaskProvider>
      <div className="app" style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
        <h1>Task Manager</h1>
        <TaskForm /> {/* Компонент для додавання (Вимога 5) */}
        <TaskFilter /> {/* Компонент для фільтрації (Вимога 5) */}
        <TaskList /> {/* Компонент для списку (Вимога 5) */}
      </div>
    </TaskProvider>
  );
}

export default App;