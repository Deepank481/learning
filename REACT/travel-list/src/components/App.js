import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackagingList from "./PackagingList";
import Stats from "./Stats";

export default function App() {
  const [items, setItems] = useState([]);
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }
  function handleDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handleCheckedItems(id) {
    setItems((items) =>
      items.map((item) =>
        id === item.id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    const confirm = window.confirm("Are you sure you want to clear the list?");
    if (confirm) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItems} />
      <PackagingList
        items={items}
        onDeleteItems={handleDeleteItems}
        onCheckItem={handleCheckedItems}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
