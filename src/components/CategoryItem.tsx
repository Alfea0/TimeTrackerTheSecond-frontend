import React, { useState } from "react";
import { checkInCategory, checkOutCategory } from "../services/api";

interface TaskProps {
  task: {
    id: number;
    name: string;
    isCheckedIn: boolean;
  };
}

const CategoryItem: React.FC<TaskProps> = ({ task: category }) => {
    const [isCheckedIn, setIsCheckedIn] = useState<boolean>(category.isCheckedIn);

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

  return (
    <li>
      {category.name}
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
