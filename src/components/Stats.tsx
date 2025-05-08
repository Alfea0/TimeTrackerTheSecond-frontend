import React, { useState, useEffect } from "react";
import { fetchStats } from "../services/api";

const Stats: React.FC = () => {
  const [totalMinutes, setTotalMinutes] = useState<number>(0);

  useEffect(() => {
    const getStats = async () => {
      const stats = await fetchStats();
      setTotalMinutes(stats);
    };
    getStats();
  }, []);

  return (
    <div>
      <h2>Veckans Statistik</h2>
      <p>Total tid: {totalMinutes} minuter</p>
    </div>
  );
};

export default Stats;
