import { useState } from "react";

function PackingList({ items, setItems }) {
  // State Of Sort Items
  let [sortBy, setSortBy] = useState("input");

  let sortedItems;

  // Delete Item
  function handelDeleteItem(item) {
    let itemDeleted = items.filter((allItem) => allItem.id !== item.id);
    setItems(itemDeleted);
  }

  // Toggle Input Checked Un Checked
  function handleToggleInput(targetItem) {
    setItems((items) =>
      items.map((item) =>
        item.id === targetItem.id ? { ...item, picked: !item.picked } : item
      )
    );
  }

  // Sort Items By Conditionals
  switch (sortBy) {
    case "picked":
      sortedItems = items
        .slice()
        .sort((a, b) => Number(a.picked) - Number(b.picked));
      break;
    case "description":
      sortedItems = items
        .slice()
        .sort((a, b) => a.description.localeCompare(b.description));
      break;
    default:
      sortedItems = items;
  }

  // Clear All Items
  function handelClearAllItems() {
    const confirm = window.confirm("Are You Shore To Delete All Items");
    if (confirm) setItems([]);
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <li key={item.id}>
            <input
              type="checkbox"
              value={item.picked}
              onChange={() => handleToggleInput(item)}
            />
            <span style={item.picked ? { textDecoration: "line-through" } : {}}>
              {item.description} {item.quantity}
            </span>
            <button onClick={() => handelDeleteItem(item)}>❌</button>
          </li>
        ))}
      </ul>
      <div
        className="actions"
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}>
        <select>
          <option value="input">Sort By Input Order</option>
          <option value="description">Sort By Description</option>
          <option value="picked">Sort By Picked Stats</option>
        </select>
        <button onClick={handelClearAllItems}>Clear Items</button>
      </div>
    </div>
  );
}

export default PackingList;
