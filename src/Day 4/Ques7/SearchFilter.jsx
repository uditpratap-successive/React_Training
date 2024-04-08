/*7.Design a search filter component that consists of an input field. As the user types into the input, use controlled components to 
filter a list of items displayed below. The list should dynamically update to show only items matching the search query.*/

import React, { useState } from "react";

const SearchFilter = () => {
  const items = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
  ];

  const [listData, setListData] = useState(items);

  const [searchedItem, setSearchedItem] = useState("");

  const handleChange = (e) => {
    const query = e.target.value;
    setSearchedItem(query);

    const filtered = items.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    setListData(filtered);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchedItem}
        onChange={handleChange}
      />
      <ul>
        {listData.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchFilter;
