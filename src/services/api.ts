const API_URL = "http://localhost:8080/api";

export const fetchTasks = async () => {
  try {
    const response = await fetch(`${API_URL}/tasks`);
    if (!response.ok) throw new Error("Failed to fetch tasks");
    return response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const createTask = async (name: string) => {
  try {
    const response = await fetch(`${API_URL}/tasks`, {
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
    const response = await fetch(`${API_URL}/tasks/stats/week`);
    if (!response.ok) throw new Error("Failed to fetch stats");
    return response.json();
  } catch (error) {
    console.error(error);
    return 0;
  }
};
