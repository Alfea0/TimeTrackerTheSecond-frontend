import React from "react";
import TaskList from "./components/TaskList";
import Stats from "./components/Stats";

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Tidsrapportering</h1>
      <TaskList />
      <Stats />
    </div>
  );
};

export default App;

