const API_URL = import.meta.env.VITE_API_URL;
console.log("API_URL is:", API_URL);

export const fetchCategorys = async () => {
  try {
    const response = await fetch(`${API_URL}/categorys`);
    if (!response.ok) throw new Error("Failed to fetch categorys");
    return response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const createCategory = async (name: string) => {
  try {
    const response = await fetch(`${API_URL}/categorys`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    });
    if (!response.ok) throw new Error("Failed to create task");
    return response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const fetchStats = async () => {
  try {
    const response = await fetch(`${API_URL}/categorys/stats/week`);
    if (!response.ok) throw new Error("Failed to fetch stats");
    return response.json();
  } catch (error) {
    console.error(error);
    return 0;
  }
};

// Checkar in en arbetsuppgift
export const checkInCategory = async (categoryId: number) => {
    try {
      const response = await fetch(`${API_URL}/categorys/checkin/${categoryId}`, {
        method: "POST",
      });
      if (!response.ok) throw new Error("Failed to check in task");
      return response.json();
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
  
  // Checkar ut en arbetsuppgift
  export const checkOutCategory = async (categoryId: number) => {
    try {
      const response = await fetch(`${API_URL}/categorys/checkout/${categoryId}`, {
        method: "POST",
      });
      if (!response.ok) throw new Error("Failed to check out task");
      return response.json();
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  // Hämta den totala arbetade tiden för veckan
    export const fetchTotalWorkedMinutesForWeek = async () => {
        try {
        const response = await fetch(`${API_URL}/categorys/stats/week`);
        if (!response.ok) throw new Error("Failed to fetch total worked minutes");
        return response.json(); 
        } catch (error) {
        console.error(error);
        return 0; 
        }
  };
  
  // Hämta arbetstiden per kategori för veckan
    export const fetchWorkedMinutesPerCategory = async () => {
        try {
        const response = await fetch(`${API_URL}/categorys/stats/week/per-category`);
        if (!response.ok) throw new Error("Failed to fetch stats per category");
        return response.json(); 
        } catch (error) {
        console.error(error);
        return {}; 
        }
  };

  export const updateCategoryName = async (id: string, newName: string) => {
    try {
      const response = await fetch(`${API_URL}/categorys/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: newName, 
        }),
      });
  
      if (!response.ok) throw new Error("Failed to update category");
  
      return response.json(); 
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
  
