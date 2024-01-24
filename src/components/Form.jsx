import { useState } from "react";

export default function Form({ items, setItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  // Handles Add Items Value
  function handelSubmit(e) {
    e.preventDefault();
    if (!description) return;
    let newData = {
      description,
      id: Date.now(),
      quantity,
      picked: false,
    };
    setItems([...items, newData]);
    setDescription("");
  }
  return (
    <>
      <form className="add-form" onSubmit={handelSubmit}>
        <h3>What do you need for your 😍 trip?</h3>
        <select
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}>
          {Array.from({ length: 20 }, (_, i) => i + 1).map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Item.."
          value={description}
          onInput={(e) => setDescription(e.target.value)}
        />
        <button>ADD</button>
      </form>
    </>
  );
}
