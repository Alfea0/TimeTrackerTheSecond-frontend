import React, { useState, useEffect } from "react";
import { fetchStats, fetchTotalWorkedMinutesForWeek, fetchWorkedMinutesPerCategory } from "../services/api";

const Stats: React.FC = () => {
  const [totalMinutes, setTotalMinutes] = useState<number>(0);
  const [categoryStats, setCategoryStats] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    const getStats = async () => {
      const stats = await fetchStats();
      setTotalMinutes(stats);
    };
    getStats();
  }, []);

    useEffect(() => {
        const getTotalWorkedMinutes = async () => {
          const minutes = await fetchTotalWorkedMinutesForWeek();
          setTotalMinutes(minutes);
        };
    
        getTotalWorkedMinutes();
      }, []);
    
      useEffect(() => {
        const getCategoryStats = async () => {
          const stats = await fetchWorkedMinutesPerCategory();
          setCategoryStats(stats);
        };
    
        getCategoryStats();
      }, []);

  return (
    <div>
      <h2>Veckans Statistik</h2>
      {/* Total arbetad tid för veckan */}
      <p>Total tid: {totalMinutes} minuter</p>

       {/* Statistik per kategori */}
       <h3>Samlad tid per kategori:</h3>
      <ul>
        {Object.keys(categoryStats).map((category) => (
          <li key={category}>
            <strong>{category}:</strong> {categoryStats[category]} minuter
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Stats;
