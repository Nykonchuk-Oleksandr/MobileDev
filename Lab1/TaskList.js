import { useMemo } from 'react';
import { useTasks } from './TaskContext';
import TaskItem from './TaskItem';

function TaskList() {
  const { tasks } = useTasks();

  const remainingTasks = useMemo(() => {
    return tasks.filter((task) => !task.completed).length;
  }, [tasks]);

  return (
    <div className="task-list">
      <p>Remaining tasks: {remainingTasks}</p>
      {tasks.map((task) => (
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