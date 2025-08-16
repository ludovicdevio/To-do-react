// src/Niveau4/Ex5_CRUDReducer.tsx
import React, { useReducer, useState } from "react";

interface Item {
  id: number;
  name: string;
}

type Action =
  | { type: "ADD"; payload: string }
  | { type: "DELETE"; payload: number };

function reducer(state: Item[], action: Action): Item[] {
  switch (action.type) {
    case "ADD":
      return [...state, { id: Date.now(), name: action.payload }];
    case "DELETE":
      return state.filter(i => i.id !== action.payload);
    default:
      return state;
  }
}

export default function ToDoApp() {
  const [items, dispatch] = useReducer(reducer, []);
  const [newItem, setNewItem] = useState<string>("");

  return (
    <div>
      <h2>CRUD avec useReducer</h2>
      <input
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="Nouvel élément"
      />
      <button
        onClick={() => {
          if (!newItem.trim()) return;
          dispatch({ type: "ADD", payload: newItem });
          setNewItem("");
        }}
      >
        Ajouter
      </button>

      <ul>
        {items.map(i => (
          <li key={i.id}>
            {i.name}
            <button onClick={() => dispatch({ type: "DELETE", payload: i.id })}>
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
