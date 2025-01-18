import { useState } from "react";
import Stats from "./Stats";
import Form from "./Form";
import Logo from "./Logo";
import PackagingList from "./PackagingList";

// const initialItems = [
//   { id: 1, description: "Passport", quantity: 2, packed: true },
//   { id: 2, description: "Visa", quantity: 2, packed: true },
//   { id: 3, description: "Laptops", quantity: 2, packed: false },
//   { id: 4, description: "Socks", quantity: 8, packed: true },
//   { id: 5, description: "Charger", quantity: 4, packed: true },
//   { id: 6, description: "Powerbank", quantity: 2, packed: false },
// ];

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    const confirmed = window.confirm("Are you sure to delete all items?");

    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackagingList
        items={items}
        onDeleteItem={handleDeleteItems}
        onToggleItem={handleToggleItem}
        deleteItems={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
