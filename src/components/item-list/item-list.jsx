import React, { useState, useEffect } from "react";

import "./item-list.css";
import Spinner from "../spinner";

const ItemList = ({ onItemSelected, getData, children }) => {
  const [itemList, setItemList] = useState(null);

  useEffect(() => {
    getData().then((itemList) => {
      setItemList(itemList);
    });
  }, [getData]);

  const renderItems = (arr) => {
    return arr.map((item) => {
      const { id } = item;
      const label = children(item);
      return (
        <li
          className="list-group-item"
          key={id}
          onClick={() => onItemSelected(id)}
        >
          {label}
        </li>
      );
    });
  };

  if (!itemList) {
    return <Spinner />;
  }

  const items = renderItems(itemList);

  return <div className="item-list list-group">{items}</div>;
};

export default ItemList;
