function Stats({ items }) {
  // Items Picked Length
  let numPicked = items.filter((item) => item.picked).length;

  // Percentage Of Picked Items
  let percentage = Math.round((numPicked / items.length) * 100);

  // If There Wasn't Items
  if (!items) {
    return (
      <footer className="stats">
        Start adding some items to your packing list 🚀
      </footer>
    );
  }

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? ` You Got Every Thing! Ready To Go ✈`
          : `👜 You have ${
              items.length
            } Items On Your List, and You already Packed
          ${numPicked}(${items.length === 0 ? 0 : percentage}%)`}
      </em>
    </footer>
  );
}

export default Stats;
