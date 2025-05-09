import React, { useState } from "react";
import { updateCategoryName, checkInCategory, checkOutCategory } from "../services/api";

interface TaskProps {
  task: {
    id: number;
    name: string;
    isCheckedIn: boolean;
  };
}

const CategoryItem: React.FC<TaskProps> = ({ task: category }) => {
    const [isCheckedIn, setIsCheckedIn] = useState<boolean>(category.isCheckedIn);
    const [newName, setNewName] = useState<string>(category.name); 
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [tasks, setTasks] = useState<any[]>([]);

  // Funktion för att checka in
  const handleCheckIn = async () => {
    try {
      await checkInCategory(category.id);
      setIsCheckedIn(true);
    } catch (error) {
      console.error("Kunde inte checka in uppgiften:", error);
    }
  };

  // Funktion för att checka ut
  const handleCheckOut = async () => {
    try {
      await checkOutCategory(category.id);
      setIsCheckedIn(false);
    } catch (error) {
      console.error("Kunde inte checka ut uppgiften:", error);
    }
  };

    // Funktion för att spara det nya namnet
    const handleSaveName = async () => {
      try {
        const updatedCategory = await updateCategoryName(category.id.toString(), newName);

        setTasks((prevTasks) =>
          prevTasks.map((task) =>
            task.id === updatedCategory.id ? { ...task, name: updatedCategory.name } : task
          )
        );

        setIsEditing(false); 
      } catch (error) {
        console.error("Kunde inte uppdatera namnet:", error);
      }
    };

  return (
    <li>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)} 
          />
          <button onClick={handleSaveName}>Spara</button>
          <button onClick={() => setIsEditing(false)}>Avbryt</button>
        </div>
      ) : (
        <div>
          <span>{category.name}</span>
          <button onClick={() => setIsEditing(true)}>Redigera namn</button>
        </div>
      )}
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

export default CategoryItem;
