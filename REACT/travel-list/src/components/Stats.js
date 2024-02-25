export default function Stats({ items }) {
  if (!items.length) {
    return (
      <footer className="stats">
        <em>You have not added any item to the list. Start adding items</em>
      </footer>
    );
  }
  const numItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percentPacked = Math.round((packedItems / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentPacked === 100
          ? "All your items are packed. Ready to go ✈️"
          : `You have ${numItems} item on your list, and you already packed
        ${packedItems} (${percentPacked})`}
      </em>
    </footer>
  );
}
