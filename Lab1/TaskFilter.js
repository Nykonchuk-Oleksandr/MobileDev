import { useState, useCallback } from 'react';
import { useTasks } from './TaskContext';

function TaskFilter() {
  const [filter, setFilter] = useState('all'); /
  const { tasks, setTasks } = useTasks();

  const handleFilter = useCallback((newFilter) => { 
    setFilter(newFilter);
  }, []);

  const filteredTasks = tasks.filter((task) => { 
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true; 
  });

  const clearCompleted = useCallback(() => { 
    setTasks((prev) => prev.filter((task) => !task.completed));
  }, [setTasks]);

  return (
    <div className="task-filter">
      <button onClick={() => handleFilter('all')}>All</button>
      <button onClick={() => handleFilter('active')}>Active</button>
      <button onClick={() => handleFilter('completed')}>Completed</button>
      <button onClick={clearCompleted}>Clear Completed</button>
      {}
      {filteredTasks.map((task) => (
        <TaskItem
          key={task.id} 
          id={task.id}
          text={task.text}
          completed={task.completed}
        />
      ))}
    </div>
  );
}