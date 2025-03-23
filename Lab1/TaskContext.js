import { createContext, useContext, useState } from 'react';

const TaskContext = createContext();

export const useTasks = () => useContext(TaskContext);

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [theme, setTheme] = useState('light'); 

  return (
    <TaskContext.Provider value={{ tasks, setTasks, theme, setTheme }}>
      {children}
    </TaskContext.Provider>
  );
};