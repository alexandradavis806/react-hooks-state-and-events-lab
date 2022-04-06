import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [isOn, setIsDark] = useState(false)
  const appClass = isOn ? "App dark" : "App light"
  
  const handleClick = () => {
    setIsDark(!isOn)
    // console.log(e.target)
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>{isOn ? "Dark mode" : "Light mode"}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
