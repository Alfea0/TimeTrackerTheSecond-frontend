import React, { useState } from "react";
import { checkInTask, checkOutTask } from "../services/api";

interface TaskProps {
  task: {
    id: number;
    name: string;
    isCheckedIn: boolean;
  };
}

const TaskItem: React.FC<TaskProps> = ({ task }) => {
    const [isCheckedIn, setIsCheckedIn] = useState<boolean>(task.isCheckedIn);

  // Funktion för att checka in
  const handleCheckIn = async () => {
    try {
      await checkInTask(task.id);
      setIsCheckedIn(true);
    } catch (error) {
      console.error("Kunde inte checka in uppgiften:", error);
    }
  };

  // Funktion för att checka ut
  const handleCheckOut = async () => {
    try {
      await checkOutTask(task.id);
      setIsCheckedIn(false);
    } catch (error) {
      console.error("Kunde inte checka ut uppgiften:", error);
    }
  };

  return (
    <li>
      {task.name}
      <div>
        {isCheckedIn ? (
          <button onClick={handleCheckOut}>Checka ut</button>
        ) : (
          <button onClick={handleCheckIn}>Checka in</button>
        )}
      </div>
    </li>
  );
};

export default TaskItem;
