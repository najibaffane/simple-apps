import * as React from 'react';
import './style.css';

import React, { useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function handleAddItem() {
    if (inputValue) {
      setItems([...items, inputValue]);
      setInputValue("");
    }
  }

  function handleRemoveItem(index) {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  }

  return (
    <div>
      <h1>The to do List</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleAddItem}>Add Item</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => handleRemoveItem(index)}>x</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

