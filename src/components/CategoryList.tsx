import React, { useState, useEffect } from "react";
import { fetchCategorys, createCategory } from "../services/api";
import CategoryItem from "./CategoryItem";

const CategoryList: React.FC = () => {
  const [tasks, setCategorys] = useState<any[]>([]);
  const [newCategory, setNewCategory] = useState<string>("");

  // Hämtar alla arbetsuppgifter när komponenten laddas
  useEffect(() => {
    const getCategorys = async () => {
      const fetchedCategorys = await fetchCategorys();
      setCategorys(fetchedCategorys);
    };
    getCategorys();
  }, []);

  // Skapar en ny arbetsuppgift
  const handleCreateCategory = async () => {
    const createdCategory = await createCategory(newCategory);
    if (createdCategory) {
      setCategorys([...tasks, createdCategory]);
      setNewCategory(""); 
    }
  };

  return (
    <div>
      <h2>Alla Kategorier</h2>
      <input
        type="text"
        value={newCategory}
        onChange={(e) => setNewCategory(e.target.value)}
        placeholder="Skriv en ny uppgift"
      />
      <button onClick={handleCreateCategory}>Skapa uppgift</button>

      <ul>
        {tasks.map((category) => (
          <CategoryItem key={category.id} task={category} />
        ))}
      </ul>
      
    </div>
  );
};

export default CategoryList;
