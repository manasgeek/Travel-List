import { useState } from "react";
import Item from "./Item";

// e -> event
/* Use onSubmit instead of onClick because it will work only
    when clicked but we want to submit when hit enter
    So.....
    */
export default function PackagingList({
  items,
  onDeleteItem,
  onToggleItem,
  deleteItems,
}) {
  const [sort, setSort] = useState("input");
  let sortedItems;

  if (sort === "input") sortedItems = items;

  if (sort === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sort === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
            deleteItems={deleteItems}
            item={item}
          />
        ))}
      </ul>

      <div className="actions">
        <select onChange={(e) => setSort(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>

        <button onClick={deleteItems}>Clear List</button>
      </div>
    </div>
  );
}
