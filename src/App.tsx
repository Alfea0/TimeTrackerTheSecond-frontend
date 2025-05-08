import React from "react";
import CategoryList from "./components/CategoryList";
import Stats from "./components/Stats";
import './styles.css';


const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Tidsrapportering</h1>
      <CategoryList />
      <Stats />
    </div>
  );
};

export default App;

