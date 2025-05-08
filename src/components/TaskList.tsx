import React, { useState, useEffect } from "react";
import { fetchTasks, createTask } from "../services/api";
import TaskItem from "./TaskItem";

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<any[]>([]);
  const [newTask, setNewTask] = useState<string>("");

  // Hämtar alla arbetsuppgifter när komponenten laddas
  useEffect(() => {
    const getTasks = async () => {
      const fetchedTasks = await fetchTasks();
      setTasks(fetchedTasks);
    };
    getTasks();
  }, []);

  // Skapar en ny arbetsuppgift
  const handleCreateTask = async () => {
    const createdTask = await createTask(newTask);
    if (createdTask) {
      setTasks([...tasks, createdTask]);
      setNewTask(""); 
    }
  };

  return (
    <div>
      <h2>Alla Kategorier</h2>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Skriv en ny uppgift"
      />
      <button onClick={handleCreateTask}>Skapa uppgift</button>

      <ul>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
      
    </div>
  );
};

export default TaskList;
