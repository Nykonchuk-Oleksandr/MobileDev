import { useState, useRef, useCallback } from 'react';
import { useTasks } from './TaskContext';

function TaskForm() {
  const [inputValue, setInputValue] = useState(''); 
  const inputRef = useRef(null); 
  const { setTasks } = useTasks();

  const handleSubmit = useCallback((e) => { 
    e.preventDefault();
    if (!inputValue.trim()) return;

    const newTask = {
      id: Date.now(), 
      text: inputValue,
      completed: false,
    };

    setTasks((prev) => [...prev, newTask]); 
    setInputValue('');
    inputRef.current.focus(); 
  }, [inputValue, setTasks]);

  return (
    <form onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter a new task"
      />
      <button type="submit">Add Task</button>
    </form>
  );
}