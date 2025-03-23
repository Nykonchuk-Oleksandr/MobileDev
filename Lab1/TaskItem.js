import { useState, useCallback } from 'react';
import { useTasks } from './TaskContext';

function TaskItem({ id, text, completed = false }) { 
  const [isEditing, setIsEditing] = useState(false); 
  const [editText, setEditText] = useState(text);
  const { setTasks } = useTasks();

  const toggleComplete = useCallback(() => { 
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    ); 
  }, [id, setTasks]);

  const handleDelete = useCallback(() => { 
    setTasks((prev) => prev.filter((task) => task.id !== id)); 
  }, [id, setTasks]);

  const handleEdit = useCallback(() => { 
    if (isEditing && editText.trim()) {
      setTasks((prev) =>
        prev.map((task) =>
          task.id === id ? { ...task, text: editText } : task
        )
      ); 
    }
    setIsEditing((prev) => !prev);
  }, [id, editText, isEditing, setTasks]);

  return (
    <div className="task-item">
      {isEditing ? (
        <input
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
        />
      ) : (
        <span
          onClick={toggleComplete}
          style={{ textDecoration: completed ? 'line-through' : 'none' }}
        >
          {text}
        </span>
      )}
      <button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}